import React from "react";
import { Row, Col } from "reactstrap";

import TestimonialCards from "./Testimonial Cards/TestimonialCards";
import styles from "./Testimonial.module.scss";



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
  Pagination , Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

function Testinmonial({ testimonials }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 2 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <div className={styles.mainContainer_Testimonial}>
      <center>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <h2>WHAT OUR CUSTOMERS ARE SAYING</h2>
          </Col>


          <Swiper slidesPerView={1} spaceBetween={30} autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
          }} pagination={{
            "clickable": true
          }} 

          breakpoints={{
            640: {
              "slidesPerView": 1,
              "spaceBetween": 20
            },
            768: {
              "slidesPerView": 2,
              "spaceBetween": 40
            },
            1024: {
              "slidesPerView": 3,
              "spaceBetween": 20
            }
          }}

          className="mySwiper">


            {
              testimonials ? testimonials.map(testimonial => (
                <SwiperSlide>
                  <TestimonialCards image={testimonial.image} name={testimonial.name} msg={testimonial.message} />
                </SwiperSlide>
              )) : null
            }
          </Swiper>



          {/* <Carousel
          itemPadding={[10, 10]}
            autoPlaySpeed={4000}
            showArrows={false}
            breakPoints={breakPoints}
            enableAutoPlay={true}
          >
            {
              testimonials? testimonials.map(testimonial=>(
                <TestimonialCards image={testimonial.image} name={testimonial.name} msg={testimonial.message} />

              )):null
            }


           
          </Carousel> */}
        </Row>
      </center>
    </div>
  );
}

export default Testinmonial;
