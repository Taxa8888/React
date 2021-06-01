import React from "react";
import ReactDOM from "react-dom";
import HeaderFunctional from "./functional_components.jsx";
import Header from "./component.jsx";
import HeaderPureComponent from "./pure_component.jsx";

const myHeader = React.createElement(
  "h1",
  { style: { padding: "10px 20px", textAlign: "center", color: "green" } },
  "Hello World! (React.createElement)"
);

ReactDOM.render(myHeader, document.getElementById("root"));

ReactDOM.render(HeaderFunctional(), document.getElementById("root2"));

ReactDOM.render(<Header />, document.getElementById("root3"));

ReactDOM.render(<HeaderPureComponent />, document.getElementById("root4"));
