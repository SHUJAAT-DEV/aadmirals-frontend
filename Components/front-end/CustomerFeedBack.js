import { Swiper, SwiperSlide } from 'swiper/react';
import CustomerCard from './components/CustomerCard';
import 'swiper/css';
import "swiper/css/pagination";

function CustomerFeedBack (){
    return(
        <Swiper
                spaceBetween={20}
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
                    <CustomerCard/>
            </SwiperSlide>
            <SwiperSlide> 
                    <CustomerCard/>
            </SwiperSlide>
            <SwiperSlide> 
                    <CustomerCard/>
            </SwiperSlide>
            <SwiperSlide> 
                    <CustomerCard/>
            </SwiperSlide>
            
               
           
        </Swiper>

    );
}
export default CustomerFeedBack;