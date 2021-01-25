import React, { Fragment } from "react";
import { AddWrapper } from "../../styles/Recommendations";
import { Button, Form, InputBuilder } from "../../common/";
const AddItems = ({
  toggle,
  title,
  handleChange,
  description,
  main_picture,
  handleSubmit,
  openWidget,
  mutationLoading,
  setFormData,
  itemData,
}) => {
  console.log({ description });
  return (
    <AddWrapper>
      <div className='top-container'>
        <h3 className='close-btn' onClick={toggle}>
          <i class='fas fa-times-circle'></i>
        </h3>
        <h2>Add Some Content</h2>
      </div>

      <Form>
        <InputBuilder
          type='text'
          name='itemsTitle'
          placeholder='Title'
          value={title}
          setFormData={handleChange}
        />
        <InputBuilder
          name='itemsDescription'
          id='itemsDescription'
          placeholder='Description'
          value={description}
          textArea={true}
          setFormData={handleChange}
        ></InputBuilder>

        <Button
          center
          marg={"0"}
          name={"itemsCoverPicture"}
          size={"70%"}
          backg={main_picture ? "rgba(146, 204, 194, 1)" : ""}
          onClick={(e) => openWidget(e, setFormData, "items", itemData)}
        >
          {main_picture ? "Upload Complete" : "Upload Photo"}
        </Button>

        <Button
          center
          size={"70%"}
          backg={"rgba(221, 114, 145, 1)"}
          shadowC={"#333"}
          onClick={handleSubmit}
        >
          {mutationLoading ? "loading..." : "Create"}
        </Button>
      </Form>
    </AddWrapper>
  );
};

export default AddItems;
