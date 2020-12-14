import React from "react";
import "./Inputs.css";

function isInvalid(props) {
  return !props.valid && props.touched && props.shouldValidate;
}

const Input = (props) => {
  const inputType = props.type || "text";
  const cls = ["input-group"];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push("invalid");
  }

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />

      {isInvalid(props) ? (
        <span>{props.errorMessage || "Enter valid value"}</span>
      ) : null}
    </div>
  );
};

export default Input;
