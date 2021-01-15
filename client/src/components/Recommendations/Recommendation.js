import React from "react";
import {
  RecommendationContainer,
  RecommendationCard,
} from "../../styles/Recommendations";
import { useQuery } from "@apollo/client";
import { GET_RECOMMENDATIONS } from "../../graphql/";
import { Image, Placeholder } from "cloudinary-react";
import RecommendationContainerItems from "./RecomendationContentItems";
export const Recommendation = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_RECOMMENDATIONS);

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
