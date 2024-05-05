import React from "react";
import "./overlay.css";

const Overlay = ({ children, classes }) => {
  return <div className={classes}>{children}</div>;
};

export default Overlay;
