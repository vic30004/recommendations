import React, { useContext } from "react";
import UserContext from "../../context/User/UserContext";
import { ItemContentContainer } from "../../styles/Items";
import Cards from "../common/Cards";
import { generateCard } from "../common/helper/GenerateCards";

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

  const args = {
    deleteItem,
    editItem,
    editLoading,
    follow:false,
    cover: true,
  };
  return (
    <ItemContentContainer>
      {!loading && data
        ? data.showItems.map((item) => generateCard(user, item, args))
        : ""}
    </ItemContentContainer>
  );
};

export default Content;
