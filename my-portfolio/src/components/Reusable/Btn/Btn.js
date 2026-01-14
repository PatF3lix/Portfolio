import "./btn.css";

const Btn = ({ classes, clickAction, children, type, altText }) => {
  return (
    <button
      type={type}
      data-alt={altText}
      className={classes}
      onClick={clickAction}
    >
      {children}
    </button>
  );
};

export default Btn;
