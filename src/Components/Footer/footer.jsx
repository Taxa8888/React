import React from "react";
import "./footer.style.scss";

export const Footer = ({ title }) => {
  return (
    <header className="footer">
      <div className="footerContainer">
        <p className="footerTitle">{title}</p>
      </div>
    </header>
  );
};
