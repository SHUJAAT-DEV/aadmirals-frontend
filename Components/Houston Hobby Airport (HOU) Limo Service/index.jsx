import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./HoustonHobbyAirport.module.scss";
import Header from "../Header/Header";
import Fleet from "../fleet/fleet";
import Askquestion from "../askquestions/askquestion";
import HowitWorksHoustonHobbyAirport from "../How it Works Houston Hobby Airport/HowitWorksHoustonHobbyAirport";
import Footer from "../Footer/Footer";
import Floatingbutton from '../floaingbutton/floatingbutton'
import Hero from '../hero/hero'
import SideNav from "../Header/SideNav/SideNav";
import PopularLocations from "../Popular Locations/PopularLocations";
import HomeForm from "../Home Form/HomeForm";

import Testinmonial from "../Testimonial/Testimonial";
import { Alert } from 'reactstrap';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux'
import { getHobbyAirportPage } from '../../redux/Services/Houston_Airport/Hobby_airport/action'
import Image from "next/image";

function HoustonHobbyAirport(props) {

  const dispatch = useDispatch()

  // const cms = useSelector(state => state.hobbyAiport)
  // const { hobby_airport_page } = cms

  // const data = hobby_airport_page && hobby_airport_page.hobbyAirport[0]
  // const faqs = hobby_airport_page && hobby_airport_page.faqs
  // const fleet = hobby_airport_page && hobby_airport_page.fleet
  // const testimonial = hobby_airport_page && hobby_airport_page.testimonial

  useEffect(() => {
    dispatch(getHobbyAirportPage())
  }, [])
  const cms = props.data1
  const { hobby_airport_page } = cms

  const data = hobby_airport_page && hobby_airport_page.hobbyAirport[0]
  const faqs = hobby_airport_page && hobby_airport_page.faqs
  const fleet = hobby_airport_page && hobby_airport_page.fleet
  const testimonial = hobby_airport_page && hobby_airport_page.testimonial
  return (
    <>

      {cms.loading || cms.error ? <Loader /> : (
        <>
          <div style={{ overflow: 'hidden' }}>
            <SideNav />
            <Floatingbutton />
            <Header />
            {
              cms.error ?
                <Alert className="m-0" color="danger">
                  {cms.error}
                </Alert> : null
            }
            <div className={styles.mainContainer} fluid>
              <Hero Text={data.heroDescription} Title={'HOU Hobby Airport Car Service & Airport Shuttle'} img={data?.heroImage} Form={HomeForm} />
            </div>
            <Container fluid style={{ padding: "100px 0" }}>
              <Container>
                <Row>
                  <Col xl={6} md={6} xs={12} className={styles.discription}>
                    <h6>TRANSPORT SERVICE</h6>
                    <span></span>
                    <h3>Limousine Services In The Hobby Airport Area</h3>
                    <h6>
                      {data.limousineServicesInTheHobbyAirportArea}
                    </h6>
                  </Col>

                  <Col xl={6} xs={12} className={styles.imageContainer}>
                    <Image priority={true} src={data.transportServiceImage} alt="HOU Hobby Airport Car Service" layout="responsive" width={500} height={500} quality={100} objectFit="cover" />
                  </Col>
                </Row>
                <div className={styles.travel}>
                  <Row className={styles.logoContainer}>
                    <Col xs={12} xl={12} md={12} className={styles.heading1}>
                      <Image priority={true} src="/Assets/Group 943.png" alt="AAdmirals Travel & Transportation" width={100} height={70} objectFit="fill" priority quality={100} />
                      <h3>AAdmirals Travel & Transportation Houston Limo Service</h3>
                      <h6>
                        A Professional Limo & Airport Transfer Serve you in Harmony
                      </h6>
                    </Col>
                  </Row>
                  <Row className={styles.featuresContainer}>
                    <Col xs={12} xl={4} md={12} className={styles.features}>
                      <Image priority={true} src="/Assets/Icon awesome-clock.png" alt="clock" objectFit="contain" width={30} height={30} quality={100} />
                      <h6>24 Hours Service</h6>
                    </Col>
                    <Col xs={12} xl={4} md={12} className={styles.features}>
                      <Image priority={true} width="80" src="/Assets/13-car.png" alt="..1clock" objectFit="contain" height={30} quality={100} />
                      <h6>Car Services</h6>
                    </Col>
                    <Col xs={12} xl={4} md={12} className={styles.features}>
                      <Image priority={true} width="45" src="/Assets/Layer_5_58_.png" alt="..2clock" objectFit="contain" height={30} quality={100} />
                      <h6>All Inclusive Pricing</h6>
                    </Col>
                  </Row>
                </div>
              </Container>
              <Row>
                <Col xs={12} xl={12} md={12}>
                  <Image priority={true} width="1000" height="500" src={data.bannerImage} alt="Car Service from Hobby Airport" quality={100} layout='responsive' />
                </Col>
              </Row>
              <Row>
                <center>
                  <Col
                    xs={11}
                    xl={10}
                    md={10}
                    sm={10}
                    style={{ paddingTop: "50px", textAlign: "justify" }}
                  >
                    <h6
                      style={{
                        fontSize: "17px",
                        fontFamily: "ProximaNovaLight",
                        color: "#727070",
                        textAlign: 'justify'
                      }}
                      className={styles.HoustinHobby}
                    >
                      {data.bannerImageText} <br /> <br />

                    </h6>
                    <h6 style={{
                      fontSize: "17px",
                      fontFamily: "ProximaNovaLight",
                      color: "#727070",
                      textAlign: 'justify'
                    }}>
                      Call AADMIRLAS at{" "}
                      <span
                        style={{ fontFamily: "ProximaNovaBold", color: "#1E1E1E" }}
                      >
                        {" "}
                        +1 346-857-4294 / 800-994-5078{" "}
                      </span>
                      or Book Online to reserve your car service today!
                    </h6>
                  </Col>
                </center>
              </Row>

            </Container>

            <HowitWorksHoustonHobbyAirport payment={data.payment} booking={data.booking} selection={data.selection} />

            <Fleet fleet={fleet} />

            <PopularLocations popularLocations={data.popularLocations} popularLocationsImage={data.popularLocationsImage} hobbyAirportRates={data.hobbyAirportRates} hobbyAirportRatesImage={data.hobbyAirportRatesImage} />

            <Testinmonial testimonials={testimonial} />
            <Askquestion faqs={faqs} />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default HoustonHobbyAirport;
