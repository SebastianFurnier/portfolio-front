import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">
          <h1>Sebastian</h1>
          <h1 id='surname'>Furnier.</h1>
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'menu-open' : ''}`}>
          <li><a href="#start" onClick={() => setMenuOpen(false)}>Inicio</a></li>
          <li><a href="#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
          <li><a href="#about-me" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
          <li><a href="#tecnologias" onClick={() => setMenuOpen(false)}>Tecnologías</a></li>
          <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
