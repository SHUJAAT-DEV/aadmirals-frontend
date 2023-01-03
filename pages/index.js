import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic'
import { useDispatch, useSelector } from "react-redux";
import { Alert, } from "reactstrap";
import { useAlert } from "react-alert";
import axios from "axios"
import { URL } from "../config/serverUrl";
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';
import Image from "next/image";
import { Spinner } from "reactstrap";
import Link from 'next/link'
import { Container, Row, Col } from "reactstrap";
import { Card, Button } from "reactstrap";
import Carousel from "react-elastic-carousel";
import { getHomePage } from "../redux/CMS/action";
import "./../Components/Ourpartners/PartnerCards/Partnercard.module.scss";

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

import { getContactPage } from "../redux/Contact_us/action";
import { getContactDetailsPage } from "../redux/Contact_details/action";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
  Pagination, Autoplay
} from 'swiper';
import { Helmet } from "react-helmet";
// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const Home = (props) => {
  const router = useRouter()
  const alert = useAlert();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomePage());
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  const cancelBooking = useSelector((state) => state.cancelBooking);
  const { success } = cancelBooking;
  const succ = () => {
    alert.success('Booking has been Cancelled');
  };
  let data1 = props.data1.home_page.home.length > 0 && props.data1.home_page.home[0]
  const cms = props.data1
  const [email, setEmail] = useState("");
  const [reqFields, setreqFields] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");


  const cms2 = useSelector((state) => state.contact);
  const details = useSelector((state) => state.contactDetails);

  const { contact_us_page } = cms2;
  const { contact_details_page } = details;

  const det = contact_details_page && contact_details_page.contactDetails[0];

  const submitHandler = (e) => {
    e.preventDefault();
    setreqFields(false)

    if (!email || !phoneNumber || !message) {
      setreqFields(true)

    } else {
      dispatch(getContactPage(email, phoneNumber, message));

    }
  };

  useEffect(() => {
    dispatch(getContactDetailsPage());
  }, []);
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
            <img src="/Assets/Loader-Logo.svg" alt="88logo" />
          </section>
          <section>
            <Spinner animation="border" role="status" className={styles.spinner} />
          </section>
        </div>
      ) : (
        <>
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
                Title={'Houston Limo Service & Airport Transportation | Book Now'}
                img={cms.home_page.home[0].heroImage}
                Form={HomeForm}
              />
            </div>
            <OurServices services={cms.home_page.services} />
            <div>
              <Image priority={true} src={cms.home_page.home[0].serveYouLikeKingImage} alt="Airport Shuttle Houston" layout="responsive" width={50} height={20} priorit={true} quality={100} objectFit="fill" />
            </div>
            <Cities cities={cms.home_page.cityWeServe} />

            <div className={styles.mainContainer_Testimonial}>
              <center>
                <Row>
                  <Col xs={12} md={12} xl={12}>
                    <h2 style={{ paddingTop: '60px' }}>WHAT OUR CUSTOMERS ARE SAYING</h2>
                  </Col>
                  <Swiper slidesPerView={1} spaceBetween={30} 
                  autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                  }} 
                  pagination={{
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
                      cms?.home_page?.testimonial ? cms?.home_page?.testimonial?.map(testimonial => (
                        // eslint-disable-next-line react/jsx-key
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
            <>
              <Container fluid className={styles.mainContainer_Partner}>
                <center>
                  <Row>
                    <Col xs={12} md={12} xl={12}>
                      <h2 style={{ padding: '60px 0' }}>Our Partners</h2>
                    </Col>
                    {/* <Carousel
                      autoPlaySpeed={4000}
                      showArrows={false}
                      breakPoints={breakPoints}
                      enableAutoPlay={true}
                    > */}
                    <div className={styles.partnarLogo} style={{display:'flex',justifyContent:'space-evenly',width:'100%'}} >
                      {
                        cms?.home_page?.partner && cms?.home_page?.partner?.map(partner => (
                          <>
                            <a href={`${partner?.url}`} target="_blank" rel="noreferrer">
                              <div style={{marginBottom:30,padding:'2em',borderRadius:5,boxShadow:'0 0 8px 0'}}>
                                <Image priority={true} src={partner.image} className={styles.logo_container} alt={partner.name} width={100} height={100} objectFit="contain" />
                                {/* <img src={image} className={styles.logo} alt="..1partnerimg" /> */}
                                <h2 style={{fontSize:'1.5em'}}>{partner.name}</h2>
                              </div>
                            </a>
                          </>
                        ))
                      }
                    </div>

                    {/* </Carousel> */}
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

                    {/* {details.error && (
              <Alert className="m-0" color="danger">
                {details.error}
              </Alert>
            )}
            <div className={styles.container_right}>
              <div className={styles.overly}>
                <img
                  src="/Assets/logo-white.svg"
                  className="img img-fluid mb-3"
                  className={styles.upLogo}
                />
                <h2>Our Contact Details</h2>
                <div className={styles.details_container}>
                  <img src="/Assets/location.svg" className="img img-fluid" />
                  <h6>Location</h6>
                  <p>{det && det.location}</p>
                </div>
                <div className={styles.details_container}>
                  <div className={styles.inner_container}>
                    <div className={styles.details_container}>
                      <a href={`tel:+1${det && det.phoneNumber}`}>
                        <img
                          src="/Assets/phone.svg"
                          className={`${styles.phone} img img-fluid`}
                        />
                        <h6>Phone</h6>
                        <p>+1{det && det.phoneNumber}</p>
                      </a>
                    </div>
                    <div className={styles.details_container}>
                      <a href={`https://wa.me/1${det && det.whatsapp}`}>
                        <img
                          src="/Assets/whatsapp.svg"
                          className={`${styles.phone} img img-fluid`}
                        />
                        <h6>Whatsapp</h6>
                        <p>+1{det && det.whatsapp}</p>
                      </a>
                    </div>
                    <div className={styles.details_container}>
                      <a href={`skype:+1${det && det.skype}-?chat`}>
                        <img
                          src="/Assets/skype.svg"
                          className={`${styles.phone} img img-fluid`}
                        />
                        <h6>Skype</h6>
                        <p>+1{det && det.skype}</p>
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.details_container}>
                <a href={`mailto:${det && det.email}`}>
                  <img src="/Assets/email.svg" className="img img-fluid" width="25px" />
                  <h6>Support</h6>
                  <p>{det && det.email}</p>
                  </a>
                </div>
              </div>
            </div> */}
                  </Col>
                  <Col xs={11} md={6} className="add_overflow" style={{ margin: "auto" }}>
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
                      <Card className={`${styles.cardPayment}`}>

                        <div className="form-group icon">
                          <label
                            htmlFor="exampleInputPassword1"
                            className={styles.label}
                          >
                            Email
                          </label>
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="@"
                            className={`${styles.input} bg-light inside form-control`}
                          />
                        </div>

                        <div className="form-group">
                          <label className={styles.label} htmlFor="exampleInputEmail1">
                            Phone
                          </label>
                          <input
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            type="number"
                            placeholder="+1"
                            className={`${styles.input} form-control inside bg-light`}
                          />
                        </div>
                        <div className="form-group">
                          <label className={styles.label} htmlFor="exampleInputEmail1">
                            Message
                          </label>
                          <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={`${styles.input} form-control inside bg-light`}
                            placeholder="type a message..."
                            id="w3review"
                            name="w3review"
                            rows="4"
                            cols="50"
                          ></textarea>
                        </div>

                        <Row>
                          <Col xs="12">
                            <Button
                              onClick={submitHandler}
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
                  {/* <div className={styles.nav_container}>
          <div className={styles.nav_inner_container}>
            <Container>
              <Row>
                <Col xs={12} md={4}>
                  <p className={styles.copyright}>
                    2013 - 2020 All Rights Reserved © AAdmirals Group,INC
                  </p>
                </Col>
                <Col xs={12} md={4}>
                  <div className={styles.contact_container}>
                    <a onClick={()=>{Router.push("/")}}>Home</a>
                    <a onClick={()=>{Router.push("/login")}}>Login</a>
                    <a onClick={()=>{Router.push("/FAQ")}}>FAQs</a>
                    <a onClick={()=>{Router.push("/about-us")}}>About</a>
                    <a onClick={()=>{Router.push("/fleet")}}>fleet</a>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <a href="https://www.facebook.com/AAdmirals">
                    <img
                      src="/Assets/facebook.svg"
                      className={`${styles.icon} img img-fluid`}
                    />
                  </a>
                  <a href="https://twitter.com/AAdmiralsTravel">
                    <img
                      src="/Assets/twitter.svg"
                      className={`${styles.icon} img img-fluid`}
                    />
                  </a>
                  <a href="https://wa.me/13468574294">
                    <img
                      src="/Assets/whatsapp-footer.svg"
                      className={`${styles.icon} img img-fluid`}
                    />
                  </a>
                  <a href="https://www.linkedin.com/company/aadmirals-group-inc">
                    <img
                      src="/Assets/linkedin.svg"
                      className={`${styles.icon} img img-fluid`}
                    />
                  </a>
                  <a href="https://www.yelp.com/biz/aadmirals-travel-and-transportation-houston-2">
                    <img
                      src="/Assets/shop.svg"
                      className={`${styles.icon} img img-fluid`}
                    />
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </div> */}
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
        </>
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
  let data = respo.data.modifiedResponse
  let data1 = {
    loading: false,
    error: null,
    home_page: data,
  }
  return { props: { data1 } }
}

export default Home;