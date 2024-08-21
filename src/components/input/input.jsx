import React, { Component } from "react";
import { ImCross } from "react-icons/im";
import "./input.scss";
export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
    this.handleInputOnChange = this.handleInputOnChange.bind(this);
    this.handleCrossButton = this.handleCrossButton.bind(this);
  }
  handleInputOnChange(e) {
    this.setState({ value: e.target.value });
    this.props.handleInputValue(e.target.value);
  }
  handleCrossButton() {
    this.props.setInputFocus(false);
    this.setState({ value: "" });
  }
  render() {
    const { inputFocus = false, setInputFocus = function () {} } = this.props;
    return (
      <div className="shadow border card input_container">
        <input
          placeholder="Search Location"
          onChange={this.handleInputOnChange}
          onFocus={function () {
            setInputFocus(true);
          }}
          value={this.state.value}
        />
        {inputFocus && <ImCross onClick={this.handleCrossButton} size={15} />}
      </div>
    );
  }
}
