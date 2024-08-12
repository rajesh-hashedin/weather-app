import React, { Component } from "react";

export default class Chip extends Component {
  render() {
    const { name } = this.props;
    return (
      <div
        style={{
          borderRadius: "10px",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          border: "1px solid gray",
        }}
      >
        {name}
      </div>
    );
  }
}
