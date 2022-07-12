import React from "react";
import { useId } from "react";
import { useState } from "react";
import styles from "./inputPassword.module.css";

function InputPassword({ label, name, value, handleChange }) {
  const id = useId();
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="container">
      <label htmlFor={id}>{label}</label>
      <input
        htmlFor={id}
        name={name}
        type={isShow ? "text" : "password"}
        value={value}
        onChange={handleChange}
      />
      <span className={styles.icon} title={""}>
        <i className="fa-solid fa-eye "></i>
      </span>
    </div>
  );
}

export default InputPassword;
