import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true); // Controls cursor visibility
  const fullText = `I'm a Full Stack Developer skilled in building beautiful and functional user interfaces. I enjoy working on projects that utilize both front-end and back-end technologies to create seamless user experiences.`;
  const typingSpeed = 50; // Faster typing speed: 50ms per character
  const resetInterval = 60 * 1000; // 1 minute in milliseconds

  useEffect(() => {
    let currentTextIndex = 0;
    let typingInterval: NodeJS.Timeout;
    let cursorBlink: NodeJS.Timeout;

    const startTyping = () => {
      // Typing effect
      typingInterval = setInterval(() => {
        setDisplayedText((prev) => {
          if (currentTextIndex < fullText.length) {
            currentTextIndex++;
            return fullText.slice(0, currentTextIndex);
          } else {
            clearInterval(typingInterval); // Typing complete
            setTimeout(() => resetTyping(), resetInterval); // Wait for 1 minute
            return prev;
          }
        });
      }, typingSpeed);
    };

    const resetTyping = () => {
      setDisplayedText('');
      currentTextIndex = 0;
      setShowCursor(true); // Show cursor again when typing restarts
      startTyping();
    };

    // Start the blinking cursor
    cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    // Start typing effect
    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorBlink); // Cleanup intervals on component unmount
    };
  }, [fullText, typingSpeed, resetInterval]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-64 h-64 mx-auto md:w-96 md:h-96">
            <Image
              src="/thanks.jpg"
              alt="Your Name"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hi, I'm Agbeble Thanks</h1>
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
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 animate-float" />
          </button>
        </div>
      </div>
    </section>
  );
}

