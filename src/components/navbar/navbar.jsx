import React, { Component } from "react";
export default class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#B2EBF2",
          position: "sticky",
          top: 0,
          left: 0,
        }}
      >
        <div style={{ padding: "1rem" }}>Weather Forecaster</div>
      </div>
    );
  }
}
