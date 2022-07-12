import React from "react";
import { useState } from "react";
import InputPassword from "../InputPassword/InputPassword";
import styles from "./signupform.module.css";

function SignupForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    console.log(input);
  };

  const validateForm = () => {
    const errors = {};

    if (!input.email) {
      errors.email = "Email is required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)
    ) {
      errors.email = "Incorrect format";
    }

    if (!input.password) {
      errors.password = "Password is required";
    }

    setError(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        {error.email ? <div className={styles.error}>{error.email}</div> : null}
      </div>
      <div className={styles.formGroup}>
        <InputPassword
          label="Password: "
          name="password"
          value={input.password}
          handleChange={handleChange}
        />
        {error.password ? (
          <div className={styles.error}>{error.password}</div>
        ) : null}
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
}

export default SignupForm;
