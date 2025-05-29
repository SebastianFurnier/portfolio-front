import { useEffect } from 'react';
import './ScrollDownHint.css';

const ScrollDownHint = () => {
  useEffect(() => {
    const scrollDownEl = document.querySelector('.scroll-down');

    const onScroll = () => {
      if (window.scrollY > 10) {
        scrollDownEl?.classList.add('hide');
      } else {
        scrollDownEl?.classList.remove('hide');
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="scroll-down">Scroll down</div>;
};

export default ScrollDownHint;