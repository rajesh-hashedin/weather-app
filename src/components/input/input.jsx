import React, { Component } from "react";
import { ImCross } from "react-icons/im";
import "./input.scss";
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
      <div className="shadow border card input_container">
        <input
          placeholder="Search Location"
          onChange={(e) => {
            this.setState({ value: e.target.value });
            handleInputValue(e.target.value);
          }}
          onFocus={() => setInputFocus(true)}
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
