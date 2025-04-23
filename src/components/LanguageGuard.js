import React from "react";
import { useParams, Navigate, Outlet } from "react-router-dom";

const allowedLangs = ["en", "nl"];

const LanguageGuard = () => {
  const { lang } = useParams();

  if (!allowedLangs.includes(lang)) {
    return <Navigate to="/en/404" replace />;
  }

  return <Outlet />;
};

export default LanguageGuard;
