import "./SkillsCards.css";

function SkillsCards({ name, icon: Icon }) {
    return (
        <div className="skill-card">
            <div className="skill-icon">
                <Icon />
            </div>
            <span className="skill-name">{name}</span>
        </div>
    );
}

export default SkillsCards;