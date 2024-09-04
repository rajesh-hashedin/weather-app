import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./input.scss";
import { useForm } from "react-hook-form";
const Input = ({
  inputFocus = false,
  setInputFocus = () => {},
  handleInputValue = () => {},
}) => {
  const { register, formState, resetField, watch } = useForm({
    mode: "onChange",
  });
  return (
    <div>
      <div className="shadow border card input_container">
        <input
          type="text"
          placeholder="Search Location"
          onFocus={() => setInputFocus(true)}
          {...register("city", {
            required: true,
            minLength: 3,
          })}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" &&
              !Object.keys(formState.errors).length
            ) {
              handleInputValue(watch("city"));
            }
          }}
        />
        {inputFocus && (
          <CloseIcon
            onClick={() => {
              setInputFocus(false);
              resetField("city");
            }}
            className="icon"
          />
        )}
      </div>
      <span
        className={`input_error ${
          formState.errors?.city?.type && "show_input"
        }`}
      >
        {formState.errors?.city?.type === "minLength" &&
          "Enter atleast 3 character"}
        {formState.errors?.city?.type === "required" && "City name is required"}
      </span>
    </div>
  );
};

export default Input;
