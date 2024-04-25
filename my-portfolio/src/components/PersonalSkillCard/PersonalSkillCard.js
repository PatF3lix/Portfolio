import Card from "../Reusable/Card/Card";
import FillMeter from "../Reusable/FillMeter/FillMeter";
import "./personal-skill-card.css";

const PersonalSkillCard = () => {
  return (
    <Card classes={"personalSkillsCard"}>
      <div>
        <h2 className="card-title-skill">Communication</h2>
        <FillMeter
          meterBgColor={"fill-meter-bg-red"}
          barBgColor={"fill-bar-bg-green"}
          fillPercentage={"fillPercentage-90"}
        />
      </div>
      <div>
        <h2 className="card-title-skill">Problem solving</h2>
        <FillMeter
          meterBgColor={"fill-meter-bg-red"}
          barBgColor={"fill-bar-bg-green"}
          fillPercentage={"fillPercentage-80"}
        />
      </div>
      <div>
        <h2 className="card-title-skill">Team Work</h2>
        <FillMeter
          meterBgColor={"fill-meter-bg-red"}
          barBgColor={"fill-bar-bg-green"}
          fillPercentage={"fillPercentage-70"}
        />
      </div>
      <div>
        <h2 className="card-title-skill">Leadership</h2>
        <FillMeter
          meterBgColor={"fill-meter-bg-red"}
          barBgColor={"fill-bar-bg-green"}
          fillPercentage={"fillPercentage-60"}
        />
      </div>
      <div>
        <h2 className="card-title-skill">Languages</h2>
        <FillMeter
          meterBgColor={"fill-meter-bg-red"}
          barBgColor={"fill-bar-bg-green"}
          fillPercentage={"fillPercentage-90"}
        />
      </div>
    </Card>
  );
};

export default PersonalSkillCard;
