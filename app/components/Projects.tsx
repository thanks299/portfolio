import { link } from 'fs'
import Image from 'next/image'

interface ProjectsProps {
  setActiveSection: (section: string) => void
}

export default function Projects({ setActiveSection }: ProjectsProps) {
  const projects = [
    { id: 1, title: 'Movie Review Site', description: 'A platform where visitors can watch trailers and write reviews of the latest movies.', image: '/movie-review.jpeg', link: 'https://terex-movie2view.netlify.app/' },
    { id: 2, title: 'Quote Keeper', description: 'A site to store and manage your favorite quotes.', image: '/quote.png', link: 'https://quotekeeperjustforyou.netlify.app/' },
    { id: 3, title: 'To-Do List', description: 'A simple and effective to-do list application.', image: '/to-do list.png', link: 'https://todo-list-steel-psi-58.vercel.app/' },
    { id: 4, title: 'File Manager', description: 'A project to manage and organize your files efficiently.', image: '/file manager.png', link: 'https://github.com/thanks299/alx-files_manager' },
    { id: 5, title: 'thanks.inc', description: 'A comprehensive website showcasing multiple companies under one umbrella.', image: '/conglomerate.png', link: 'https://thanks-inc.vercel.app/' },
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
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 inline-block">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

