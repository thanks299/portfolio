import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText =
    "I'm a Frontend Developer skilled in building beautiful and functional user interfaces. I enjoy working on projects that utilize front-end technologies to create seamless user experiences. Let's build something amazing together!";
  const typingSpeed = 100;
  const resetInterval = 60000; // 1 minute
  const textIndexRef = useRef(0);

  useEffect(() => {
    let typingInterval: number;
    let cursorBlinkInterval: number;
    let resetTimeout: number;

    const startTyping = () => {
      typingInterval = window.setInterval(() => {
        if (textIndexRef.current < fullText.length) {
          setDisplayedText((prev) => prev + fullText[textIndexRef.current]);
          textIndexRef.current++;
        } else {
          clearInterval(typingInterval);
          setShowCursor(false);
          resetTimeout = window.setTimeout(resetTyping, resetInterval);
        }
      }, typingSpeed);
    };

    const resetTyping = () => {
      setDisplayedText('');
      textIndexRef.current = 0;
      setShowCursor(true);
      startTyping();
    };

    cursorBlinkInterval = window.setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorBlinkInterval);
      clearTimeout(resetTimeout);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      aria-label="Hero section"
    >
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
         <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <Image
          src="/thanks 2.jpg"
          alt="Profile picture of Agbeble Thanks"
          layout="fill"
          objectFit="cover"
          className="shadow-lg animate-float"
          priority
          />
         </div>

        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Hi, I'm 
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6">
            Agbeble Thanks
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 overflow-visible">
            {displayedText}
            {showCursor && (
              <span className="cursor" aria-hidden="true">
                |
              </span>
            )}
          </p>
          <button
            onClick={() => {
              setActiveSection('projects');
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center mx-auto md:mx-0 text-xs sm:text-sm"
            aria-label="View my projects"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5 animate-float" />
          </button>
        </div>
      </div>
    </section>
  );
}