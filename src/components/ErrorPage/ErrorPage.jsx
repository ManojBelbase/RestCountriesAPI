import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center h-screen">
      {error.status} Sometnig Went Wrong!
    </div>
  );
};

export default ErrorPage;
