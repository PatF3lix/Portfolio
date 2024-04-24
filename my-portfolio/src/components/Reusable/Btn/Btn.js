import "./btn.css";

const Btn = ({ classes, clickAction, children, type }) => {
  return (
    <button type={type} className={classes} onClick={clickAction}>
      {children}
    </button>
  );
};

export default Btn;
