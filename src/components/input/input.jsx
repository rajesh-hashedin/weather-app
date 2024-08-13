import React, { Component } from "react";
import { ImCross } from "react-icons/im";

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }
  render() {
    const {
      handleInputValue = function () {},
      inputFocus = false,
      setInputFocus = function () {},
    } = this.props;
    return (
      <div
        style={{
          display: "flex",
          border: "1px solid gray",
          borderRadius: "2rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          placeholder="Search city"
          onChange={(e) => {
            this.setState({ ...this.state, value: e.target.value });
            handleInputValue(e.target.value);
          }}
          onFocus={() => setInputFocus(true)}
          style={{
            width: "100%",
            outline: "none",
            border: "none",
            padding: "10px",
          }}
          value={this.state.value}
        />
        {inputFocus && (
          <ImCross
            onClick={() => {
              setInputFocus(false);
              this.setState({ ...this.state, value: "" });
            }}
            size={15}
          />
        )}
      </div>
    );
  }
}
