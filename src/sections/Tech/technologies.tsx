import "./technologies.css";

function Technologies() {
  const logos = [
    { src: "/logos/java.svg", alt: "Java" },
    { src: "/logos/c.svg", alt: "C" },
    { src: "/logos/python.svg", alt: "Python" },
    { src: "/logos/javascript.svg", alt: "JavaScript" },
    { src: "/logos/spring.svg", alt: "Spring Boot" },
    { src: "/logos/css-3.svg", alt: "css" },
    { src: "/logos/html-5.svg", alt: "html" },
    { src: "/logos/mysql-icon.svg", alt: "MySql" },
    { src: "/logos/postman-icon.svg", alt: "Postman" },
    { src: "/logos/react.svg", alt: "React" },
    { src: "/logos/typescript-icon.svg", alt: "Typescript" },
    { src: "/logos/git-icon.svg", alt: "Git" },
    { src: "/logos/docker-icon.svg", alt: "Docker" },
  ];

  return (
    <div id="tecnologias" className="tech-container">
      <h1 className="tech-title">Tecnologias</h1>
      <div className="tech-icons">
        {logos.map((logo) => (
            <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            title={logo.alt}
            className="tech-logo"
            />
        ))}
      </div>
      <div id='sep-tech'></div>
    </div>
  );
}

export default Technologies;