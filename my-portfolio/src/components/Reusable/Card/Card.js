import "./card.css";

const Card = ({ children, classes, clickAction }) => {
  return (
    <div onClick={clickAction} className={classes}>
      {children}
    </div>
  );
};

export default Card;
