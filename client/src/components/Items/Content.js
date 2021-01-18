import React from "react";
import { GET_ITEMS } from "../../graphql";
import { useQuery } from "@apollo/client";

import { ItemContentContainer } from "../../styles/Items";
import Cards from "../../common/Cards";
const Content = ({ recommendation_id }) => {
  const { data, loading, error } = useQuery(GET_ITEMS, {
    variables: { recommendation_id },
  });

  if (loading) return "Loading...";
  if (error) {
    console.log(error);
  }
  console.log(data);

  return (
    <ItemContentContainer>
      {data.showItems.map((item, i) => (
        <Cards key={i} title={item.title} picture={item.cover_picture} />
      ))}
    </ItemContentContainer>
  );
};

export default Content;
