import React from "react";
import { Outlet, Navigate } from "react-router-dom";
//outlet is used to render chilld routes

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("token");

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    <Navigate to="/login" />;
    return null;
  }
};
export default ProtectedRoute;
