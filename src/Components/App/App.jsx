import React, { useState } from "react";
import { Header } from "../Header/header.jsx";
import { Sort } from "../Sort/sort.jsx";
import { Main } from "../Main/main.jsx";
import { Footer } from "../Footer/footer.jsx";
import dataMovies from "../../data/mov.json";
import { SEARCH_BY } from "./app.constants";
import { checkStringMatch } from "./app.helpers";
import "./app.scss";

export const App = () => {
  const [movies, setMovies] = useState(dataMovies);
  const [searchBy, setSearchBy] = useState(SEARCH_BY.TITLE);

  const handleSearch = (value) => {
    setMovies(
      dataMovies.filter(({ title, genres }) =>
        searchBy === SEARCH_BY.TITLE
          ? checkStringMatch(title, value)
          : genres.some((genre) => checkStringMatch(genre, value))
      )
    );
  };

  return (
    <>
      <Header
        searchBy={searchBy}
        onSearch={handleSearch}
        onSearchByChange={setSearchBy}
      />
      <Sort data={movies} />
      <Main data={movies} />
      <Footer />
    </>
  );
};
