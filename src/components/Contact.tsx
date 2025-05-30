import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
    return (
        <div id="contacto" className="contact-container">
            <h1>Contacto</h1>
            <p className="contact-text">
                Si querés contactarme, podés hacerlo a través de las siguientes plataformas:
            </p>
            
            <div className="contact-links">
                <a href="https://www.linkedin.com/in/sebastian-furnier/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaLinkedin size={35} />
                </a>
                <a href="https://github.com/SebastianFurnier" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaGithub size={35} />
                </a>
                <a href="mailto:sfurnier@fi.uba.ar" className="social-icon">
                    <FaEnvelope size={35} />
                </a>
                <a href="tel:+5491149796599" className="social-icon">
                    <FaPhone size={35} />
                </a>
            </div>
        </div>
    );
}

export default Contact;