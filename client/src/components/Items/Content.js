import React, { useContext } from "react";
import UserContext from "../../context/User/UserContext";

import { ItemContentContainer } from "../../styles/Items";
import Cards from "../../common/Cards";
const Content = ({ loading, data, error }) => {
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
              title={item.title}
              picture={item.cover_picture}
              userId={item.user_id}
              user={user}
              key={i}
            />
          ))
        : ""}
    </ItemContentContainer>
  );
};

export default Content;
