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
        className="shadow border card"
        style={{
          display: "flex",
          borderRadius: "2rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          placeholder="Search Location"
          onChange={(e) => {
            this.setState({ value: e.target.value });
            handleInputValue(e.target.value);
          }}
          onFocus={() => setInputFocus(true)}
          style={{
            width: "100%",
            outline: "none",
            border: "none",
            padding: "10px",

            fontSize: 15,
          }}
          value={this.state.value}
        />
        {inputFocus && (
          <ImCross
            onClick={() => {
              setInputFocus(false);
              this.setState({ value: "" });
            }}
            size={15}
          />
        )}
      </div>
    );
  }
}
