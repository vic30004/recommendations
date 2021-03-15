import {useState,useContext} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar,Controller } from 'swiper';
import UserContext from "../../context/User/UserContext";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import Cards from "../../common/Cards";
SwiperCore.use([Navigation, Controller, Pagination, Scrollbar]);

const ProfileBody = ({recommendations,follow}) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  console.log(recommendations)
  const userContext = useContext(UserContext);
  const { user } = userContext;
  return(
    <>
    <h2>{follow?"Following" :"Recommendations"}</h2>
    {recommendations.length? <Swiper   
    spaceBetween={10}
    controller={{ control: controlledSwiper }}
    slidesPerView={1}
    navigation
    breakpoints={{
      // when window width is >= 640px
      // 320: {
      //   width: 320,
      //   slidesPerView: 2,
      // },
      540: {
        width: 540,
        slidesPerView: 2,
      },
      // when window width is >= 768px
      768: {
        width: 768,
        slidesPerView: 4.2,
      },
      1200:{
        width: 1200,
        slidesPerView: 4.2
      }
    }}
    onSwiper={setControlledSwiper}>
      {recommendations.map((item)=>(
        <>
  <SwiperSlide>
        <Cards
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    picture={item.main_picture}
                    description={item.description}
                    userId={item.user_id}
                    recommendation_id={item.recommendation_id}
                    user={user}

                    />
                 </SwiperSlide>   
        </>
      ))}

    </Swiper>: follow? 'Not Following anything':"No Recommendations yet"}
    
    </>
  )
};

export default ProfileBody;
