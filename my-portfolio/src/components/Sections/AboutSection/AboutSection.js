import "./about-section.css";
import ProfessionalSkillCard from "../../ProfesionalSkillCard/ProfesionalSkillCard";
import PersonalSkillCard from "../../PersonalSkillCard/PersonalSkillCard";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-me">
        <h1 className="about-me-title">About Me</h1>
        <div className="about-me-content">
          <h2 className="about-me-intro">Hey there, I&apos;m Patrick,</h2>
          <p className="about-me-description">
            A passionate self-taught programmer with three years of intense
            learning and exploration under my belt.
          </p>
          <p className="about-me-description">
            My journey into the world of coding began with a thirst for
            knowledge and a drive to understand the intricacies of technology.
          </p>
          <p className="about-me-description">
            Although I started my journey solo, I recognized the value of
            structured learning and decided to further hone my skills by
            attending a full-stack development course in Montreal.
          </p>
          <p className="about-me-description">
            Immersing myself in a year-long program, I delved deep into the
            world of web development, mastering various languages and frameworks
            along the way.
          </p>
          <p className="about-me-description">
            But my thirst for knowledge didn&apos;t stop there...
          </p>
        </div>
      </div>
      <div className="about-me-img">
        <div className="profile-img" />
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
      </div>
    </section>
  );
};

export default AboutSection;
