import React from "react";
import { useState } from "react";
import styles from "./registerForm.module.css";

function RegisterForm({ handleSubmit }) {
  const names = {
    email: "email",
    password: "password",
    repeat: "repeat",
  };
  const [input, setInput] = useState({
    email: "",
    password: "",
    repeat: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    repeat: false,
  });
  const [error, setError] = useState({
    email: null,
    password: null,
    repeat: null,
  });

  const handleInputChange = (e) => {
    setInput((val) => ({ ...val, [e.target.name]: e.target.value }));
    validate(e.target.name, e.target.value);
  };

  const handleInputFocus = (e) => {
    if (touched[e.target.name]) {
      return;
    }
    setTouched((val) => ({ ...val, [e.target.name]: true }));
  };

  const validate = (key, val) => {
    let isValid = false;
    switch (key) {
      case names.email:
        if (val === "") {
          setErrorMessage(key, "Reqired");
        } else {
          setErrorMessage(key, null);
          isValid = true;
        }
        break;
      case names.password:
        if (val === "") {
          setErrorMessage(key, "Reqired");
        } else if (val !== input.repeat) {
          setErrorMessage(names.repeat, "Password not match");
        } else {
          setErrorMessage(key, null);
          isValid = true;
        }
        break;
      case names.repeat:
        if (val === "") {
          setErrorMessage(key, "Reqired");
        } else if (val !== input.password) {
          setErrorMessage(key, "Password not match");
        } else {
          setErrorMessage(key, null);
          isValid = true;
        }
        break;
      default:
        break;
    }
    return isValid;
  };

  const setErrorMessage = (key, message) => {
    setError((val) => ({ ...val, [key]: message }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const entries = Object.entries(input);
    let isValid = true;
    for (const [key, val] of entries) {
      isValid = validate(key, val);
      if (!isValid) {
        break;
      }
    }

    if (!isValid) {
      return;
    }
    handleSubmit(input);
  };

  return (
    <div>
      <form className={styles["form"]} onSubmit={onSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor={names.email}>Email: </label>
          <div>
            <input
              type="email"
              name={names.email}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            {error.email && touched.email ? (
              <div className={styles["error"]}>{error.email}</div>
            ) : null}
          </div>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor={names.password}>Password: </label>
          <div>
            <input
              type="password"
              name={names.password}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            {error.password && touched.password ? (
              <div className={styles["error"]}>{error.password}</div>
            ) : null}
          </div>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor={names.repeat}>Confirm: </label>
          <div>
            <input
              name={names.repeat}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              type="password"
            />
            {error.repeat && touched.repeat ? (
              <div className={styles["error"]}>{error.repeat}</div>
            ) : null}
          </div>
        </div>
        <div className={styles["form-group"] + " " + styles["form-submit"]}>
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
