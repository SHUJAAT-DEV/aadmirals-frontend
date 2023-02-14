/* eslint-disable @next/next/no-img-element */
import { ErrorMessage } from "@hookform/error-message";
import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import Joi from "joi";
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import Image from "next/image";
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import Carousel from "react-elastic-carousel";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Card, Col, Container, Row, Spinner } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { URL } from "../config/serverUrl";
import { getContactPage } from "../redux/Contact_us/action";
import { Helmet } from "react-helmet";

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
// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const schema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phoneNumber: Joi.number().required(),
  message: Joi.string().required(),
});

const Home = (props) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      phoneNumber: "",
      message: "",
    },
    resolver: joiResolver(schema),
  });
  // useEffect(() => {
  //   dispatch(getContactDetailsPage());
  // }, [dispatch]);

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
  let data1 = props.data1.home_page.home.length > 0 && props.data1.home_page.home[0]
  const cms = props.data1
  const [reqFields, setreqFields] = useState(false);
  const cms2 = useSelector((state) => state.contact);

  // const details = useSelector((state) => state.contactDetails);
  const { contact_us_page } = cms2;
  // const { contact_details_page } = details;

  // const det = contact_details_page && contact_details_page.contactDetails[0];
  const det = props.contactDetails && props.contactDetails?.contactDetails[0];
  const onSubmit = (event) => {
    const { email, phoneNumber, message } = event;
    dispatch(getContactPage(email, phoneNumber, message));
  };

  return (
    <>
      <Helmet>
        <script src="//code.tidio.co/qfrondfu1stskkupw9qtryxqmm3kzd7r.js" async></script>
      </Helmet>
      <NextSeo
        title={data1?.metaTitle}
        description={data1?.metaDescription}
        canonical="https://www.aadmirals.com"
      />
      {cms.loading || cms.error ? (
        <div className={styles.loader}>
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
          {cms.error ? (
            <Alert className="m-0" color="danger">
              {cms.error}
            </Alert>
          ) : null}
          {success && succ()}
          <div className={`${styles.mainContainer}`} fluid id="#bookingForm">
            <Hero
              Text={cms.home_page.home[0].heroText}
              Title={cms.home_page.home[0].heroTitle || 'Houston Limo Service & Airport Transportation | Book Now'}
              img={cms.home_page.home[0].heroImage}
              Form={HomeForm}
            />
          </div>
          <OurServices services={cms.home_page.services} />
          <div>
            <Image
              priority={!!cms.home_page.home[0].serveYouLikeKingImage}
              src={cms.home_page.home[0].serveYouLikeKingImage}
              alt="Airport Shuttle Houston"
              layout="responsive"
              width={50} height={20}
              quality={100}
              objectFit="fill"
            />
          </div>
          <Cities cities={cms.home_page.cityWeServe} />
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
                    cms?.home_page?.testimonial ? cms?.home_page?.testimonial?.map((testimonial, index) => (
                      // eslint-disable-next-line react/jsx-key
                      <SwiperSlide key={`${index}-${testimonial.name}`}>
                        <TestimonialCards image={testimonial.image} name={testimonial.name} msg={testimonial.message} />
                      </SwiperSlide>
                    )) : null
                  }
                </Swiper>
              </Row>
            </center>
          </div>
          <>
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
                      cms?.home_page?.partner && cms?.home_page?.partner?.map((partner, index) => (
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
          </>
          <LimousineService data={cms.home_page.home[0]} />
          <div className="main_section_bg">
            <Container className={`${styles.main_container_footer} mb-5 p-0`}>
              <div className="contact_heding">
                <h3>Contact Us</h3>
              </div>
              <Row>
                <Col xs={12} md={6} className="info_boxes_main contact ">
                  <div className="main_infos">
                    <div className="row">
                      <div className="col-md-6 contact_div">
                        <div className="info-box">
                          <i className="fa fa-phone"></i>
                          <h3>Call Us</h3>
                          <a href={`tel:+1${det && det.phoneNumber}`} className="terminate_newline">
                            <i className="fa fa-volume-control-phone custom_size_icon" style=
                              {{
                                transform: 'rotate(-40deg)', display: "inline - flex"
                              }}></i> +1{det && det.phoneNumber}</a>
                          <a href={`https://wa.me/1${det && det.whatsapp}`} className="terminate_newline">
                            <i className="fa fa-whatsapp custom_size_icon"></i> +1{det && det.whatsapp}</a>
                          <a href={`skype:+1${det && det.skype}-?chat`} className="terminate_newline">
                            <i className="fa fa-skype custom_size_icon"></i> +1{det && det.skype}</a>
                        </div>
                      </div>
                      <div className="col-md-6 contact_div">
                        <div className="info-box">
                          <i className="fa fa-map-marker"></i>
                          <h3>Location</h3>
                          <p>8222 Kingsbrook Rd, <br /> Houston, TX 77024</p>
                        </div>
                      </div>
                      <div className="col-md-6 contact_div">
                        <div className="info-box">
                          <i className="fa fa-envelope-o"></i>
                          <h3>Email Us</h3>
                          <a href={`mailto:${det && det.email}`}>{det && det.email}</a>
                        </div>
                      </div>
                      <div className="col-md-6 contact_div">
                        <div className="info-box">
                          <i className="fa fa-clock-o"></i>
                          <h3>Open Hours</h3>
                          <p>Monday - Friday<br />9:00AM - 05:00PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </Col>
                <Col xs={11} md={6} className="add_overflow" style={{ margin: "auto", border: '0px' }}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="custom_contactus">
                      {cms.error && (
                        <Alert className="m-0" color="danger">
                          {cms.error}
                        </Alert>
                      )}
                      <Row style={{ marginTop: "15px" }}>
                        <Col xs="12">
                          {reqFields ? (
                            <Alert
                              style={{ borderRadius: "0.5rem" }}
                              color="danger"
                            >
                              All Fields Are Required
                            </Alert>
                          ) : ""}
                        </Col>
                      </Row>
                      <Card className={`${styles.cardPayment}`} style={{ border: 'none' }}>
                        <div className="form-group icon">
                          <label htmlFor="email" className={styles.label}>
                            Email
                          </label>
                          <Controller
                            name="email"
                            control={control}
                            render={({
                              field: { onChange, onBlur, value, name, ref },
                              formState: { errors },
                            }) => (
                              <div>
                                <input
                                  value={value}
                                  onChange={onChange}
                                  onBlur={onBlur}
                                  placeholder="Enter email"
                                  className={`${styles.input} bg-light inside form-control`}
                                />
                                <ErrorMessage
                                  errors={errors}
                                  name={name}
                                  render={({ message }) => (
                                    <p style={{ color: "red" }}>{message}</p>
                                  )}
                                />
                              </div>
                            )}
                          />
                        </div>
                        <div className="form-group">
                          <label className={styles.label} htmlFor="phoneNumber">
                            Phone
                          </label>
                          <Controller
                            name="phoneNumber"
                            control={control}
                            render={({
                              field: { onChange, onBlur, value, name, ref },
                              formState: { errors },
                            }) => (
                              <div>
                                <input
                                  value={value}
                                  onChange={onChange}
                                  onBlur={onBlur}
                                  type="number"
                                  placeholder="+1"
                                  className={`${styles.input} form-control inside bg-light`}
                                />
                                <ErrorMessage
                                  errors={errors}
                                  name={name}
                                  render={({ message }) => (
                                    <p style={{ color: "red" }}>{message}</p>
                                  )}
                                />
                              </div>
                            )}
                          />
                        </div>
                        <div className="form-group">
                          <label className={styles.label} htmlFor="message">
                            Message
                          </label>
                          <Controller
                            name="message"
                            control={control}
                            render={({
                              field: { onChange, onBlur, value, name, ref },
                              formState: { errors },
                            }) => (
                              <div>
                                <textarea
                                  value={value}
                                  onChange={onChange}
                                  onBlur={onBlur}
                                  className={`${styles.input} form-control inside bg-light`}
                                  placeholder="type a message..."
                                  id="w3review"
                                  name="w3review"
                                  rows="4"
                                  cols="50"
                                />
                                <ErrorMessage
                                  errors={errors}
                                  name={name}
                                  render={({ message }) => (
                                    <p style={{ color: "red" }}>{message}</p>
                                  )}
                                />
                              </div>
                            )}
                          />
                        </div>

                        <Row>
                          <Col xs="12">
                            <Button
                              type="submit"
                              className={styles.buttonPayment}
                            >
                              Send
                            </Button>
                          </Col>
                        </Row>
                        <Row style={{ marginTop: "15px" }}>
                          <Col xs="12">
                            {contact_us_page && (
                              <Alert
                                style={{ borderRadius: "0.5rem" }}
                                color="success"
                              >
                                {contact_us_page.status}
                              </Alert>
                            )}
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  </form>
                </Col>
              </Row>
            </Container>
            <div className="footer_parenbt">
              <div className="container">
                <div className="main_footer">
                  <footer>
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="footer_logo">
                          <img src="/Assets/logo-header.svg" alt="..12" />
                        </div>
                        <div className="social_links">
                          <ul>
                            <li>
                              <Link href="https://www.facebook.com/AAdmirals">
                                <a><i className="fa fa-facebook"></i></a>
                              </Link>
                            </li>
                            <li>
                              <Link href="https://twitter.com/AAdmiralsTravel">
                                <a><i className="fa fa-twitter"></i></a>
                              </Link>
                            </li>
                            <li>
                              <Link href="https://wa.me/13468574294">
                                <a><i className="fa fa-whatsapp"></i></a>
                              </Link>
                            </li>
                            <li>
                              <Link href="https://www.linkedin.com/company/aadmirals-group-inc">
                                <a><i className="fa fa-linkedin"></i></a>
                              </Link>
                            </li>
                            <li>
                              <Link href="https://www.yelp.com/biz/aadmirals-travel-and-transportation-houston-2">
                                <a><i className="fa fa-suitcase"></i></a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="useful_contact col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="header_name">
                          <h3>Useful Links</h3>
                        </div>
                        <div className="links_footer">
                          <ul>
                            <li>
                              <Link href="/">
                                <a>Home</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/login">
                                <a>Login</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/FAQ">
                                <a>FAQs</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/about-us">
                                <a>About</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/fleet">
                                <a>fleet</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="useful_contact2 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="header_name">
                          <h3>Contact Us</h3>
                        </div>
                        <div className="links_footer">
                          <ul>
                            <li>
                              <Link href="">
                                <a><i className="fa fa-map-marker" aria-hidden="true"></i> 8222 Kingsbrook Rd , Houston, TX 77024</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <a><i className="fa fa-map-marker" aria-hidden="true"></i> 17103 Imperial Valley Dr, Houston, TX 77060</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="mailto:info@aadmirals.com">
                                <a><i className="fa fa-envelope" aria-hidden="true"></i> info@aadmirals.com</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/">
                                <a><i className="fa fa-globe" aria-hidden="true"></i> aadmirals.com</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
              <div className="sub-footer">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 text-center">
                      <p className="copy">Est 2013 All Rights Reserved© <Link href="/"><a> AAdmirals Group,INC</a></Link>  </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59,immutable'
  )
  let respo = await axios.get(`${URL}/website-content/home`);
  const contactData = await axios.get(`${URL}/website-content/contact-details`);
  let contactDetails = contactData.data;
  let data = respo.data.modifiedResponse
  let data1 = {
    loading: false,
    error: null,
    home_page: data,
  }
  return { props: { data1, contactDetails } }
}

export default Home;