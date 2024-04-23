import Card from "../Reusable/Card/Card";
import FillMeter from "../Reusable/FillMeter/FillMeter";

const ProfessionalSkillCard = () => {
  return (
    <Card classes={"profesionalSkillsCard"}>
      <div>
        <h2 className="card-title-skill">HTML/CSS/JS</h2>
        <FillMeter
          meterBgColor={"fill-meter-bg-red"}
          barBgColor={"fill-bar-bg-green"}
          fillPercentage={"fillPercentage-50"}
        />
      </div>
      <div>
        <h2 className="card-title-skill">React/NodeJs</h2>
        <FillMeter
          meterBgColor={"fill-meter-bg-red"}
          barBgColor={"fill-bar-bg-green"}
          fillPercentage={"fillPercentage-50"}
        />
      </div>
      <div>
        <h2 className="card-title-skill">Python/Django</h2>
        <FillMeter
          meterBgColor={"fill-meter-bg-red"}
          barBgColor={"fill-bar-bg-green"}
          fillPercentage={"fillPercentage-50"}
        />
      </div>
      <div>
        <h2 className="card-title-skill">Docker/Docker Compose</h2>
        <FillMeter
          meterBgColor={"fill-meter-bg-red"}
          barBgColor={"fill-bar-bg-green"}
          fillPercentage={"fillPercentage-50"}
        />
      </div>
      <div>
        <h2 className="card-title-skill">C/C++</h2>
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
