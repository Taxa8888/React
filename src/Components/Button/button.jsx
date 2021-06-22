import React from "react";
import "./button.style.scss";

export const Button = ({ children, onClick, isActive }) => {
  return (
    <button onClick={onClick} className={isActive ? "button active" : "button"}>
      {children}
    </button>
  );
};
