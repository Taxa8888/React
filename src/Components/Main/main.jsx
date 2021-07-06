import React, { useState } from "react";
import { MovieCard } from "../MovieCard/movieCard.jsx";
import "./main.style.scss";
import data from "./../../data/mov.json";

export const Main = () => {
  const [countOfMovie, setCountOfMovie] = useState(0);

  return (
    <main className="main">
      <div className="mainContainer">
        {data.map((movie) => (
          <MovieCard
            key={movie.id}
            img={movie.poster_path}
            title={movie.title}
            year={movie.release_date.slice(0, 4)}
            time={`${movie.runtime} min`}
            genre={`${movie.genres[0]} & ${movie.genres[1]}`}
          />
        ))}
      </div>
    </main>
  );
};
