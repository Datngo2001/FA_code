import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ condition, redirectPath, children }) {
  if (!condition) {
    return <Navigate to={redirectPath} replace></Navigate>;
  }
  return children;
}

export default ProtectedRoute;
