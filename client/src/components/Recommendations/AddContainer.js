import React from "react";
import { AddWrapper } from "../../styles/Recommendations";
import { Button, Form, InputBuilder } from "../../common/";
import useFrom from "../../hooks/UseForm";

const AddContainer = () => {
  const [formData, handleChange, reset] = useFrom({
    title: "",
    category: "",
    description: "",
    main_picture: "",
  });
  const { title, category, description, main_picture } = formData;
  return (
    <AddWrapper>
      <h2>New Recommendation</h2>
      <Form>
        <InputBuilder
          type='text'
          name='title'
          placeholder='Title'
          value={title}
          setFormData={handleChange}
        />
        <InputBuilder
          type='text'
          name='category'
          placeholder='Category'
          value={category}
          setFormData={handleChange}
          textArea={false}
        />
        <InputBuilder
          name='description'
          id='description'
          placeholder='Description'
          value={description}
          textArea={true}
          setFormData={handleChange}
        ></InputBuilder>

        <InputBuilder
          type='text'
          name='main_picture'
          placeholder='Picture'
          value={main_picture}
          setFormData={handleChange}
        />

        <Button
          center
          size={"70%"}
          backg={"rgba(221, 114, 145, 1)"}
          shadowC={"#333"}
        >
          Create
        </Button>
      </Form>
    </AddWrapper>
  );
};

export default AddContainer;
