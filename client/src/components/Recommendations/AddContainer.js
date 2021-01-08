import React from "react";
import { AddWrapper } from "../../styles/Recommendations";
import { Button, Form, InputBuilder } from "../../common/";
import useFrom from "../../hooks/UseForm";
import { useMutation } from "@apollo/client";
import { ADD_RECOMMENDATION, GET_RECOMMENDATIONS } from "../../graphql";

const AddContainer = ({ toggle }) => {
  const [formData, handleChange, reset, setFormData] = useFrom({
    title: "",
    category: "",
    description: "",
    main_picture: "",
  });
  const { title, category, description, main_picture } = formData;
  const [
    addRecommendation,
    { loading: mutationLoading, error: mutationError, data },
  ] = useMutation(ADD_RECOMMENDATION, {
    variables: {
      title,
      category,
      description,
      main_picture,
    },

    // Then re-run
    refetchQueries: [{ query: GET_RECOMMENDATIONS }],
    onError(err) {
      console.log(err);
    },
  });

  let openWidget = (event) => {
    event.preventDefault();
    window.cloudinary.openUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDINARYCLOUD,
        uploadPreset: process.env.REACT_APP_CLOUDINARYPRESET,
        sources: ["local", "url", "facebook", "dropbox"],
        cropping: true,
      },
      (error, result) => {
        if (error) {
          console.log(error);
          throw error;
        }
        if (result.event === "success") {
          setFormData({ ...formData, ["main_picture"]: result.info.public_id });
        }
      }
    );
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title || !category || !description || !main_picture) {
      return;
    }
    await addRecommendation();
    if (!mutationError) {
      reset();
    }
    toggle();
  };

  return (
    <AddWrapper>
      <div className='top-container'>
        <h3 className='close-btn' onClick={toggle}>
          <i class='fas fa-times-circle'></i>
        </h3>
        <h2>New Recommendation</h2>
      </div>

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

        <Button
          center
          marg={"0"}
          size={"70%"}
          backg={main_picture ? "rgba(146, 204, 194, 1)" : ""}
          onClick={openWidget}
        >
          {main_picture ? "Upload Complete" : "Upload Photo"}
        </Button>

        <Button
          center
          size={"70%"}
          backg={"rgba(221, 114, 145, 1)"}
          shadowC={"#333"}
          onClick={handleSubmit}
          disabled={mutationLoading}
        >
          {mutationLoading ? "loading..." : "Create"}
        </Button>
      </Form>
    </AddWrapper>
  );
};

export default AddContainer;
