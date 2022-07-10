import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
function Navbar() {
  const getLinkClass = (linkData) =>
    `${styles["nav-bar"]} ${linkData.isActive ? styles.active : styles.normal}`;
  return (
    <div className={styles.navbar}>
      <NavLink className={getLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={getLinkClass} to="/about-us">
        AboutUs
      </NavLink>
      <NavLink className={getLinkClass} to="/profile">
        Profile
      </NavLink>
      <NavLink className={getLinkClass} to="/products">
        Products
      </NavLink>
    </div>
  );
}

export default Navbar;
