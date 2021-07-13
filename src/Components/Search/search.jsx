import React, { useState } from "react";
import { Button } from "../Button/button.jsx";
import "./search.style.scss";

export const Search = ({ title, data, searchMovies }) => {
  const [isTitleActive, setIsTitleActive] = useState(true);
  const [isTitleDisable, setIsTitleDisable] = useState(true);
  const [search, setSearch] = useState(null);
  const [input, setInput] = useState(null);

  const heandler = () => {
    setIsTitleActive(!isTitleActive);
    setIsTitleDisable(!isTitleDisable);
  };

  const getInput = (findMovie) => {
    setInput(findMovie.target.value);
    if (isTitleActive) {
      setSearch(
        data.filter((film) =>
          film.title
            .toLowerCase()
            .includes(findMovie.target.value.toLowerCase())
        )
      );
    } else {
      setSearch(
        data.filter((film) =>
          film.genres[0]
            .toLowerCase()
            .includes(findMovie.target.value.toLowerCase())
        )
      );
    }
  };

  const buttonAlert = () => {
    alert("Введите параметры поиска!");
    setInput(null);
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
        <Button
          style={{ marginLeft: "345px" }}
          onClick={() => {
            if (input === null) {
              buttonAlert();
            } else {
              searchMovies(search);
            }
          }}
        >
          SEARCH
        </Button>
      </div>
    </div>
  );
};
