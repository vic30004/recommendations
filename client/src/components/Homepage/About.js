import React from "react";
import { IntroContainer, PhotoContainer } from "../../styles/Homepage";
import { Image, Placeholder } from "cloudinary-react";

const About = () => {
  return (
    <IntroContainer>
      <h1>
        <span>Recom</span>mend
      </h1>

      <PhotoContainer>
        <Image
          cloud_name='dawyijhjw'
          publicId='recommendation/Slice_3-removebg-preview_nqzy8m_n5hoaz'
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
        <h2>Platform to recommend anything</h2>
        <p>Create a following by recommending</p>
      </PhotoContainer>
    </IntroContainer>
  );
};

export default About;
