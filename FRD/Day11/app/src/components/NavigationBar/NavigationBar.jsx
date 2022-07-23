import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { signin, signout } from "../../store/user/userActions";
import { useNavigate } from "react-router";
import styles from "./navigationbar.module.css";

function NavigationBar() {
  const navigate = useNavigate();
  const { logined } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    navigate("./login", { replace: true });
  };
  return (
    <div className={styles["navigation-bar"]}>
      <div>Redux</div>
      <button onClick={handleLogin}>{logined ? "Logout" : "Login"}</button>
    </div>
  );
}

export default NavigationBar;
