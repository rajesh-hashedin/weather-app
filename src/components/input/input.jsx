import React, { Component } from "react";
import { BiSearch } from "react-icons/bi";
import { ImCross } from "react-icons/im";

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
    };
  }
  render() {
    const { placeholder, onSearch, inputFocus,fetchData } = this.props;
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          border: "1px solid gray",
          borderRadius: "2rem",
          paddingLeft: "1rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          value={this.state.city}
          onFocus={() => onSearch(true)}
          onChange={(e) => {
            this.setState({ city: e.target.value });
            fetchData(e.target.value)
          }}
          type="text"
          style={{
            width: "100%",
            outline: "none",
            border: "none",
            padding: "10px",
          }}
          placeholder={placeholder}
        />
        {inputFocus && (
          <ImCross
            onClick={() => {
              onSearch(false);
              this.setState({ city: "" });
            }}
            style={{ marginRight: "1rem" }}
          />
        )}

        <BiSearch
          onClick={(e) => {
            if (this.state.city.trim()) onSearch(true);
          }}
          style={{ borderLeft: "1px solid gray", padding: "10px" }}
        />
      </div>
    );
  }
}
