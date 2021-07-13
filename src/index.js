import React from "react";
import ReactDOM from "react-dom";
import { App } from "./Components/App/App.jsx";
import data from "./data/mov.json";
import "./index.scss";

ReactDOM.render(
  <>
    <App data={data} />
  </>,
  document.getElementById("root")
);
