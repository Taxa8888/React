import React from "react";
import { Search } from "../Search/search.jsx";
import "./header.style.scss";

export const Header = ({ title, data, searchMovies }) => {
  return (
    <header className="header">
      <div className="headerContainer">
        <p className="headerTitle">{title}</p>
        <Search
          title="FIND YOUR MOVIE"
          data={data}
          searchMovies={searchMovies}
        />
      </div>
    </header>
  );
};
