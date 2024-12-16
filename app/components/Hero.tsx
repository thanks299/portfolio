import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Side: Write-Up */}
        <div className="md:w-1/2 w-full text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm Agbeble Thanks
          </h1>
          <p className="text-lg md:text-xl mb-8">
            I'm a Full Stack Developer skilled in building beautiful and functional user interfaces. 
            I enjoy working on projects that utilize both front-end and back-end technologies to create seamless user experiences.
          </p>
          <button
            onClick={() => {
              setActiveSection('projects');
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 flex items-center justify-center mx-auto md:mx-0"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/thanks.jpg"
              alt="thanks"
              layout="responsive"
              width={500} // Match aspect ratio
              height={500}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}