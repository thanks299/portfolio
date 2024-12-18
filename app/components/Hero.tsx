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
    let currentTextIndex = 0;
    let typingInterval: NodeJS.Timeout;
    let cursorBlink: NodeJS.Timeout;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        setDisplayedText((prev) => {
          if (currentTextIndex < fullText.length) {
            currentTextIndex++;
            return fullText.slice(0, currentTextIndex);
          }
          clearInterval(typingInterval);
          setTimeout(resetTyping, resetInterval);
          return prev;
        });
      }, typingSpeed);
    };

    const resetTyping = () => {
      setDisplayedText('');
      currentTextIndex = 0;
      setShowCursor(true);
      startTyping();
    };

    cursorBlink = setInterval(() => setShowCursor((prev) => !prev), 500);
    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorBlink);
    };
  }, [fullText, typingSpeed, resetInterval]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
      aria-label="Hero section"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-64 h-64 mx-auto md:w-96 md:h-96">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <br /> Agbeble Thanks
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {displayedText}
            {showCursor && <span className="cursor">|</span>}
          </p>
          <button
            onClick={() => {
              setActiveSection('projects');
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center mx-auto md:mx-0"
            aria-label="View my projects"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 animate-float" />
          </button>
        </div>
      </div>
    </section>
  );
}

