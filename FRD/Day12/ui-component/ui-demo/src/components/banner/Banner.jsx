import React from "react";
import styles from "./banner.module.css";
import { Button } from "react-bootstrap";
import background from "./bg.PNG";

function Banner() {
  return (
    <div
      className={styles["banner-container"]}
      style={{ background: `url(${background})` }}
    >
      <div className={styles["banner"]}>
        <h1>One Page Wonder</h1>
        <h2>Will Rock Your Stock Off</h2>
        <Button variant="light">Learn more</Button>
      </div>
    </div>
  );
}

export default Banner;
