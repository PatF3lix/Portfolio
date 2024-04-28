import "./about-section.css";
import { useState, useRef } from "react";
import ProfessionalSkillCard from "../../ProfesionalSkillCard/ProfesionalSkillCard";
import PersonalSkillCard from "../../PersonalSkillCard/PersonalSkillCard";
import aboutMeText from "../../../data/AboutMeText";
import Btn from "../../Reusable/Btn/Btn";

const AboutSection = () => {
  const [displayText, setDisplayText] = useState(false);
  const aboutMeRef = useRef(null);

  const handleDisplayText = () => {
    setDisplayText((visibility) => !visibility);
    if (!displayText) {
      aboutMeRef.current.style.height = "100%";
    } else {
      aboutMeRef.current.style.height = "92%";
    }
  };

  return (
    <section className="about-section">
      <div ref={aboutMeRef} className="about-me">
        <h1 className="about-me-title">About Me</h1>
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
        <Btn
          classes={"btn btn-placement-right"}
          clickAction={handleDisplayText}
        >
          {displayText ? "Show less" : "Show more "}
        </Btn>
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
