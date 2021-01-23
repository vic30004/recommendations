import React, { useState } from "react";
import { Image, Placeholder } from "cloudinary-react";
import { Card } from "./CardStyles/CardStyles";

const Cards = ({ picture, title, userId, user }) => {
  console.log({ user });
  const [currentUser, setUser] = useState(user.loadUser || "");

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
      {currentUser[0].id === userId ? <span>:</span> : ""}
    </Card>
  );
};

export default Cards;
