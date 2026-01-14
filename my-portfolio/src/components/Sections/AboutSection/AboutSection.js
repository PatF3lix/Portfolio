import "./about-section.css";
import { useState, useRef } from "react";
import ProfessionalSkillCard from "../../ProfesionalSkillCard/ProfesionalSkillCard";
import PersonalSkillCard from "../../PersonalSkillCard/PersonalSkillCard";
import aboutMeText from "../../../data/AboutMeText";
import Btn from "../../Reusable/Btn/Btn";

const AboutSection = ({ screenWidth }) => {
  const [displayText, setDisplayText] = useState(false);
  const aboutMeRef = useRef(null);

  const handleDisplayText = () => {
    setDisplayText((visibility) => !visibility);
  };

  return (
    <section className="about-section">
      <div ref={aboutMeRef} className="about-me">
        {screenWidth > 900 && <h1 className="about-me-title">About Me</h1>}
        <div className="about-me-content">
          <h2 className="about-me-intro">Hey there, I&apos;m Patrick,</h2>
          {displayText
            ? aboutMeText.map((paragraph) => (
                <p key={paragraph.id} className="about-me-description">
                  {paragraph.text}
                </p>
              ))
            : aboutMeText
                .filter(function (parapgrah) {
                  return parapgrah.id <= 5;
                })
                .map((paragraph) => (
                  <p key={paragraph.id} className="about-me-description">
                    {paragraph.text}
                  </p>
                ))}
        </div>
        <Btn classes={"about-me-btn"} clickAction={handleDisplayText}>
          {displayText ? "Show less" : "Show more "}
        </Btn>
      </div>
      <div className="about-me-profile">
        {screenWidth < 900 && <h1 className="about-me-title">About Me</h1>}
        <img
          className="profile-img"
          alt="profile-pic"
          src="./images/1000004764.jpg"
        />
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
