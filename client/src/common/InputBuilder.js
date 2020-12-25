import React, { useEffect, useState } from "react";
import { InputContainer, Input, TextArea } from "./Form";

export const InputBuilder = ({
  title,
  type,
  placeholder,
  name,
  value,
  setFormData,
  marg,
  red,
  textArea,
}) => {
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    if (value) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }, [value]);
  const genInputType = (type) => {
    console.log(type);
    if (!type) {
      return (
        <Input
          type={type}
          name={name}
          value={value}
          onChange={(e) => setFormData(e)}
          marg={marg}
          red={red}
        />
      );
    }
    return (
      <TextArea
        type={type}
        name={name}
        value={value}
        onChange={(e) => setFormData(e)}
        marg={marg}
        rows='5'
        red={red}
        Area
      />
    );
  };

  return (
    <InputContainer Area={textArea}>
      {genInputType(textArea)}
      {empty ? (
        <span className='empty'>{placeholder}</span>
      ) : (
        <span className='full'>{placeholder}</span>
      )}
      {/* <span>{placeholder}</span> */}
    </InputContainer>
  );
};
