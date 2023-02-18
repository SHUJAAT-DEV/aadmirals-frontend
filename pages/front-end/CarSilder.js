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