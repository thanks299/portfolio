import Image from 'next/image'

interface ProjectsProps {
  setActiveSection: (section: string) => void
}

export default function Projects({ setActiveSection }: ProjectsProps) {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1', image: '/placeholder.svg' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2', image: '/placeholder.svg' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3', image: '/placeholder.svg' },
    { id: 4, title: 'Project 4', description: 'Description of Project 3', image: '/placeholder.svg' },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center animate-slide-in">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-slide-in">
              <div className="relative h-48 transition-transform duration-300 ease-in-out hover:scale-105">
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

