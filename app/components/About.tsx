import { useState, useEffect } from 'react'
import { Code, Book, Music, Camera, Coffee } from 'lucide-react'

interface AboutProps {
  setActiveSection: (section: string) => void
}

export default function About({ setActiveSection }: AboutProps) {
  const [activeTab, setActiveTab] = useState('bio')
  const [skills, setSkills] = useState([
    { name: 'JavaScript', level: 90, loaded: false },
    { name: 'React', level: 85, loaded: false },
    { name: 'Node.js', level: 80, loaded: false },
    { name: 'Python', level: 75, loaded: false },
    { name: 'MongoDB', level: 70, loaded: false },
  ])

  useEffect(() => {
    if (activeTab === 'skills') {
      setSkills(skills.map(skill => ({ ...skill, loaded: false })))
      const timer = setTimeout(() => {
        setSkills(skills.map(skill => ({ ...skill, loaded: true })))
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [activeTab])

  const experiences = [
    { year: '2024', event: 'Obtained 3 certifications from Alx Africa' },
    { year: '2024', event: 'Graduated with a Bachelor\'s degree in Computer Science' },
    { year: '2022', event: 'Completed 5 web development projects' },
    { year: '2021', event: 'Completed first major full-stack project' },
    { year: '2020', event: 'Started learning web development' },
  ]

  const interests = [
    { icon: <Code className="w-5 h-5 md:w-6 md:h-6" />, text: 'Coding' },
    { icon: <Book className="w-5 h-5 md:w-6 md:h-6" />, text: 'Reading' },
    { icon: <Music className="w-5 h-5 md:w-6 md:h-6" />, text: 'Music' },
    { icon: <Camera className="w-5 h-5 md:w-6 md:h-6" />, text: 'Photography' },
    { icon: <Coffee className="w-5 h-5 md:w-6 md:h-6" />, text: 'Coffee' },
    { icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5v9z"/>
      </svg>
    ), text: 'Football' },
  ]

  return (
    <section id="about" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800 animate-slide-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 md:mb-8 flex flex-wrap justify-center gap-2 md:gap-4">
            {['bio', 'skills', 'experience', 'interests'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-full ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                } transition duration-300`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === 'bio' && (
            <div className="space-y-4 md:space-y-6 animate-slide-in text-sm sm:text-base md:text-lg">
              <p>
                I graduated with a Bachelor's degree in Computer Science from the National Open University of Nigeria, establishing a strong foundation in computer science concepts and software engineering principles. In 2024, I achieved three certifications from Alx Africa: Software Engineering, Artificial Intelligence Career Essentials (AICE), and Virtual Assistance.
              </p>
              <p>
                Currently, I'm pursuing a Master's degree in Information Technology at National Open University of Nigeria, fueled by my passion for this critical field. I'm constantly seeking ways to enhance my skills, ensuring I remain at the forefront of this rapidly evolving domain.
              </p>
              <p>
                My experience spans various programming languages, frameworks, and tools, including Python, JavaScript, React, Node.js, and MongoDB. I've worked on diverse projects involving web development and mobile app development, always striving to create beautiful, functional, and user-friendly solutions.
              </p>
              <p>
                When I'm not immersed in code or studying, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book on software design patterns. I'm always eager to learn and improve my skills to stay current with the latest trends in the tech industry.
              </p>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-3 md:space-y-4 animate-slide-in">
              {skills.map((skill) => (
                <div key={skill.name} className="mb-2 md:mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs sm:text-sm md:text-base font-medium text-blue-700 dark:text-blue-300">{skill.name}</span>
                    <span className="text-xs sm:text-sm md:text-base font-medium text-blue-700 dark:text-blue-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 md:h-2.5 dark:bg-gray-700">
                    <div 
                      className="bg-blue-600 h-2 md:h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: skill.loaded ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="relative border-l border-gray-200 dark:border-gray-700 animate-slide-in pl-3 md:pl-4">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-6 md:mb-10 ml-2 md:ml-4">
                  <div className="absolute w-2 md:w-3 h-2 md:h-3 bg-gray-200 rounded-full mt-1.5 -left-1 md:-left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{exp.year}</time>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white">{exp.event}</h3>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'interests' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 animate-slide-in">
              {interests.map((interest, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white dark:bg-gray-700 p-3 md:p-4 rounded-lg shadow-md">
                  {interest.icon}
                  <span className="text-xs sm:text-sm md:text-base">{interest.text}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-center mt-6 md:mt-8">
            <button
              onClick={() => {
                setActiveSection('contact')
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 text-xs sm:text-sm md:text-base rounded-full transition duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

