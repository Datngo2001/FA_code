import React from "react";
import styles from "./footer.module.css";

function Footer(props) {
  return (
    <div className={styles["container"]}>
      <span className={styles["footer"]}>Copy right your website 2020</span>
    </div>
  );
}
export default Footer;
