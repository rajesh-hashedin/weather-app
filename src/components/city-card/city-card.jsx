import React, { Component } from "react";
import { BiArrowToRight } from "react-icons/bi";

export default class CityCard extends Component {
  render() {
    const { name, temp, status, description } = this.props.city;
    return (
      <div
        style={{
          flexBasis: "13rem",
          border: "1px solid gray",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          borderRadius: "1rem",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>{name}</div>
          <div>
            <BiArrowToRight />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>{temp}</div>
          <div></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>{status}</div>
          <div>{description}</div>
        </div>
      </div>
    );
  }
}
