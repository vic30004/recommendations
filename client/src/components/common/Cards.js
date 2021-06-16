import React, { Fragment, useEffect, useState } from "react";
import { Image, Placeholder } from "cloudinary-react";

import { Card, CardTitle, TitleContainer } from "./CardStyles/CardStyles";
import Modal from "./Modal";
import useToggle from "../hooks/useToggle";
import useForm from "../hooks/UseForm";
import AddItems from "../Recommendations/AddItems";
import { openWidget } from "../utils/CloudinaryWidget";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../graphql";

const Cards = ({
  picture,
  title,
  userId,
  user,
  id,
  description,
  recommendation_id,
  deleteItem,
  editLoading,
  editItem,
  profileCard,
  follow,
}) => {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { id: parseInt(userId) },
  });

  const [modal, setModal, toggle] = useToggle();
  const [username, setUsername] = useState("");
  const [currentUser, setUser] = useState(user ? user.loadUser : "");
  const [item, handleChange, reset, setItem] = useForm({
    itemsTitle: title,
    itemsDescription: description,
    itemsCoverPicture: picture,
  });

  useEffect(() => {
    setItem({
      itemsTitle: title,
      itemsDescription: description,
      itemsCoverPicture: picture,
    });
  }, [title, description, picture]);

  useEffect(() => {
    if (!user) {
      if (!loading) {
        setUsername(data.user.username);
      }
    }
  }, [loading]);

  const { itemsTitle, itemsDescription, itemsCoverPicture } = item;

  const handleEdit = (event) => {
    event.preventDefault();
    console.log({ itemsTitle });
    editItem({
      variables: {
        id,
        title: itemsTitle,
        description: itemsDescription,
        cover_picture: itemsCoverPicture,
        recommendation_id,
      },
    });
    toggle();
  };

  const generateItemLink = (title) => {
    if (follow && profileCard) {
      return { title };
    }

    if (user) {
      return (
        <Link to={`/${recommendation_id}/${user.loadUser[0].username}`}>
          {title}
        </Link>
      );
    } else {
      return <Link to={`/${recommendation_id}/${username}`}>{title}</Link>;
    }
  };

  return (
    <Fragment>
      <Card>
        <div className='picture-container'>
          <Image
            cloud_name='dawyijhjw'
            publicId={picture}
            width='301'
            crop='scale'
            quality='auto'
            responsive
            loading='lazy'
            format='webp'
            responsiveUseBreakpoints='true'
            flag='prgressive'
            height='291'
          >
            <Placeholder type='pixelate' />
          </Image>
        </div>
        <div className='description'>
          <p>{description}</p>
        </div>
        <TitleContainer>
          <CardTitle Col={"92%"}>
            {profileCard ? generateItemLink(title) : title}
          </CardTitle>
          {currentUser && parseInt(currentUser[0].id) === parseInt(userId) ? (
            <>
              <span>
                <i class='fas fa-ellipsis-v'></i>
              </span>

              <div className='drop-down'>
                <ul>
                  <li onClick={toggle}>Edit</li>
                  <li
                    onClick={() =>
                      deleteItem({ variables: { id, recommendation_id } })
                    }
                  >
                    Delete
                  </li>
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </TitleContainer>
      </Card>
      {modal ? (
        <Modal>
          <AddItems
            title={itemsTitle}
            description={itemsDescription}
            main_picture={itemsCoverPicture}
            handleChange={handleChange}
            openWidget={openWidget}
            itemData={item}
            toggle={toggle}
            handleSubmit={handleEdit}
            setFormData={setItem}
            mutationLoading={editLoading}
          />
        </Modal>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Cards;
