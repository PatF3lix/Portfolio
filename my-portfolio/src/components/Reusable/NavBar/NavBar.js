import React from "react";
import "./navbar.css";

const NavBar = ({ children, classes }) => {
  return (
    <nav className={classes}>
      <ul className="nav-list">{children}</ul>
    </nav>
  );
};

export default NavBar;
