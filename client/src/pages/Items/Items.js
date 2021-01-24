import React, { useState } from "react";
import Content from "../../components/Items/Content";
import Header from "../../components/Items/Header";
import useToggle from "../../hooks/useToggle";
import useForm from "../../hooks/UseForm";
import { ItemsContainer } from "../../styles/Items";
import { useQuery, useMutation } from "@apollo/client";
import {
  ADD_ITEMS,
  GET_RECOMMENDATION_BY_ID,
  GET_ITEMS,
  DELETE_ITEMS,
} from "../../graphql";
import Modal from "../../common/Modal.js";
import AddItems from "../../components/Recommendations/AddItems";
import ModalTrigger from "../../common/ModalTrigger";
import { openWidget } from "../../utils/CloudinaryWidget";
const Items = (props) => {
  const [id, setId] = useState(props.match.params.recommendationId || "");
  const [recommendation_id, setRecommendation_id] = useState(
    parseInt(props.match.params.recommendationId) || 0
  );
  const [modal, setModal, toggle] = useToggle();
  const [formData, handleChange, reset, setFormData] = useForm({
    itemsTitle: "",
    itemsDescription: "",
    itemsCoverPicture: "",
  });
  const { itemsTitle, itemsDescription, itemsCoverPicture } = formData;

  const {
    data: contentData,
    loading: contentLoading,
    error: contentError,
  } = useQuery(GET_ITEMS, {
    variables: { recommendation_id },
  });

  const { data, loading, error } = useQuery(GET_RECOMMENDATION_BY_ID, {
    variables: { id },
  });
  if (error) {
    if (error.message === "Recommendation Not Found") {
      props.history.push("/recommendations");
    } else {
      console.log(error);
    }
  }

  const [
    deleteItem,
    { loading: deleteLoading, error: deleteError },
  ] = useMutation(DELETE_ITEMS, {
    refetchQueries: [{ query: GET_ITEMS, variables: { recommendation_id } }],

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
      recommendation_id: id,
    },
    refetchQueries: [{ query: GET_ITEMS, variables: { recommendation_id } }],
    onError(err) {
      console.log(err);
    },
  });

  if (loading) return "loding...";

  if (contentLoading) return "Loading content";
  console.log({ contentData });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!itemsTitle || !itemsDescription || !itemsCoverPicture) {
      return;
    }
    await addItems(!itemsMutationError);

    if (!itemsMutationError) {
      reset();
      toggle();
    }
  };
  return (
    <ItemsContainer>
      <Header data={data} />
      {!contentLoading ? (
        <Content
          deleteItem={deleteItem}
          data={contentData}
          loading={contentLoading}
          error={contentError}
        />
      ) : (
        ""
      )}

      <ModalTrigger toggle={toggle} />
      {modal ? (
        <Modal>
          <AddItems
            title={itemsTitle}
            description={itemsDescription}
            main_picture={itemsCoverPicture}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setFormData={setFormData}
            openWidget={openWidget}
            itemData={formData}
            toggle={toggle}
            mutationLoading={itemsMutaionLoadin}
          />
        </Modal>
      ) : (
        ""
      )}
    </ItemsContainer>
  );
};

export default Items;
