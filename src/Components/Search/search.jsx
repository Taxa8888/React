import React, { useState } from "react";
import { Button } from "../Button/button.jsx";
import "./search.style.scss";

export const Search = ({ title }) => {
  const [isTitleActive, setIsTitleActive] = useState(true);
  const [isTitleDisable, setIsTitleDisable] = useState(true);

  console.log([isTitleDisable, setIsTitleDisable]);

  const heandler = () => {
    setIsTitleActive(!isTitleActive);
    setIsTitleDisable(!isTitleDisable);
  };
  return (
    <div className="search">
      <p className="searchTitle">{title}</p>
      <input placeholder={"Enter your request here ..."}></input>
      <div className="searchOption">
        <p>SEARCH BY</p>
        <Button
          active={isTitleActive}
          disabled={isTitleDisable}
          onClick={heandler}
        >
          Title
        </Button>
        <Button>Genre</Button>
        <Button style={{ marginLeft: "345px" }}>SEARCH</Button>
      </div>
    </div>
  );
};
