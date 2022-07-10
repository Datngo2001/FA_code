import React from "react";

function Login({ isLogin, handleLogin }) {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>
        Click to {isLogin ? "logout" : "login"}
      </button>
    </div>
  );
}

export default Login;
