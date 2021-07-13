import React, { useState } from "react";
import { Header } from "../Header/header.jsx";
import { Sort } from "../Sort/sort.jsx";
import { Main } from "../Main/main.jsx";
import { Footer } from "../Footer/footer.jsx";
import "./App.scss";

export const App = ({ data }) => {
  const [State, setState] = useState(data);

  const searchMovies = (value) => {
    setState(value);
  };

  return (
    <>
      <Header title="netflixroulette" data={data} searchMovies={searchMovies} />
      <Sort data={State} />
      <Main data={State} />
      <Footer title="netflixroulette" />
    </>
  );
};
