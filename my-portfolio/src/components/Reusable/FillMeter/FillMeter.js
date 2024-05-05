import React from "react";
import "./fill-meter.css";

const FillMeter = ({ meterBgColor, barBgColor, fillPercentage }) => {
  return (
    <div className={`fill-meter ${meterBgColor}`}>
      <div className={`fill-bar ${barBgColor} ${fillPercentage}`}></div>
    </div>
  );
};

export default FillMeter;
