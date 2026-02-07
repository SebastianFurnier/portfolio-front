import AboutMe from "../AboutMe/AboutMe";
import DataLink from "../DataLink/DataLink";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import "./PrincipalPage.css"

function PrincipalPage() {  
    
    const personalLinks = [
        { label: "Sobre mí", target: "about" },
        { label: "Habilidades", target: "skills" },
        { label: "Proyectos", target: "projects" },
    ];

    const socialLinks = [
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/sebastian-furnier/",
        },
        {
            label: "GitHub",
            href: "https://github.com/SebastianFurnier",
        },
        {
            label: "Teléfono",
            href: "tel:+5491149796599",
        },
        {
            label: "Mail",
            href: "mailto:sfurnier@fi.uba.ar",
        }
    ];


    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <div className="principal-page-container">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="bg-video"
                >
                    <source src="/background.mp4" type="video/mp4" />
            </video>
            <div className="principal-data-container">
                <div className="nav-bar-container">
                    <a href="mailto:sfurnier@fi.uba.ar">
                        sfurnier@fi.uba.ar
                    </a>
                    <a href="tel:+541149796599">
                        11-4979-6599
                    </a>
                </div>
                <div className="principal-content-container">
                    <div className="left-bar-container">
                        <span className="subtitle">Categorias</span>
                        <div className="personal-data">
                            {personalLinks.map(({label, target}) => (
                                <DataLink key={label} title={label} onClickHandler={() => scrollTo(target)}/>
                            ))}
                        </div>
                        <span className="subtitle">Social link</span>
                        <div className="personal-data">
                            {socialLinks.map(({label, href}) => (
                                <a 
                                    key={label} 
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-to-data"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="center-content">
                        <section id="about">
                            <AboutMe/>
                        </section>
                        <section id="skills">
                            <Skills/>
                        </section>
                        <section id="projects">
                            <Projects/>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default PrincipalPage;