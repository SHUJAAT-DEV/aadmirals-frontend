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