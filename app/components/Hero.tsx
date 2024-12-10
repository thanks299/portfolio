import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-64 h-64 mx-auto md:w-96 md:h-96">
            <Image
              src="/thanks.jpg"
              alt="thanks"
              layout="full"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hi, I'm Agbeble Thanks</h1>
          <p className="text-xl md:text-2xl mb-8">I'm a Full Stack Developer skilled in building beautiful and functional user interfaces. I enjoy working on projects that utilize both front-end and back-end technologies to create seamless user experiences.</p>
          <button
            onClick={() => {
              setActiveSection('projects')
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center mx-auto md:mx-0"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 animate-float" />
          </button>
        </div>
      </div>
    </section>
  )
}

