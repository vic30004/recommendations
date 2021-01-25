import React, { useState } from "react";
import { Image, Placeholder } from "cloudinary-react";

import { Card, CardTitle, TitleContainer } from "./CardStyles/CardStyles";

const Cards = ({
  picture,
  title,
  userId,
  user,
  id,
  description,
  recommendation_id,
  deleteItem,
}) => {
  console.log({ user });
  const [currentUser, setUser] = useState(user.loadUser || "");

  return (
    <Card>
      <div className='picture-container'>
        <Image
          cloud_name='dawyijhjw'
          publicId={picture}
          width='301'
          crop='scale'
          quality='auto'
          responsive='true'
          loading='lazy'
          format='webp'
          responsiveUseBreakpoints='true'
          flag='prgressive'
          height='291'
        >
          <Placeholder type='pixelate' />
        </Image>
      </div>
      <div className='description'>
        <p>{description}</p>
      </div>
      <TitleContainer>
        <CardTitle Col={"92%"}>{title}</CardTitle>
        {currentUser[0].id === userId ? (
          <>
            <span>
              <i class='fas fa-ellipsis-v'></i>
            </span>

            <div className='drop-down'>
              <ul>
                <li>Edit</li>
                <li
                  onClick={() =>
                    deleteItem({ variables: { id, recommendation_id } })
                  }
                >
                  Delete
                </li>
              </ul>
            </div>
          </>
        ) : (
          ""
        )}
      </TitleContainer>
    </Card>
  );
};

export default Cards;
