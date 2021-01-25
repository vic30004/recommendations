import React, { useContext } from "react";
import UserContext from "../../context/User/UserContext";
import { useMutation } from "@apollo/client";
import { ItemContentContainer } from "../../styles/Items";
import Cards from "../../common/Cards";
import { DELETE_ITEMS } from "../../graphql";
const Content = ({ loading, data, error,deleteItem }) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;



  if (loading) return "Loading...";
  if (error) {
    console.log(error);
  }

  return (
    <ItemContentContainer>
      {!loading && data
        ? data.showItems.map((item, i) => (
            <Cards
              key={i}
              id={item.id}
              title={item.title}
              picture={item.cover_picture}
              description={item.description}
              userId={item.user_id}
              user={user}
              recommendation_id={item.recommendation_id}
              deleteItem={deleteItem}
            />
          ))
        : ""}
    </ItemContentContainer>
  );
};

export default Content;
