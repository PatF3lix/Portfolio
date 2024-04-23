import "./card.css";

const Card = ({ children, classes }) => {
  return <div className={classes}>{children}</div>;
};

export default Card;
