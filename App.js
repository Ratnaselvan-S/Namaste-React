import React from "react";
import ReactDOM from "react-dom/client";

const varia = 100;

const Heading = () => {
  return <h1 className="heading">This is the heading</h1>;
};

const HadingComponent = () => {
  return (
    <div>
      <Heading />
      {varia}
      <h3 className="not_a_heading">
        This is just another heading ❤️❤️❤️❤️❤️🚀🚀🚀
      </h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HadingComponent />);
