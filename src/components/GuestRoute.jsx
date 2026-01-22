import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const GuestRoute = ({ children }) => {
  const { user, Loading } = useAuth();

  if (Loading) {
    return <LoadingPage />;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default GuestRoute;
