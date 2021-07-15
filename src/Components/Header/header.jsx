import React from "react";
import { Search } from "../Search/search.jsx";
import "./header.style.scss";
import { MAIN_PROJECT_TITLE } from "./../App/app.constants";

export const Header = ({
  searchMovies,
  searchBy,
  onSearch,
  onSearchByChange,
}) => {
  return (
    <header className="header">
      <div className="headerContainer">
        <p className="headerTitle">{MAIN_PROJECT_TITLE}</p>
        <Search
          searchBy={searchBy}
          title="FIND YOUR MOVIE"
          searchMovies={searchMovies}
          onSearch={onSearch}
          onSearchByChange={onSearchByChange}
        />
      </div>
    </header>
  );
};
