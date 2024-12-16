import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white pt-20"
    >
      {/* Container for Header Content */}
      <div className="container mx-auto px-6 text-center">
        {/* Hero Image (Always First) */}
        <div className="w-full flex justify-center mb-8">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/thanks"
              alt="Hero Image"
              layout="responsive"
              width={500}
              height={500}
              className="rounded-full shadow-lg hover:scale-105 transform transition duration-300"
            />
          </div>
        </div>

        {/* Hero Write-Up */}
        <div className="w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm Agbeble Thanks
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            I'm a Full Stack Developer skilled in building beautiful and functional user interfaces.
            I enjoy working on projects that utilize both front-end and back-end technologies to create seamless user experiences.
          </p>
          <button
            onClick={() => {
              setActiveSection('projects');
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center mx-auto"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}