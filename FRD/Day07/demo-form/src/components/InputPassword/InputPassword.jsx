import React from "react";
import { useId } from "react";
import { useState } from "react";
import styles from "./inputPassword.module.css";

function InputPassword({ label, name, value, handleChange }) {
  const id = useId();
  const [isShow, setIsShow] = useState(false);

  const showPassword = () => {
    setIsShow((val) => !val);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.password}>
        <input
          className={styles.input}
          htmlFor={id}
          name={name}
          type={isShow ? "text" : "password"}
          value={value}
          onChange={handleChange}
          placeholder="Password..."
        />
        <span className={styles.icon} title={""} onClick={showPassword}>
          {isShow ? (
            <i className="fa-solid fa-eye "></i>
          ) : (
            <i className="fa-solid fa-eye-slash"></i>
          )}
        </span>
      </div>
    </div>
  );
}

export default InputPassword;
