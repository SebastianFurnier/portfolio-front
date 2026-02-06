import "./Skills.css"
import SkillsCards from "../SkillsCards/SkillsCards";

import {
    FaJava,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaDocker,
    FaGit,
    FaLinux
} from "react-icons/fa";

import {
    SiJavascript,
    SiSpringboot,
    SiPython,
    SiC,
    SiVite,
    SiVercel,
    SiMysql
} from "react-icons/si";

function Skills() {

    const skills = [
        { name: "Java", icon: FaJava },
        { name: "JavaScript", icon: SiJavascript },
        { name: "C", icon: SiC },
        { name: "Python", icon: SiPython },

        { name: "Spring Boot", icon: SiSpringboot },
        { name: "APIs REST", icon: FaReact },
        { name: "POO", icon: FaJava },

        { name: "React", icon: FaReact },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "Vite", icon: SiVite },

        { name: "Docker", icon: FaDocker },
        { name: "Vercel", icon: SiVercel },
        { name: "Linux", icon: FaLinux },
        { name: "SQL", icon: SiMysql },
        { name: "Git", icon: FaGit }
    ];

    return (
        <div className="skills-principal-container">
            <div className="title">Habilidades</div>
            <div className="skills-icons">
                {skills.map((skill, index) => (
                    <SkillsCards
                        key={index}
                        name={skill.name}
                        icon={skill.icon}
                    />
                ))}
            </div>
        </div>
    );
}

export default Skills;