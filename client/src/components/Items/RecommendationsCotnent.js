import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../graphql";
import { Link } from "react-router-dom";
const RecommendationsCotnent = ({ id, category, follow }) => {
  const { data, loading, error, refetch } = useQuery(GET_USER, {
    variables: { id },
    suspend: false,
  });

  return (
    <>
      <li>Category: {category}</li>
      {data ? (
        <Link to={`/${data.user.username}`}>
          <li>Author:{data.user.username}</li>
        </Link>
      ) : (
        ""
      )}

      <li>Follows: {follow < 0 ? 0 : follow}</li>
    </>
  );
};

export default RecommendationsCotnent;
