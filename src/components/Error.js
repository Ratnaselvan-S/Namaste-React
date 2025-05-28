import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h3>Unexpected error</h3>
      <h4>{err.status}</h4>
    </div>
  );
};

export default Error;
