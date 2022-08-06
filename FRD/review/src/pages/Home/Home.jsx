import React from "react";
import AdbOutlinedIcon from "@mui/icons-material/AdbOutlined";
import styles from "./home.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { SIGNIN_REQUEST } from "../../store/user/userActionType";

function Home() {
  const { user } = useSelector((state) => state.user);
  const disPatch = useDispatch();

  const handleLogin = (data) => {
    console.log(data);
    disPatch({ type: SIGNIN_REQUEST, payload: { id: 1 } });
  };

  return (
    <div className={styles["container"]}>
      {user ? <h1>{`Hello ${user.username}`}</h1> : <h1>Hello world </h1>}
      <AdbOutlinedIcon sx={{ fontSize: "3rem", color: "#33ff33" }} />
      <div className={styles["form-container"]}>
        {!user && <LoginForm handleSubmit={handleLogin}></LoginForm>}
      </div>
    </div>
  );
}

export default Home;
