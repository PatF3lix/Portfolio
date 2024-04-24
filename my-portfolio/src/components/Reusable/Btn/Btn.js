import "./btn.css";

const Btn = ({ classes, onClick, children, type }) => {
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Btn;
