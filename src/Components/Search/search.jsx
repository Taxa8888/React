import React, { useState } from "react";
import { Button } from "../Button/button.jsx";
import "./search.style.scss";

export const Search = ({ title }) => {
  const [isTitleActive, setIsTitleActive] = useState(true);
  const [isTitleDisable, setIsTitleDisable] = useState(true);
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState(null);

  const heandler = () => {
    setIsTitleActive(!isTitleActive);
    setIsTitleDisable(!isTitleDisable);
  };

  const getInput = (findMovie) => {
    setInput(findMovie.target.value);
    setSearch(false);
  };

  const searchMovies = () => {
    console.log(input);
    console.log(search);
    setSearch(true);
  };
  return (
    <div className="search">
      <p className="searchTitle">{title}</p>
      <input
        type="text"
        onChange={getInput}
        placeholder={"Enter your request here ..."}
      />
      <div className="searchOption">
        <p>SEARCH BY</p>
        <Button
          active={isTitleActive}
          disabled={isTitleDisable}
          onClick={heandler}
        >
          Title
        </Button>
        <Button
          active={!isTitleActive}
          disabled={!isTitleDisable}
          onClick={heandler}
        >
          Genre
        </Button>
        <Button style={{ marginLeft: "345px" }} onClick={searchMovies}>
          SEARCH
        </Button>
      </div>
    </div>
  );
};
