import React, { useEffect, useState } from "react";
import { InputContainer,Input } from "./Form";

export const InputBuilder = ({
  title,
  type,
  placeholder,
  name,
  value,
  setFormData,
  marg,
  red
}) => {
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    if (value) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }, [value]);
  return (
    <InputContainer>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={(e) => setFormData(e)}
        marg={marg}
        red={red}
      />
      {empty ? (
        <span className='empty'>{placeholder}</span>
      ) : (
        <span className='full'>{placeholder}</span>
      )}
      {/* <span>{placeholder}</span> */}
    </InputContainer>
  );
};
