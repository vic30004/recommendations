import React from "react";
import {
  RecommendationContainer,
  RecommendationCard,
} from "../../styles/Recommendations";
import { useQuery } from "@apollo/client";
import { GET_RECOMMENDATIONS } from "../../graphql/";
import { Image, Placeholder } from "cloudinary-react";
export const Recommendation = () => {
  const { data, loading, error } = useQuery(GET_RECOMMENDATIONS);
  console.log(data);
  return (
    <>
      {loading ? (
        <h2>loading...</h2>
      ) : data.recommendations.length > 0 ? (
        <RecommendationContainer>
          {data.recommendations.map((item, i) => (
            <RecommendationCard key={i}>
              <div className='img-container'>
                <Image
                  cloud_name='dawyijhjw'
                  publicId={item.main_picture}
                  width='500'
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
            </RecommendationCard>
          ))}
        </RecommendationContainer>
      ) : (
        <h2>No recommendation found</h2>
      )}
    </>
  );
};
