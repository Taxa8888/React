import React from "react";
import "./button.style.scss";

export const Button = ({ className, active, ...rest }) => {
  return <button {...rest} className={`button ${active ? "active" : ""}`} />;
};
