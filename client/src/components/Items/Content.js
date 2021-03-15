import React, { useContext } from "react";
import UserContext from "../../context/User/UserContext";
import { ItemContentContainer } from "../../styles/Items";
import Cards from "../../common/Cards";
const Content = ({
  loading,
  data,
  error,
  deleteItem,
  editItem,
  editLoading,
}) => {
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
              key={item.id}
              id={item.id}
              title={item.title}
              picture={item.cover_picture}
              description={item.description}
              userId={item.user_id}
              user={user}
              recommendation_id={item.recommendation_id}
              deleteItem={deleteItem}
              editItem={editItem}
              editLoading={editLoading}
            />
          ))
        : ""}
    </ItemContentContainer>
  );
};

export default Content;
