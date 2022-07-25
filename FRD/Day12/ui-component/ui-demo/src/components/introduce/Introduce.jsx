import React from "react";
import styles from "./introduce.module.css";
import img01 from "./images/01.jpg";
import img02 from "./images/02.jpg";
import img03 from "./images/03.jpg";
import { Image } from "react-bootstrap";

function Introduce() {
  return (
    <div className={styles["introduce"]}>
      <div className={styles["introduce-item"]}>
        <div className={styles["image"]}>
          <Image fluid roundedCircle src={img01}></Image>
        </div>
        <div className={styles["content"]}>
          <h1>For those about to rock...</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            dignissimos cupiditate unde eum reprehenderit esse inventore tempore
            impedit facilis possimus adipisci vel laboriosam accusamus aut,
            culpa nemo modi ipsa repudiandae.
          </p>
        </div>
      </div>
      <div className={styles["introduce-item"] + " " + styles["revert"]}>
        <div className={styles["image"]}>
          <Image fluid roundedCircle src={img02}></Image>
        </div>
        <div className={styles["content"]}>
          <h1>We salute you!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            dignissimos cupiditate unde eum reprehenderit esse inventore tempore
            impedit facilis possimus adipisci vel laboriosam accusamus aut,
            culpa nemo modi ipsa repudiandae.
          </p>
        </div>
      </div>
      <div className={styles["introduce-item"]}>
        <div className={styles["image"]}>
          <Image fluid roundedCircle src={img03}></Image>
        </div>
        <div className={styles["content"]}>
          <h1>Let there be rock!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            dignissimos cupiditate unde eum reprehenderit esse inventore tempore
            impedit facilis possimus adipisci vel laboriosam accusamus aut,
            culpa nemo modi ipsa repudiandae.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
