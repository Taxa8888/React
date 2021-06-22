import React from "react";
import "./movieCard.style.scss";

export const MovieCard = ({ id, title, img }) => {
  return (
    <div className="movieCardContainer">
      {title}
      <img src={img}></img>
    </div>
  );
};
