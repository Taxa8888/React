import React from "react";
import "./button.style.scss";

export const Button = ({ children, onClick, isActive, ...rest }) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={isActive ? "button active" : "button"}
    >
      {children}
    </button>
  );
};
