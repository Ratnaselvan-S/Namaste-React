import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child", key: "1" },
    React.createElement("h1", {}, "this is heading")
  ),
  React.createElement(
    "div",
    { id: "child 2", key: "2" },
    React.createElement("h1", {}, "this is another heading")
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
