import React, { useState } from "react";
import { Button } from "../Button/button.jsx";
import "./search.style.scss";

export const Search = ({ title }) => {
  const [isTitleActive, setIsTitleActive] = useState(true);
  const heandler = () => {
    setIsTitleActive(!isTitleActive);
  };
  return (
    <div className="search">
      <p className="searchTitle">{title}</p>
      <input placeholder={"Enter your request here ..."}></input>
      <div className="searchOption">
        <p>SEARCH BY</p>
        <Button isActive={isTitleActive} onClick={heandler}>
          Title
        </Button>
        <Button>Genre</Button>
        <Button style={{ marginLeft: "345px" }}>SEARCH</Button>
      </div>
    </div>
  );
};
