import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-title">
                    <h1>Sebastian</h1>
                    <h1 id='surname'>Furnier.</h1>
                </div>
                <ul className="navbar-menu">
                    <li><a href="#start">Inicio</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#about-me">Sobre mi</a></li>
                    <li><a href="#contacto">Contacto y links</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;