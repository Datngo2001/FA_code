import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function User({ user }) {
  return (
    <div style={{ padding: "40px" }}>
      <h2>User: {user.id}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default User;
