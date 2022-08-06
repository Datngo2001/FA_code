import React from "react";
import { useState } from "react";
import styles from "./loginForm.module.css";
import { TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";

function LoginForm({ handleSubmit }) {
  const { loading } = useSelector((state) => state.user);

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    username: null,
    password: null,
  });

  const handleInputChange = (e) => {
    setInput((val) => ({ ...val, [e.target.name]: e.target.value }));
  };

  const validate = (key, val) => {
    let isValid = false;
    switch (key) {
      case "username":
      case "password":
        if (val === "") {
          setErrorMessage(key, "Reqired");
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
      let result = validate(key, val);
      if (result === false) {
        isValid = result;
      }
    }

    if (!isValid) {
      return;
    }
    handleSubmit(input);
  };

  return (
    <div>
      <h1>Login</h1>
      <form className={styles["form"]} onSubmit={onSubmit}>
        <TextField
          name="username"
          value={input.username}
          onChange={handleInputChange}
          error={error.username}
          label="Username"
          variant="outlined"
          helperText={error.username}
        ></TextField>
        <TextField
          name="password"
          value={input.password}
          onChange={handleInputChange}
          error={error.password}
          label="Password"
          variant="outlined"
          helperText={error.password}
          type="password"
        ></TextField>
        {!loading && (
          <Button type="submit" variant="contained">
            Login
          </Button>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
