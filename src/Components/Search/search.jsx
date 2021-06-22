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
      <input></input>
      <Button isActive={isTitleActive} onClick={heandler}>
        title
      </Button>
      <Button name="GENRE" />
      <Button name="SEARCH" />
    </div>
  );
};
