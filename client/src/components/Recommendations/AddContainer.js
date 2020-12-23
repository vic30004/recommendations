import React from "react";
import { AddWrapper } from "../../styles/Recommendations";
import { Button, InputBuilder } from "../../common/";
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
      <form>
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
        />
        <InputBuilder
          type='text'
          name='description'
          placeholder='Description'
          value={description}
          setFormData={handleChange}
        />
        <InputBuilder
          type='text'
          name='main_picture'
          placeholder='Picture'
          value={main_picture}
          setFormData={handleChange}
        />

        <Button center>Create</Button>
      </form>
    </AddWrapper>
  );
};

export default AddContainer;
