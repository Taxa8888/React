import React from "react";
import "./footer.style.scss";

export const Footer = ({ title }) => {
  return (
    <header className="footer">
      <div className="footer-container">
        <p className="footer-title">{title}</p>
      </div>
    </header>
  );
};
