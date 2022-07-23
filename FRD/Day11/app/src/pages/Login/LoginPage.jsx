import React from "react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./form/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../../store/user/userActionTypes";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.user);

  if (user) {
    navigate("/todo", { replace: true });
  }

  const handleSubmit = (values) => {
    dispatch({ type: types.SIGNIN_REQUEST, payload: values });
  };

  return (
    <div className={styles["form-container"]}>
      <div>
        <LoginForm handleSubmit={handleSubmit}></LoginForm>
        {error ? (
          <p className={styles["p-error"]}>{error.response.data}</p>
        ) : null}
        <p className={styles["p-register"]}>
          Don't have an account <Link to={"/register"}>Click here</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
