import { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import './home.css';

const texts = [
  "Apasionado por la tecnologia.",
  "Desarrollador backend.",
  "Desarrollador frontend.",
  "Ingeniero de software."
];

interface TypewriterProps {
  text: string[];
  speed?: number;
  pause?: number;
}

function TypeWriter({ text, speed, pause }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      if (charIndex < text[currentIndex].length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => {
          setCurrentIndex(prev => (prev + 1) % text.length);
          setCharIndex(0);
          setDisplayedText('');
        }, pause);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [charIndex, currentIndex, text, speed, pause]);

  return <span>{displayedText}</span>;
}

function Home() {
  return (
    <div> 
      <div id='start'></div>
      <div className='type-writter'>
          <div className='presentation-profile'> 
            <div className='type-writter-container'>
              <h1>Hola, soy Sebastian Furnier</h1>
              <h2>
                  <TypeWriter text={texts} speed={100} pause={2000} />
                  <span className='cursor'>|</span>
              </h2>
              <p className='presentation'>
                  Estudiante de Ingeniería Informática en la Universidad de Buenos Aires. Apasionado por la tecnología y el desarrollo de software. Desarrollador Backend y Frontend.
              </p>
            </div>
            <img src="/images/profilepic.png" alt="Sebastian Furnier" className='profile-image' />
          </div>
          <div className='presentation-links'>
            <a href="https://www.linkedin.com/in/sebastian-furnier/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/SebastianFurnier" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={30} />
            </a>
          </div>
      </div>
    </div>
  );
}

export default Home;
