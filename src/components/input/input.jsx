import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./input.scss";
const Input = ({
  inputFocus = false,
  setInputFocus = () => {},
  handleInputValue = () => {},
}) => {
  const [value, setValue] = useState("");

  return (
    <div className="shadow border card input_container">
      <input
        placeholder="Search Location"
        onChange={(e) => {
          setValue(e.target.value);
          handleInputValue(e.target.value);
        }}
        onFocus={() => setInputFocus(true)}
        value={value}
      />
      {inputFocus && (
        <CloseIcon onClick={() => setInputFocus(false)} className="icon" />
      )}
    </div>
  );
};

export default Input;
