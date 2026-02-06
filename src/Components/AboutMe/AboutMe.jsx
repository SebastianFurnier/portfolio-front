import "./AboutMe.css"

function AboutMe() {

    const age = () => {
        const currentYear = new Date().getFullYear();
        const birthYear = 1996;
        return currentYear - birthYear;
        };

    return (
        <div className="about-me-principal-container">
            <div className="about-me-container">
                <div className="full-name">
                    Sebastian Furnier
                </div>
                <div className="sub-title">
                    Full-stack Dev
                </div>
                <div className="about-me">
                     <p className="about-me-text">
                            Mi nombre es Sebastian Furnier, tengo {age()} años y soy estudiante de
                            Ingeniería Informática en la Universidad de Buenos Aires.
                        </p>
                        <p className="about-me-text">
                            Desde chico me apasionó la tecnología, pero no fue hasta 2020 que tomé
                            la decisión de seguir este camino y formalizar mis estudios.
                            Actualmente, estoy trabajando en proyectos propios que me permiten
                            aplicar mis conocimientos y seguir aprendiendo en este emocionante
                            campo.
                        </p>
                        <p className="about-me-text">
                            Tengo una sólida formación e interés en matemáticas, análisis de
                            datos, programación y patrones de diseño.
                        </p>
                        <p className="about-me-text">
                            Si querés saber más sobre mis proyectos o mi experiencia, no dudes en
                            contactarme.
                        </p>
                    </div>
            </div>
            <div className="resume-button-container">
                <button 
                    className="resume-button" 
                    onClick={() =>
                        window.open(
                        "https://drive.google.com/file/d/1vEsSxnO1CyZLFC2eqNSUZ1y_YWxcZm5C/view?usp=sharing",
                        "_blank",
                        "noopener,noreferrer"
                        )
                    }
                >    
                    Descargar CV
                </button>
            </div>
        </div>
    )
}

export default AboutMe;