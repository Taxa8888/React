import React from "react";
import ReactDOM from "react-dom";
import { HeaderFunctional } from "./functional_components.jsx";
import { Header } from "./component.jsx";
import { HeaderPureComponent } from "./pure_component.jsx";

const MyHeader = React.createElement(
  "h1",
  { style: { padding: "10px 20px", textAlign: "center", color: "green" } },
  "Hello World! (React.createElement)"
);

ReactDOM.render(
  <>
    {MyHeader}
    <HeaderFunctional name="Таня" prof="IT" />
    <Header />
    <HeaderPureComponent name="Наташа" />
  </>,
  document.getElementById("root")
);
