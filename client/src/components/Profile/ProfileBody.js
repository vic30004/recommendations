import { useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMutation } from "@apollo/client";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Controller,
} from "swiper";
import UserContext from "../../context/User/UserContext";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import Cards from "../../common/Cards";
import { DELETE_RECOMMENDATION, EDIT_RECOMMENDATION } from "../../graphql";
SwiperCore.use([Navigation, Controller, Pagination, Scrollbar]);

const ProfileBody = ({ recommendations, follow, query, user_id }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const userContext = useContext(UserContext);

  const [
    deleteItem,
    { loading: deleteLoading, error: deleteError },
  ] = useMutation(DELETE_RECOMMENDATION, {
    refetchQueries: [{ query: query, variables: { user_id } }],

    onError(err) {
      console.log(err);
    },
  });

  const [editItem, { loading: editLoading, error: editError }] = useMutation(
    EDIT_RECOMMENDATION,
    {
      refetchQueries: [{ query: query, variables: { user_id } }],

      onError(err) {
        console.log(err);
      },
    }
  );

  const { user } = userContext;
  return (
    <div>
      <h2>{follow ? "Following" : "Recommendations"}</h2>
      {recommendations.length ? (
        <Swiper
          spaceBetween={10}
          controller={{ control: controlledSwiper }}
          slidesPerView={1}
          navigation
          breakpoints={{
            540: {
              width: 540,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4.2,
            },
            1200: {
              width: 1200,
              slidesPerView: 4.2,
            },
          }}
          onSwiper={setControlledSwiper}
        >
          {recommendations.map((item) => (
            <>
              <SwiperSlide>
                <Cards
                  key={item.title}
                  id={item.id}
                  title={item.title}
                  picture={item.main_picture}
                  description={item.description}
                  userId={item.user_id}
                  recommendation_id={item.recommendation_id || item.id}
                  user={user}
                  deleteItem={deleteItem}
                  editItem={editItem}
                  editLoading={editLoading}
                />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      ) : follow ? (
        "Not Following anything"
      ) : (
        "No Recommendations yet"
      )}
    </div>
  );
};

export default ProfileBody;
