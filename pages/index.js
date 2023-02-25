/* eslint-disable @next/next/no-img-element */

import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import Image from "next/image";
import React from "react";
import { useAlert } from "react-alert";
import Carousel from "react-elastic-carousel";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { Alert, Col, Container, Row, Spinner } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";

const styles = dynamic(() => import('./home.module.scss'))

const TestimonialCards = dynamic(() => import('../Components/Testimonial/Testimonial Cards/TestimonialCards'))
const SideNav = dynamic(() => import('../Components/Header/SideNav/SideNav'))
const Hero = dynamic(() => import('../Components/hero/HomeHero'))
const Floatingbutton = dynamic(() => import('../Components/floaingbutton/floatingbutton'))
const Cities = dynamic(() => import('../Components/Cities/Cities'))
const Header = dynamic(() => import('../Components/Header/Header'))
const LimousineService = dynamic(() => import('../Components/Limousine Service/LimousineService'))
const HomeForm = dynamic(() => import('../Components/Home Form/HomeForm'))
const OurServices = dynamic(() => import('../Components/Our Services/OurServices'))
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import ContactUs from "../Components/ContactUs/ContactUs";
import BottomFooter from '../Components/Footer/BottomFooter/BottomFooter';
import { getHomeContactDetail, getHomeContent } from "../utils/home/homeApi";
import useHome from "../utils/home/useHome";
// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const Home = () => {
  const alert = useAlert();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  const { success } = useSelector((state) => state.cancelBooking);
  const succ = () => {
    alert.success('Booking has been Cancelled');
  };

  const { error, isLoading, isError, homeContent, contactDetails } = useHome();
  let heroContent = homeContent?.home.length > 0 && homeContent.home[0]
  const det = contactDetails && contactDetails?.contactDetails[0];

  return (
    <>
      <Helmet>
        <script src="//code.tidio.co/qfrondfu1stskkupw9qtryxqmm3kzd7r.js" async></script>
      </Helmet>
      <NextSeo
        title={heroContent.metaTitle}
        description={heroContent.metaDescription}
        canonical="https://www.aadmirals.com"
      />
      {isError || isLoading ? (
        <div className={styles.loader} style={{ textAlignLast: 'center' }}>
          <section>
            <img
              src="/Assets/Loader-Logo.svg"
              alt="88logo"
              loading="lazy"
              decoding="async"
            />
          </section>
          <section>
            <Spinner animation="border" role="status" className={styles.spinner} />
          </section>
        </div>
      ) : (
        <div style={{ overflow: "hidden" }}>
          <SideNav />
          <Floatingbutton />
          <Header />
          {isError ? (
            <Alert className="m-0" color="danger">
              {error}
            </Alert>
          ) : null
          }
          {success && succ()}
          <div className={`${styles.mainContainer}`} fluid id="#bookingForm">
            <Hero
              Text={heroContent.heroText}
              Title={heroContent.heroTitle || 'Houston Limo Service & Airport Transportation | Book Now'}
              img={heroContent.heroImage}
              Form={HomeForm}
            />
          </div>
          <OurServices services={homeContent?.services} />

          {/* <div>
            <Image
              priority={!!heroContent.serveYouLikeKingImage}
              src={heroContent.serveYouLikeKingImage}
              alt="Airport Shuttle Houston"
              layout="responsive"
              width={50} height={20}
              quality={100}
              objectFit="fill"
            />
          </div> */}

          <Cities cities={homeContent?.cityWeServe} />
          {/* testimonial */}
          <div className={styles.mainContainer_Testimonial}>
            <center>
              <Row>
                <Col xs={12} md={12} xl={12}>
                  <h2 style={{ paddingTop: '60px' }}>WHAT OUR CUSTOMERS ARE SAYING</h2>
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
                    homeContent?.testimonial && homeContent?.testimonial?.map((testimonial, index) => (
                      <SwiperSlide key={`${index}-${testimonial.name}`}>
                        <TestimonialCards image={testimonial.image} name={testimonial.name} msg={testimonial.message} />
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </Row>
            </center>
          </div>

          {/* partners */}
          <Container fluid className={styles.mainContainer_Partner}>
            <center>
              <Row>
                <Col xs={12} md={12} xl={12}>
                  <h2 style={{ padding: '60px 0' }}>Our Partners</h2>
                </Col>
                <Carousel
                  autoPlaySpeed={4000}
                  showArrows={false}
                  breakPoints={breakPoints}
                  enableAutoPlay={true}
                >
                  {
                    homeContent?.partner && homeContent?.partner?.map((partner, index) => (
                      <a href={`${partner?.url}`} target="_blank" rel="noreferrer" key={index} >
                        <div className={styles.logos_container}>
                          <Image priority={!!partner.image} src={partner.image} className={styles.logo_container} alt={partner.name} width={100} height={100} objectFit="contain" />
                          <h2>{partner.name}</h2>
                        </div>
                      </a>
                    ))
                  }
                </Carousel>
              </Row>
            </center>
          </Container>
          {/*  */}
          <LimousineService data={heroContent} />
          {/* contact us */}
          <ContactUs contactDetail={det} />
          <BottomFooter />
        </div>
      )}
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['home-content'], getHomeContent())
  await queryClient.prefetchQuery(['home-contact-detail'], getHomeContactDetail())
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home;