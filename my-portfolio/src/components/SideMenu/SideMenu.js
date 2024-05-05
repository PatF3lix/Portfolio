import React from "react";
import "./side-menu.css";

const SideMenu = ({ setOpenedMenu }) => {
  function toggleOptionsMenu() {
    var menuIcon = document.querySelector(".side-menu");
    menuIcon.classList.toggle("side-menu-open");
    setOpenedMenu((openedMenu) => !openedMenu);
  }

  return (
    <div className="side-menu" onClick={toggleOptionsMenu}>
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
  );
};

export default SideMenu;
