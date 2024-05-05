import React from "react";
import Card from "../Reusable/Card/Card";
import FillMeter from "../Reusable/FillMeter/FillMeter";
import "./profesional-skill-card.css";

const ProfessionalSkillCard = () => {
  return (
    <Card classes={"skillsCard"}>
      <div className="skill-category">
        <h2 className="card-title-skill">HTML/CSS/JS</h2>
        <FillMeter
          meterBgColor={"fill-meter-bg-red"}
          barBgColor={"fill-bar-bg-green"}
          fillPercentage={"fillPercentage-80"}
        />
      </div>
      <div className="skill-category">
        <h2 className="card-title-skill">React/NodeJs</h2>
        <FillMeter
          meterBgColor={"fill-meter-bg-red"}
          barBgColor={"fill-bar-bg-green"}
          fillPercentage={"fillPercentage-80"}
        />
      </div>
      <div className="skill-category">
        <h2 className="card-title-skill">Python/Django</h2>
        <FillMeter
          meterBgColor={"fill-meter-bg-red"}
          barBgColor={"fill-bar-bg-green"}
          fillPercentage={"fillPercentage-60"}
        />
      </div>
      <div className="skill-category">
        <h2 className="card-title-skill">DevOps</h2>
        <FillMeter
          meterBgColor={"fill-meter-bg-red"}
          barBgColor={"fill-bar-bg-green"}
          fillPercentage={"fillPercentage-50"}
        />
      </div>
      <div className="skill-category">
        <h2 className="card-title-skill">C/C++</h2>
        <FillMeter
          meterBgColor={"fill-meter-bg-red"}
          barBgColor={"fill-bar-bg-green"}
          fillPercentage={"fillPercentage-60"}
        />
      </div>
      <div className="skill-category">
        <h2 className="card-title-skill">CyberSecurity</h2>
        <FillMeter
          meterBgColor={"fill-meter-bg-red"}
          barBgColor={"fill-bar-bg-green"}
          fillPercentage={"fillPercentage-50"}
        />
      </div>
    </Card>
  );
};

export default ProfessionalSkillCard;
