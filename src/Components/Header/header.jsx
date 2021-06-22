import React from "react";
import { Search } from "../Search/search.jsx";
import "./header.style.scss";

export const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="headerContainer">
        <p className="headerTitle">{title}</p>
        <Search title="FIND YOUR MOVIE" />
      </div>
    </header>
  );
};
