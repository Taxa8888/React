import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./App.jsx";
import "./index.scss";

ReactDOM.render(
  <>
    <Header />
  </>,
  document.getElementById("root")
);

const titleButton = document.querySelector(".main-button");

console.log(titleButton);

titleButton.addEventListener("click", () => {
  alert("Hello");
});
