import Image from 'next/image'

interface TechItem {
  name: string
  image: string
}

const techStack: TechItem[] = [
  { name: 'Python', image: '/python.png' },
  { name: 'React', image: '/react.jpeg' },
  { name: 'Next.js', image: '/next js.jpeg' },
  { name: 'Node.js', image: '/node.jpeg' },
  { name: 'JavaScript', image: '/javascript-log.jpeg' },
  { name: 'MongoDB', image: '/mongodb.jpeg' },
  { name: 'Git', image: '/git.jpeg' },
  { name: 'TypeScript', image: '/typescript.png' },
  { name: 'Sass', image: '/sass.png' },
  { name: 'Express.js', image: '/express.jpeg' },
  { name: 'flutter', image: '/f.jpeg' },
  { name: 'MySql', image: '/mysql.jpeg' },
  { name: 'HTML5', image: '/html-5.png' },
  { name: 'PHP', image: '/php.png' },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center animate-slide-in">My Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center animate-slide-in">
              <div className="w-20 h-20 relative mb-4 transition-transform duration-300 ease-in-out hover:scale-110">
                <Image
                  src={tech.image}
                  alt={`${tech.name} logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-lg font-semibold">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

