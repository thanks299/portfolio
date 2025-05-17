import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Agbeble Thanks. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/thanks299" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/iamthanks" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://x.com/heisthanks" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

