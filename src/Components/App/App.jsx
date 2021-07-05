import React from "react";
import { Header } from "../Header/header.jsx";
import { Sort } from "../Sort/sort.jsx";
import { Main } from "../Main/main.jsx";
import { Footer } from "../Footer/footer.jsx";
import "./App.scss";

export class App extends React.PureComponent {
  render() {
    return (
      <>
        <Header title="netflixroulette" />
        <Sort />
        <Main />
        <Footer title="netflixroulette" />
      </>
    );
  }
}
