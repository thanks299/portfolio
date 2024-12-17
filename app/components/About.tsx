interface AboutProps {
  setActiveSection: (section: string) => void
}

export default function About({ setActiveSection }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            Graduated with a degree in Computer Science from the National Open University of Nigeria. I have a strong foundation in computer science concepts and software engineering principles. I'm always eager to learn new things and improve my skills to stay up-to-date with the latest trends in the tech industry. I got 3 certification from Alx africa which include a software engineer, artificial intelligience career essentials, and virtual assistance certifications. Doing his masters in cybersecurity in miva open university. I have a passion for cybersecurity and I'm always looking for ways to improve my skills in this area. I have experience working with various programming languages, frameworks, and tools, including Python, JavaScript, React, Node.js, and MongoDB. I have also worked on projects involving web development, mobile app development. 
          </p>
          <p className="text-lg mb-6">
            
          </p>
          <p className="text-lg mb-6">
            I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-friendly websites and applications. With expertise in modern web technologies like React, Node.js, and Next.js, I strive to build scalable and efficient solutions to complex problems.
          </p>
          <p className="text-lg mb-6">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on software design patterns.
          </p>
          <p className="text-lg mb-6">
          I'm currently working as a software engineer at a tech startup, where I collaborate with a team of talented developers to build innovative products that make a difference. I'm excited about the opportunity to work on challenging projects that push me to grow and expand my knowledge.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => {
                setActiveSection('contact')
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

