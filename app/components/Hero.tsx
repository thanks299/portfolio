import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = `I'm a Full Stack Developer skilled in building beautiful and functional user interfaces. I enjoy working on projects that utilize both front-end and back-end technologies to create seamless user experiences. Let's build something amazing together!`;
  const typingSpeed = 50;
  const resetInterval = 60000; // 1 minute

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let cursorBlinkInterval: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;
    let textIndex = 0;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (textIndex <= fullText.length - 1) {
          // If within bounds, add character
          setDisplayedText((prev) => prev + fullText[textIndex]);
          textIndex++;
        } else {
          // If out of bounds, stop typing and handle the end state
          clearInterval(typingInterval);
          setShowCursor(false); // Stop the blinking cursor
          resetTimeout = setTimeout(resetTyping, resetInterval); // Reset after interval
        }
      }, typingSpeed);
    };

    const resetTyping = () => {
      setDisplayedText('');
      textIndex = 0;
      setShowCursor(true); // Show cursor at the start of reset
      startTyping();
    };

    cursorBlinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorBlinkInterval);
      clearTimeout(resetTimeout);
    };
  }, [fullText, typingSpeed, resetInterval]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      aria-label="Hero section"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2">
          <div className="relative w-48 h-48 mx-auto md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/thanks.jpeg"
              alt="Profile picture of Agbeble Thanks"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Hi, I'm <br />
            Agbeble Thanks
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 overflow-visible">
            {displayedText}
            {showCursor && <span className="cursor">|</span>}
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