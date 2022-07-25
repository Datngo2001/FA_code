import React from "react";
import { Nav } from "react-bootstrap";
import styles from "./navBar.module.css";

function NavBar() {
  return (
    <div className={styles["nav-container"]}>
      <Nav as="ul" className={styles["nav"]}>
        <div className={styles["nav-left"]}>
          <Nav.Item className={styles["item"]}>
            <Nav.Link className={styles["link"]}>Start boostrap</Nav.Link>
          </Nav.Item>
        </div>
        <div className={styles["nav-right"]}>
          <Nav.Item className={styles["item"]}>
            <Nav.Link className={styles["link"]}>sign up</Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles["item"]}>
            <Nav.Link className={styles["link"]}>log in</Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </div>
  );
}

export default NavBar;
