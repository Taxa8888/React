import React from "react";
import "./movieCard.style.scss";

export const MovieCard = ({ id, img, title, year, time, genre }) => {
  return (
    <div className="movie">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="movieImg"
      ></div>
      <div className="movieTextContent">
        <h1>{title}</h1>
        <ul className="movieGen">
          <li>Release: {year}</li>
          <li>Duration: {time}</li>
          <li>Genre: {genre}</li>
        </ul>
      </div>
    </div>
  );
};
