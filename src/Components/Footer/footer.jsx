import React from "react";
import "./footer.style.scss";
import { MAIN_PROJECT_TITLE } from "./../App/app.constants";

export const Footer = () => {
  return (
    <header className="footer">
      <div className="footerContainer">
        <p className="footerTitle">{MAIN_PROJECT_TITLE}</p>
      </div>
    </header>
  );
};
