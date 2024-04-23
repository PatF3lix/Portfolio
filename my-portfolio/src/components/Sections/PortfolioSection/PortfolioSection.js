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
          <ProfessionalSkillCard />
        </div>
        <div className="personal">
          <PersonalSkillCard />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
