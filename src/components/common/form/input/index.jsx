import React from "react";

const Input = (props) => {
  const { id, value, type, placeholder, label, errorMsg, handleChange } = props;
  return (
    <div>
      {" "}
      <h4> {label}</h4>
      <input
        id={id}
        type={type}
        value={value}
        className={"fieldClass"}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <p className={"errorClass"}>{errorMsg}</p>
    </div>
  );
};

export default Input;
