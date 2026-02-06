import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css"

function Projects() {
    const projects = [
        {
            title: "Turnow",
            description: "Aplicación para administrar turnos.",
            tech: ["React", "Java", "Spring Boot"],
            image: "/turnow.png",
            demo: "https://turnow.vercel.app",
            repo: null,
            status: "Live"
        },
        {
            title: "Acortador de Links",
            description: "Acortador de links.",
            tech: ["React", "Java", "Spring Boot", "Docker"],
            image: "/shortener.png",
            demo: "https://sfshortlink.vercel.app/",
            repo: "https://github.com/SebastianFurnier/LINK_SHORTENER",
            status: "Live"
        },
        {
            title: "Portfolio personal",
            description: "Portfolio personal.",
            tech: ["React", "CSS"],
            image: "/portfolio.png",
            demo: "https://sebastianfurnier.vercel.app/",
            repo: null,
            status: "Live"
        },
        {
            title: "Sistema POS",
            description: "Punto de venta para comercio del rubro eléctrico.",
            tech: ["Java", "Spring Boot", "SQL", "React"],
            image: "/pos.png",
            demo: "https://sayco-front.vercel.app/",
            repo: null,
            status: "En desarrollo"
        }
    ];

    return(
        <div className="projects-principal-container">
            <h2 className="projects-title">Proyectos</h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects;