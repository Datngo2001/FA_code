import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ListItemButton, ListItem, ListItemText } from "@mui/material";
import styles from "./listItemNavLink.module.css";

function ListItemNavLink({ text, to, handleClick }) {
  const [isActive, setActive] = useState(false);

  const getLinkClass = ({ isActive }) => {
    setActive(isActive);
    return `${styles.normal} ${isActive ? styles.active : ""}`;
  };

  return (
    <ListItem
      disablePadding
      onClick={handleClick}
      className={isActive ? styles["active-item"] : ""}
    >
      <ListItemButton className={styles.button}>
        <ListItemText>
          <NavLink className={getLinkClass} to={to}>
            {text}
          </NavLink>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
}

export default ListItemNavLink;
