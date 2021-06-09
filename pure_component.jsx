import React from "react";

export class HeaderPureComponent extends React.PureComponent {
  render() {
    return (
      <h4
        style={{ padding: "10px 20px", textAlign: "center", color: "yellow" }}
      >
        <span>Hello World, {this.props.name}</span>
        <span>(React.PureComponent)</span>
      </h4>
    );
  }
}
