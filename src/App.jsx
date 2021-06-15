import React from "react";
import { Button } from "./button/button.jsx";
import "./App.scss";

export class Header extends React.PureComponent {
  render() {
    return (
      <>
        <div className="wrapper">
          <header className="header">
            <div className="header-content">
              <p className="header-title">netflixroulette</p>
              <p className="header-subtitle">FIND YOUR MOVIE</p>
              <input className="header-search_input"></input>
              <div className="header-search">
                <p className="header-search_title">SEARCH BY</p>
                <Button name="TITLE" />
                <Button name="GENRE" />
                <Button name="SEARCH" />
              </div>
            </div>
          </header>
          <div className="information">
            <div className="information-content"></div>
          </div>
          <main className="main">
            <div className="main-content">
              <h1>No films found</h1>
            </div>
          </main>
          <footer className="footer">
            <div className="footer-content">
              <p className="header-title">netflixroulette</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}
