import React from "react";
import { InputContainer } from "./Form";

export const InputBuilder = ({ title, type, placeholder, name, value }) => {
  return (
    <InputContainer>
      <label>{title}</label>
      <input type={type} placeholder={placeholder} name={name} value={value} />
    </InputContainer>
  );
};
