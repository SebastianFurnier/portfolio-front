import "./ProjectCard.css";

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={project.image} alt={project.title} />
                <span className={`project-status ${project.status === "Live" ? "live" : "dev"}`}>
                    {project.status}
                </span>
            </div>

            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                    {project.tech.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>

                <div className="project-links">
                    {project.demo && (
                        <a href={project.demo} target="_blank">Demo</a>
                    )}
                    {project.repo && (
                        <a href={project.repo} target="_blank">Código</a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;

