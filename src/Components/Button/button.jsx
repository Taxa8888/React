import React from "react";
import "./button.style.scss";

export const Button = ({
  children,
  onClick,
  className,
  disabled,
  active,
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={active ? "button active" : "button"}
      disabled={disabled ? true : false}
    >
      {children}
    </button>
  );
};
