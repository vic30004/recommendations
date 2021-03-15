import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_FOLLOWS_BY_USER_ID,
  GET_RECOMMENDATION_BY_USER_ID,
} from "../../graphql";
import { Image, Placeholder } from "cloudinary-react";
import {
  HeaderContentContainer,
  HeaderInfoContainer,
  ItemHeaderContainer,
} from "../../styles/Items/ItemsContainer";
import { FlexRow } from "../../common/flex";
import ProfileBody from "./ProfileBody";

const Header = ({ user }) => {
  const {
    data: recommendationData,
    loading: recommendationLoading,
    error: recommendationError,
  } = useQuery(GET_RECOMMENDATION_BY_USER_ID, {
    variables: { user_id: user[0].id },
  });
  // Query to get follows
  const {
    data: followData,
    loading: followLoading,
    error: followError,
  } = useQuery(GET_FOLLOWS_BY_USER_ID, {
    variables: { user_id: user[0].id },
  });

  const makePlural = (len) => {
    if (len > 1) {
      return "Recommendations";
    }
    return "Recommendation";
  };

  const randomNumGen = (len) => {
    return Math.floor(Math.random() * len);
  };

  return (
    <>
    <ItemHeaderContainer>
      <HeaderContentContainer>
        {recommendationData ? (
          <Image
            cloud_name='dawyijhjw'
            publicId={
              recommendationData.getRecommendationsByUsername[
                randomNumGen(
                  recommendationData.getRecommendationsByUsername.length
                )
              ].main_picture || 'recommendation/dbnrnrpv0paeg7unzgjh'


            }
            width='auto'
            crop='fill'
            quality='auto'
            responsive='true'
            responsiveUseBreakpoints='true'
            loading='lazy'
            format='webp'
            flag='prgressive'
            effect='blur:120'
            height='350'
          >
            <Placeholder type='pixelate' />
          </Image>
        ) : (
          <Image
            cloud_name='dawyijhjw'
            publicId=
               'recommendation/dbnrnrpv0paeg7unzgjh'
            width='auto'
            crop='fill'
            quality='auto'
            responsive='true'
            responsiveUseBreakpoints='true'
            loading='lazy'
            format='webp'
            flag='prgressive'
            effect='blur:120'
            height='350'
          >
            <Placeholder type='pixelate' />
          </Image>
        )}
        <HeaderInfoContainer>
          <h1>Welcome to {user[0].username} profile </h1>
          <FlexRow>
            {recommendationData ? (
              <p>
                {makePlural(
                  recommendationData.getRecommendationsByUsername.length
                )}
                : {recommendationData.getRecommendationsByUsername.length}
              </p>
            ) : (
              <p>Recommendation:0 </p>
            )}
            {followData ? (
              <p>Following: {followData.getFollowsByUserId.length}</p>
            ) : (
              <p>Following: 0 </p>
            )}
          </FlexRow>
        </HeaderInfoContainer>
      </HeaderContentContainer>
    </ItemHeaderContainer>
    <>
    {recommendationData?  <ProfileBody recommendations={recommendationData.getRecommendationsByUsername}/> :<><h2>Recommendations</h2> <p>No Recommendations yet</p></>}
    {followData?  <ProfileBody recommendations={followData.getFollowsByUserId} follow={true}/> :<><h2>Follows</h2> <p>Not Following Anything</p></>}
  
    </>
    </>
  );
};

export default Header;
