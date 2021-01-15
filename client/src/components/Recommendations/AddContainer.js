import React from "react";
import useToggle from "../../hooks/useToggle";
import useFrom from "../../hooks/UseForm";
import { useMutation } from "@apollo/client";
import {
  ADD_RECOMMENDATION,
  GET_RECOMMENDATIONS,
  ADD_ITEMS,
} from "../../graphql";
import AddRecommendation from "./AddRecommendation";
import AddItems from "./AddItems";

const AddContainer = ({ toggle }) => {
  const [formData, handleChange, reset, setFormData] = useFrom({
    title: "",
    category: "",
    description: "",
    main_picture: "",
  });

  const [itemData, handleItemChange, resetItem, setItemData] = useFrom({
    itemsTitle: "",
    itemsDescription: "",
    itemsCoverPicture: "",
    recommendationId: "",
  });

  const [
    addingRecommendations,
    setAddingRecommendations,
    toggleItems,
  ] = useToggle(true);

  const { title, category, description, main_picture } = formData;

  const {
    itemsTitle,
    itemsDescription,
    itemsCoverPicture,
    recommendationId,
  } = itemData;

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

    onError(err) {
      console.log(err);
    },
  });

  const [
    addItems,
    { loading: itemsMutaionLoadin, error: itemsMutationError, itemsData },
  ] = useMutation(ADD_ITEMS, {
    variables: {
      title: itemsTitle,
      description: itemsDescription,
      cover_picture: itemsCoverPicture,
      recommendation_id: recommendationId,
    },
    refetchQueries: [{ query: GET_RECOMMENDATIONS }],
    onError(err) {
      console.log(err);
    },
  });

  let openWidget = (event, fn, data = "rec") => {
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
          const arr = data === "items" ? itemData : formData;
          fn({ ...arr, [event.target.name]: result.info.public_id });
        }
      }
    );
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title || !category || !description || !main_picture) {
      return;
    }
    if (!itemsTitle || !itemsDescription || !itemsCoverPicture) {
      return;
    }
    const res = await addRecommendation();
    const recommendationId = res.data.addRecommendations.recommendation.id;
    setItemData({ ...itemData, recommendationId });
    if (!recommendationId) {
      return alert("Id not provided");
    }
    await addItems();

    if (!mutationError & !itemsMutationError) {
      reset();
    }
    toggle();
  };

  return addingRecommendations ? (
    <AddRecommendation
      title={title}
      description={description}
      category={category}
      main_picture={main_picture}
      handleChange={handleChange}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
      openWidget={openWidget}
      toggle={toggle}
      toggleItems={toggleItems}
      mutationLoading={mutationLoading}
    />
  ) : (
    <AddItems
      title={itemsTitle}
      description={itemsDescription}
      main_picture={itemsCoverPicture}
      handleChange={handleItemChange}
      setFormData={setItemData}
      handleSubmit={handleSubmit}
      openWidget={openWidget}
      toggle={toggleItems}
      mutationLoading={itemsMutaionLoadin}
    />
  );
};

export default AddContainer;
