import React from "react";
import "./button.style.scss";

export class Button extends React.PureComponent {
  render() {
    return <button className="main-button">{this.props.name}</button>;
  }
}
