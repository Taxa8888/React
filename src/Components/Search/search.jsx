import React, { useState } from "react";
import { Button } from "../Button/button.jsx";
import "./search.style.scss";
import { SEARCH_BY } from "../App/app.constants";

export const Search = ({ title, onSearch, searchBy, onSearchByChange }) => {
  const [value, setValue] = useState("");

  const handleSearchByButtonClick = (searchByValue) => () => {
    onSearchByChange(searchByValue);
  };

  const handleInputChange = (event) => setValue(event.target.value);

  const handleSearchButtonClick = () => onSearch(value);

  return (
    <div className="search">
      <p className="searchTitle">{title}</p>
      <input
        value={value}
        onChange={handleInputChange}
        placeholder={"Enter your request here ..."}
      />
      <div className="searchOption">
        <p>SEARCH BY</p>
        <Button
          active={searchBy === SEARCH_BY.TITLE}
          onClick={handleSearchByButtonClick(SEARCH_BY.TITLE)}
        >
          Title
        </Button>
        <Button
          active={searchBy === SEARCH_BY.GENRE}
          onClick={handleSearchByButtonClick(SEARCH_BY.GENRE)}
        >
          Genre
        </Button>
        <Button
          style={{ marginLeft: "345px" }}
          onClick={handleSearchButtonClick}
        >
          SEARCH
        </Button>
      </div>
    </div>
  );
};
