import "./AboutMe.css";

const age = () => {
    const currentYear = new Date().getFullYear();
    const birthYear = 1996;
    return currentYear - birthYear;
}

function aboutMe() {
    return(
        <div id="about-me" className="about-me-container">
            <div className="text-container">
                <h1> Sobre Mi</h1>
                <p className="about-me-text">
                    Hola, mi nombre es Sebastian Furnier, tengo {age()} años y soy estudiante de Ingeniería Informática en la Universidad de Buenos Aires. 
                </p>
                <p className="about-me-text">
                    Desde chico me apasionó la tecnología, pero no fue hasta 2020 que tomé la decisión de seguir este camino y formalizar mis estudios. Actualmente, estoy trabajando en proyectos propios que me permiten aplicar mis conocimientos y seguir aprendiendo en este emocionante campo.
                </p>
                <p className="about-me-text">
                    Tengo una sólida formación e interés en matemáticas, análisis de datos, estructuras de datos, lógica, programación y patrones de diseño.
                </p>
                <p className="about-me-text">
                    Si querés saber más sobre mis proyectos o mi experiencia, no dudes en contactarme. 
                </p>
            </div>
            <div id="sep-about"></div>
        </div>
    );
}

export default aboutMe;