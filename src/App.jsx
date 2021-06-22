import React from "react";
import { Header } from "./Components/Header/header.jsx";
import { Footer } from "./Components/Footer/footer.jsx";
import "./App.scss";

export class App extends React.PureComponent {
  render() {
    return (
      <>
        <Header title="netflixroulette" />
        <Footer title="netflixroulette" />
      </>
    );
  }
}
