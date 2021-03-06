import React, { useState, useContext, useEffect } from "react";
import Content from "../../components/Items/Content";
import Header from "../../components/Items/Header";
import useToggle from "../../components/hooks/useToggle";
import useForm from "../../components/hooks/UseForm";
import UserContext from "../../context/User/UserContext";
import { ItemsContainer } from "../../styles/Items";
import { useQuery, useMutation } from "@apollo/client";
import {
  ADD_ITEMS,
  GET_RECOMMENDATION_BY_ID,
  GET_ITEMS,
  DELETE_ITEMS,
  EDIT_ITEM,
} from "../../graphql";
import Modal from "../../components/common/Modal.js";
import AddItems from "../../components/Recommendations/AddItems";
import ModalTrigger from "../../components/common/ModalTrigger";
import { openWidget } from "../../components/utils/CloudinaryWidget";
import { SignUpText } from "../../components/common";
const Items = (props) => {
  const [id, setId] = useState(props.match.params.recommendationId || "");
  const [recommendation_id, setRecommendation_id] = useState(
    parseInt(props.match.params.recommendationId) || 0
  );
  const [username, setUsername] = useState(props.match.params.username || "");

  const [modal, setModal, toggle] = useToggle();
  const [signinModal, setSigninModal, toggleSignin] = useToggle();

  const userContext = useContext(UserContext);
  const { user } = userContext;

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

  const generateModalTrigger = (user, username) => {
    if (!user) {
      return;
    }
    if (user) {
      console.log(user.username);
      if (user.loadUser[0].username === username) {
        return <ModalTrigger toggle={user ? toggle : toggleSignin} />;
      }
    }
  };

  const [editItem, { loading: editLoading, error: editError }] = useMutation(
    EDIT_ITEM,
    {
      refetchQueries: [{ query: GET_ITEMS, variables: { recommendation_id } }],

      onError(err) {
        console.log(err);
      },
    }
  );

  const [deleteItem, { loading: deleteLoading, error: deleteError }] =
    useMutation(DELETE_ITEMS, {
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

  useEffect(() => {
    setUsername(props.match.params.username);
  }, [props.match.params.username]);

  if (loading) return "loding...";

  if (contentLoading) return "Loading content";
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
          editItem={editItem}
          editLoading={editLoading}
          data={contentData}
          loading={contentLoading}
          error={contentError}
        />
      ) : (
        ""
      )}
      {generateModalTrigger(user, username)}
      {signinModal ? <Modal>{SignUpText("add-item", toggleSignin)}</Modal> : ""}
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
