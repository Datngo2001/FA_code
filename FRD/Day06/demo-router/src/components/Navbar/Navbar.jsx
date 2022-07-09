import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
function Navbar() {
  const getLinkClass = (linkData) =>
    `${styles["nav-bar"]} ${linkData.isActive ? styles.active : ""}`;
  return (
    <div className={styles.header}>
      <NavLink className={getLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={getLinkClass} to="/about-us">
        AboutUs
      </NavLink>
      <NavLink className={getLinkClass} to="/profile">
        Profile
      </NavLink>
    </div>
  );
}

export default Navbar;
