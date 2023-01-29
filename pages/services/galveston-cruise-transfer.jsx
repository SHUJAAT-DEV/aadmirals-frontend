/* eslint-disable react/jsx-no-duplicate-props */
import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "reactstrap";
import styles from "./GalvestonCruisesTransportation.module.scss";
import Header from "../../Components/Header/Header";
import Fleet from "../../Components/fleet/fleet";
import Askquestion from "../../Components/askquestions/askquestion";
import Footer from "../../Components/Footer/Footer";
import Cities from "../../Components/Cities/Cities";
import Hero from "../../Components/hero/hero";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import Testimonial from "../../Components/Testimonial/Testimonial";
import SideNav from "../../Components/Header/SideNav/SideNav";
import logo from "../../Assets/Group 943.png";
import HomeForm from "../../Components/Home Form/HomeForm";
import {Alert} from "reactstrap";
import Loader from "../../Components/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {getGalvestonCruisePage} from "../../redux/Services/Galveston_cruise_transportation/action";
import Head from "next/head";
import * as api from "../../api";
import {useRouter} from "next/router";
import Image from "next/image";
import {NextSeo} from "next-seo";
function GalvestonCruisesTransportation(props) {
  const router = useRouter();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGalvestonCruisePage());
  }, []);

  const cms = props.data1;
  const {galveston_cruise_page} = cms;

  const data =
    galveston_cruise_page && galveston_cruise_page.galvestonCruiseTransfer[0];
  const faqs = galveston_cruise_page && galveston_cruise_page.faqs;
  const fleet = galveston_cruise_page && galveston_cruise_page.fleet;
  const cityWeServe =
    galveston_cruise_page && galveston_cruise_page.cityWeServe;
  const testimonial =
    galveston_cruise_page && galveston_cruise_page.testimonial;
  console.log("GalvestonCruisesTransportation", data);
  return (
    <>
      <NextSeo
        title={data?.metaTitle}
        description={data?.metaDescription}
        canonical={`https://aadmirals.com${router?.pathname}`}
      />

      {cms.loading || cms.error ? (
        <Loader />
      ) : (
        <>
          <div style={{overflow: "hidden"}}>
            <SideNav />
            <Floatingbutton />
            <Header />
            {cms.error ? (
              <Alert className="m-0" color="danger">
                {cms.error}
              </Alert>
            ) : null}
            <Container className={`${styles.mainContainer} p-0`} fluid>
              <Hero
                Text={data.heroDescription}
                Title={
                  data.heroTitle ||
                  "Galveston Cruise Transfer & Shuttle | IAH/Hobby Airport to Glaveston"
                }
                img={data.heroImage}
                Form={HomeForm}
              />
            </Container>
            <Container fluid>
              <Container>
                <Row
                  className={styles.logoContainer}
                  style={{
                    marginTop: "-10px",
                    marginBottom: "20px",
                  }}>
                  <Col xs={12} xl={12} md={12} className={styles.heading1}>
                    <h3>
                      AAdmirals Travel & Transportation Houston Limo Service
                    </h3>
                    <h6>
                      A Professional Limo & Airport Transfer Serve you in
                      Harmony
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col
                    xl={6}
                    md={6}
                    xs={12}
                    lg={6}
                    className={styles.discription}>
                    <h6>TRANSPORT SERVICE</h6>
                    <span></span>
                    <h3>Galveston Cruises</h3>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: data.galvestonCruises,
                      }}></h6>
                  </Col>
                  <Col xl={6} xs={12} lg={6} className={styles.imageContainer}>
                    <Image
                      priority={true}
                      width="100"
                      src={data.galvestonCruisesImage}
                      alt="Galveston Cruises"
                      height={70}
                      layout="responsive"
                      quality={100}
                    />
                  </Col>
                </Row>

                <Row className={styles.featuresContainer}>
                  <Col xs={12} xl={4} md={12} className={styles.features}>
                    <h6>24 Hours Service</h6>
                  </Col>
                  <Col xs={12} xl={4} md={12} className={styles.features}>
                    <h6>Car Services</h6>
                  </Col>
                  <Col xs={12} xl={4} md={12} className={styles.features}>
                    <h6>Airport Transfers</h6>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} xl={12} md={12}>
                    <Image
                      priority={true}
                      width="100"
                      src={data.bannerImage}
                      alt="AAdmirals Travel & Transportation Houston Limo Service"
                      height={30}
                      layout="responsive"
                      quality={100}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col
                    xl={6}
                    xs={12}
                    lg={6}
                    className={styles.imageContainer3_1}>
                    <Image
                      priority={true}
                      width="100"
                      src={data.cruiseImage}
                      alt="Glavestone Shuttle"
                      height={70}
                      layout="responsive"
                      quality={100}
                    />
                  </Col>
                  <Col
                    xl={6}
                    xs={12}
                    lg={6}
                    style={{paddingTop: "50px", textAlign: "center"}}>
                    <h6
                      style={{
                        fontSize: "17px",
                        fontFamily: "ProximaNovaLight",
                        color: "#727070",
                        textAlign: "left",
                      }}>
                      {data.cruiseText}
                    </h6>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} xl={12} md={12}>
                    <Cities cities={cityWeServe} />
                  </Col>

                  <Col
                    xs={12}
                    xl={12}
                    md={12}
                    style={{paddingTop: "50px", textAlign: "center"}}>
                    <h4
                      style={{fontSize: "17px", fontFamily: "ProximaNovaBold"}}>
                      Cruise Terminal Transportation - Port of Houston | Port of
                      Galveston
                    </h4>
                    <h6
                      style={{
                        fontSize: "17px",
                        fontFamily: "ProximaNovaLight",
                      }}>
                      {data.cruiseTerminalTransportation}
                    </h6>
                  </Col>
                </Row>

                <Row style={{paddingTop: "100px"}}>
                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    xs={12}
                    className={styles.discription1}>
                    <h6 style={{fontSize: " 32px"}}>
                      Who are our Galveston Cruise Terminal Transportation
                      customers?
                    </h6>
                    <h6>
                      AAdmirals provide transfer services to all individuals and
                      groups cruising with Cruises out of Galveston
                    </h6>
                    <ul>
                      <li>IAH Airport, travelers</li>
                      <h6>{data.iahAirportAndTravelers}</h6>
                      <li>Hobby Airport travelers,</li>
                      <h6>{data.hobbyAirportTravelers}</h6>
                      <li>
                        Residents in the Greater Houston Area and outlying
                        regions
                      </li>
                      <h6>{data.residentsInTheGreaterHouston}</h6>
                      <li>Hotel guests in Houston or Galveston.</li>
                      <h6>{data.hotelGuestsInHoustonOrGalveston}</h6>
                      <li>
                        Transportation from Houston Airports to Cruise Terminals
                        include:
                      </li>
                      {data.transportationFromHouston}
                      <li>
                        LOWEST PRIVATE CRUISE TRANSFER FARES WITH HIGH QUALITY
                        SERVICE
                      </li>
                      <h6>{data.lowestPrivateCruise}</h6>
                    </ul>
                  </Col>

                  <Col xl={6} lg={6} xs={12} className={styles.imageContainer1}>
                    <Image
                      priority={true}
                      width="500"
                      src={data.imageOne}
                      alt="IAH Airport to Galveston"
                      height={300}
                      quality={100}
                      objectFit="cover"
                    />
                    <br />
                    <Image
                      priority={true}
                      width="500"
                      src={data.imageTwo}
                      alt="Galveston Cruises"
                      height={300}
                      quality={100}
                      objectFit="cover"
                    />
                    <br />
                    <Image
                      priority={true}
                      width="500"
                      src={data.imageThree}
                      alt="Galveston Cruises"
                      height={300}
                      quality={100}
                      objectFit="cover"
                    />
                  </Col>
                </Row>

                <Row style={{textAlign: "center"}}>
                  <Col
                    xs={12}
                    xl={12}
                    md={12}
                    style={{width: "90%", borderBottom: ""}}></Col>
                </Row>
              </Container>
            </Container>
            <Fleet fleet={fleet} />
            <Testimonial testimonials={testimonial} />
            <Askquestion faqs={faqs} />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
export async function getStaticProps({query}) {
  const res = await api.fetchGalvestonCruisePage();
  let data = res.data.modifiedResponse;
  let data1 = {
    loading: false,
    error: null,
    galveston_cruise_page: data,
  };
  return {props: {data1}};
}
export default GalvestonCruisesTransportation;
