import "./btn.css";

const Btn = ({ classes, onClick, children }) => {
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Btn;
