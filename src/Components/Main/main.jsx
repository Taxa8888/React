import React from "react";
import { MovieCard } from "../MovieCard/movieCard.jsx";
import data from "../../data/movies.json";
import "./main.style.scss";

export const Main = () => {
  return (
    <main className="main">
      <div className="mainContainer">
        {data.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            img={movie.poster_path}
          />
        ))}
      </div>
    </main>
  );
};
