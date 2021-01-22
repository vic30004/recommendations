import React from "react";

import { ItemContentContainer } from "../../styles/Items";
import Cards from "../../common/Cards";
const Content = ({ loading, data, error }) => {
  if (loading) return "Loading...";
  if (error) {
    console.log(error);
  }
  console.log({loading});

  return (
    <ItemContentContainer>
      {!loading && data
        ? data.showItems.map((item, i) => (
            <Cards key={i} title={item.title} picture={item.cover_picture} />
          ))
        : ""}
    </ItemContentContainer>
  );
};

export default Content;
