import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./appNavLink.module.css";

function AppNavLink({ text, to }) {
  const getLinkClass = ({ isActive }) =>
    `${styles.normal} ${isActive ? styles.active : ""}`;

  return (
    <NavLink className={getLinkClass} to={to}>
      <Button>{text}</Button>
      <div className={styles.indicator}></div>
    </NavLink>
  );
}

export default AppNavLink;
