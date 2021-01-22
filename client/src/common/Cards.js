import React from "react";
import { Image, Placeholder } from "cloudinary-react";
import { Card } from "./CardStyles/CardStyles";

const Cards = ({ picture, title }) => {

  return (
    <Card>
      <Image
        cloud_name='dawyijhjw'
        publicId={picture}
        width='301'
        crop='fill'
        quality='auto'
        responsive='true'
        loading='lazy'
        format='webp'
        flag='prgressive'
        height='291'
      >

        <Placeholder type='pixelate' />
      </Image>
      <h3>{title}</h3>
    </Card>
  );
};

export default Cards;
