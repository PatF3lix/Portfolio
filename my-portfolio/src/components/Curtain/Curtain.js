import "./Curtains.css";

const Curtain = ({ classes, handleTransitionEnd }) => {
  return <div className={classes} onTransitionEnd={handleTransitionEnd}></div>;
};

export default Curtain;
