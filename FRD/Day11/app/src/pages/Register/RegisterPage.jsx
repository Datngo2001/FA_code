import React from "react";
import RegisterForm from "./form/RegisterForm";
import styles from "./register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../../store/user/userActionTypes";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  if (!error) {
    navigate("/login", { replace: true });
  }

  const handleSubmit = (values) => {
    dispatch({ type: types.REGISTER_REQUEST, payload: values });
  };

  return (
    <div className={styles["container"]}>
      <div>
        <RegisterForm handleSubmit={handleSubmit}></RegisterForm>
        {error ? (
          <p className={styles["p-error"]}>{error.response.data}</p>
        ) : null}
        <p className={styles["p-login"]}>
          Already have an account <Link to={"/login"}>Click here</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
