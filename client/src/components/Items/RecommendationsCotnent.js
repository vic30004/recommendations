import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../graphql";

const RecommendationsCotnent = ({ id, category, follow }) => {
  const { data, loading, error, refetch } = useQuery(GET_USER, {
    variables: { id },
    suspend: false,
  });


  return (
    <>
      <li>Category: {category}</li>
      <li>Author: {data ? data.user.username : ""}</li>
      <li>Follows: {follow}</li>
    </>
  );
};

export default RecommendationsCotnent;
