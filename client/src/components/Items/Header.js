import React, { useState, useEffect } from "react";
import { Image, Placeholder } from "cloudinary-react";
import {
  ItemHeaderContainer,
  HeaderContentContainer,
  HeaderInfoContainer,
  HeaderInfoContentContainer,
} from "../../styles/Items/ItemsContainer";
import RecommendationsCotnent from "./RecommendationsCotnent";

const Header = ({ data }) => {
  console.log(data);
  return (
    <ItemHeaderContainer>
      {data.getRecommendationById.map((item, i) => (
        <HeaderContentContainer>
          <Image
            cloud_name='dawyijhjw'
            publicId={item.main_picture}
            width='auto'
            crop='fill'
            quality='auto'
            responsive='true'
            loading='lazy'
            format='webp'
            flag='prgressive'
            effect='blur:180'
            height='350'
          >
            <Placeholder type='pixelate' />
          </Image>
          <HeaderInfoContainer>
            <h1>{item.title}</h1>
            <ul>
              <RecommendationsCotnent
                category={item.category}
                id={item.user_id}
                follow={item.follow}
              ></RecommendationsCotnent>
            </ul>
            <p>{item.description}</p>
          </HeaderInfoContainer>
        </HeaderContentContainer>
      ))}
    </ItemHeaderContainer>
  );
};

export default Header;
