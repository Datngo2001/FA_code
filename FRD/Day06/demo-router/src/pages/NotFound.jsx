import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>
        Page Not Found - <Link to="/">Back to home</Link>
      </h1>
    </div>
  );
}

export default NotFound;
