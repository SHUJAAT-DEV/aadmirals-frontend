import { Swiper, pagination,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

import CardsSection2 from './destinationCardsSection2';
function CarSlider (){
    return(
        <Swiper
                spaceBetween={30}
                slidesPerView={3}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                        300:{
                                slidesPerView: 1,
                                spaceBetween: 40,
                        },
                        524: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                      }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
            <SwiperSlide> 
                    <CardsSection2 />
            </SwiperSlide>
            <SwiperSlide> 
                    <CardsSection2/>
            </SwiperSlide>
            <SwiperSlide> 
                    <CardsSection2/>
            </SwiperSlide>
            <SwiperSlide> 
                    <CardsSection2/>
            </SwiperSlide>
            
               
           
        </Swiper>

    );
}

export default CarSlider;