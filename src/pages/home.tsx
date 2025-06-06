import { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import './home.css';

const texts = [
  "Desarrollador backend.",
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
    <>
      <div className="snowflake" style={{ left: '10%', animationDuration: '10s' }}></div>
      <div className="snowflake" style={{ left: '25%', animationDuration: '10s' }}></div>
      <div className="snowflake" style={{ left: '40%', animationDuration: '12s' }}></div>
      <div className="snowflake" style={{ left: '55%', animationDuration: '9s' }}></div>
      <div className="snowflake" style={{ left: '70%', animationDuration: '11s' }}></div>
      <div className="snowflake" style={{ left: '20%', animationDuration: '13s' }}></div>
      <div className="snowflake" style={{ left: '60%', animationDuration: '15s' }}></div>
      <div className="snowflake" style={{ left: '7%', animationDuration: '16s' }}></div>
      <div className="snowflake" style={{ left: '95%', animationDuration: '16s' }}></div>
      <div className="snowflake" style={{ left: '3%', animationDuration: '18s' }}></div>
      <div className="snowflake" style={{ left: '12%', animationDuration: '22s' }}></div>
      <div className="snowflake" style={{ left: '18%', animationDuration: '17s' }}></div>
      <div className="snowflake" style={{ left: '27%', animationDuration: '25s' }}></div>
      <div className="snowflake" style={{ left: '35%', animationDuration: '19s' }}></div>
      <div className="snowflake" style={{ left: '46%', animationDuration: '28s' }}></div>
      <div className="snowflake" style={{ left: '52%', animationDuration: '23s' }}></div>
      <div className="snowflake" style={{ left: '63%', animationDuration: '20s' }}></div>
      <div className="snowflake" style={{ left: '74%', animationDuration: '21s' }}></div>
      <div className="snowflake" style={{ left: '82%', animationDuration: '16s' }}></div>
      <div className="snowflake" style={{ left: '88%', animationDuration: '22s' }}></div>
      <div className="snowflake" style={{ left: '97%', animationDuration: '15' }}></div>

 
      <a href="mailto:sfurnier@fi.uba.ar" className='email'>
        <p>sfurnier@fi.uba.ar</p>
      </a>
      <div className='home-container'> 
        <div className='type-writter'>
            <div className='presentation-profile'>
              <div className='type-writter-container'>
                <div className='name-surname'>
                  <h1 id='name'>Sebastian</h1>
                  <h1 id='surname'>Furnier</h1>
                </div>
                <h2>
                    <TypeWriter text={texts} speed={100} pause={2000} />
                    <span className='cursor'>|</span>
                </h2>
                <div className='separator'></div>
                <div className='presentation'>
                    <p>Estudiante de Ingeniería Informática en la Universidad de Buenos Aires.</p>
                    <p>Apasionado por la tecnología y el desarrollo de software.</p>
                    <p>Desarrollador backend.</p>
                </div>
              </div>
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
    </>
  );
}

export default Home;
