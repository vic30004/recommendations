import React, { useState } from "react";
import Content from "../../components/Items/Content";
import Header from "../../components/Items/Header";
import { ItemsContainer } from "../../styles/Items";
import { useQuery } from "@apollo/client";
import { GET_RECOMMENDATION_BY_ID } from "../../graphql";

const Items = (props) => {
  const [id, setId] = useState(props.match.params.recommendationId || "");
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
  if (loading) return "loding...";
  return (
    <ItemsContainer>
      <Header data={data} />
      <Content />
    </ItemsContainer>
  );
};

export default Items;
