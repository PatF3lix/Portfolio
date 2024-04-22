const Btn = ({ classes, onClick, content }) => {
  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
};

export default Btn;
