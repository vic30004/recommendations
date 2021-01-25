import React, { useContext, useEffect } from "react";
import {
  RecommendationContainer,
  RecommendationCard,
} from "../../styles/Recommendations";
import { useMutation, useQuery } from "@apollo/client";
import { GET_RECOMMENDATIONS, FOLLOW } from "../../graphql/";
import { Image, Placeholder } from "cloudinary-react";
import RecommendationContainerItems from "./RecomendationContentItems";
import UserContext from "../../context/User/UserContext";
export const Recommendation = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_RECOMMENDATIONS);

  const [
    followRecommendation,
    { loading: muationLoading, error: mutationError },
  ] = useMutation(FOLLOW, {
    refetchQueries: [{ query: GET_RECOMMENDATIONS }],
    onError(err) {
      console.log(err);
    },
  });
  const userContext = useContext(UserContext);
  const { loadUser } = userContext;

  return (
    <>
      {loading ? (
        <h2>loading...</h2>
      ) : data ? (
        <RecommendationContainer>
          {data.recommendations.map((item, i) => (
            <RecommendationCard key={i}>
              <div className='img-container'>
                <Image
                  cloud_name='dawyijhjw'
                  publicId={item.main_picture}
                  width='620'
                  crop='limit'
                  quality='auto'
                  responsive='true'
                  loading='lazy'
                  format='webp'
                  flag='prgressive'
                >
                  <Placeholder type='pixelate' />
                </Image>
                <span>{item.category}</span>
              </div>
              <RecommendationContainerItems
                title={item.title}
                id={item.user_id}
                category={item.category}
                description={item.description}
                follow={item.follow}
                followRecommendation={followRecommendation}
                recommendation_id={item.id}
              />
            </RecommendationCard>
          ))}
        </RecommendationContainer>
      ) : (
        <h2>No recommendation found</h2>
      )}
    </>
  );
};
