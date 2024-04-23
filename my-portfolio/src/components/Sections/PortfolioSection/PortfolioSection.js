import "./portfolio-section.css";
import ProfessionalSkillCard from "../../ProfesionalSkillCard/ProfesionalSkillCard";
import PersonalSkillCard from "../../PersonalSkillCard/PersonalSkillCard";
import PortfolioProjects from "../../PortfolioProjects/PortfolioProjects";

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <h1 className={"portfolio-title"}>Portfolio</h1>
      <div className="portfolio-projects-list">
        <PortfolioProjects />
      </div>
      <div className="professional-content">
        <div className="profesional">
          <h2 className="skill-title">Professional Skills</h2>
          <ProfessionalSkillCard />
        </div>

        <div className="personal">
          <h2 className="skill-title">Personal Skills</h2>
          <PersonalSkillCard />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
