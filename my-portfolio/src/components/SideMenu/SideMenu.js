import "./side-menu.css";

const SideMenu = ({ toggleOptionsMenu }) => {
  return (
    <div className="side-menu" onClick={toggleOptionsMenu}>
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
  );
};

export default SideMenu;
