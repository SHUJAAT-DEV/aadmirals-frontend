import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardsSection2 from './destinationCardsSection2';
function CarSlider (){
    return(
        <Swiper
                spaceBetween={0}
                slidesPerView={3}
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