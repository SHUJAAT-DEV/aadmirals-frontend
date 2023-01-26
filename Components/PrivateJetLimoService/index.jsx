import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./PrivateJetLimoService.module.scss";
import Header from "../Header/Header";
import Fleet from "../fleet/fleet";
import Askquestion from "../askquestions/askquestion";
import HomeForm from "../Home Form/HomeForm";
import Footer from "../Footer/Footer";
import Floatingbutton from "../floaingbutton/floatingbutton";
import Hero from "../hero/hero";
import SideNav from "../Header/SideNav/SideNav";
import logo from "../../Assets/Group 943.png";
import Testinmonial from "../Testimonial/Testimonial";
import { Alert } from "reactstrap";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getPrivateJetPage } from "../../redux/Services/Houston_Airport/Private_jet/action";
import Head from "next/head";
import Image from "next/image";
function PrivateJetLimoService(props) {
  const dispatch = useDispatch();

  // const cms = useSelector((state) => state.privateJet);
  // const { private_jet_page } = cms;

  // const data =
  //   private_jet_page && private_jet_page.privateAviationAndRegional[0];
  // const faqs = private_jet_page && private_jet_page.faqs;
  // const fleet = private_jet_page && private_jet_page.fleet;
  // const testimonial = private_jet_page && private_jet_page.testimonial;

  useEffect(() => {
    dispatch(getPrivateJetPage());
  }, []);
  const cms = props.data1;
  const { private_jet_page } = cms;

  const data =
    private_jet_page && private_jet_page.privateAviationAndRegional[0];
  const faqs = private_jet_page && private_jet_page.faqs;
  const fleet = private_jet_page && private_jet_page.fleet;
  const testimonial = private_jet_page && private_jet_page.testimonial;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{data?.metaTitle}</title>
        <meta name="description" content={data?.metaDescription} />
      </Head>
      {cms.loading || cms.error ? (
        <Loader />
      ) : (
        <>
          <SideNav />
          <Floatingbutton />
          <Header />
          {cms.error ? (
            <Alert className="m-0" color="danger">
              {cms.error}
            </Alert>
          ) : null}
          <div className={styles.mainContainer} fluid>
            <Hero
              Text={data.heroDescription}
              Title={data.heroTitle}
              img={data.heroImage}
              Form={HomeForm}
            />
          </div>
          <Container fluid >
            <Container>
              <center>
                <Row className={styles.logoContainer}>
                  <Col xs={12} xl={12} md={12} className={styles.heading1}>
                    <h3>
                      AAdmirals Travel & Transportation Houston Limo Service
                    </h3>
                    <h6>
                      A Professional Limo & Airport Transfer Serve you in Harmony
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col className={styles.discription}>
                    <h1>Regional Aviation Airport Transfer</h1>
                  </Col>
                </Row>

                <Row style={{ marginTop: "30px", marginBottom: "25px" }}>
                  <Col xl={6} xs={12}>
                    <Image
                      width="100"
                      src={data.regionalAviationAirportTransferImage}
                      alt="Regional Aviation Airport Transfer"
                      height={50}
                      layout='responsive'
                      quality={100}
                    />
                  </Col>
                  <Col xl={6} md={6} xs={12} className={styles.discription}
                    style={{
                      textAlign: "left"
                    }}
                  >
                    <h6>{data.regionalAviationAirportTransfer}</h6>
                  </Col>

                </Row>

              </center>
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

              <Row style={{ marginTop: "30px", marginBottom: "25px" }}>
                <Col xl={6} md={6} xs={12} className={styles.discription}
                  style={{
                    textAlign: "left"
                  }}
                >
                  <h6
                    style={{
                      fontSize: "17px",
                      fontFamily: "ProximaNovaLight",
                      color: "#727070",
                    }}
                  >
                    {data.bannerText}
                  </h6>
                </Col>
                <Col xl={6} xs={12}>
                  <Image
                    width="100"
                    src={data.bannerImage}
                    alt="Regional Aviation Airport Transfer"
                    height={50}
                    layout='responsive'
                    quality={100}
                  />
                </Col>
              </Row>

              <Row>
                <Col
                  xs={12}
                  xl={12}
                  md={12}
                  style={{ paddingTop: "50px", textAlign: "center" }}
                >
                  <h4
                    style={{
                      fontSize: "28px",
                      fontFamily: "ProximaNovaBold",
                      padding: "40px 0",
                    }}
                  >
                    We Offer A Fleet Of Top-Tier Vehicles To Choose From
                  </h4>
                  <h6
                    style={{
                      fontSize: "17px",
                      fontFamily: "ProximaNovaLight",
                      color: "#727070",
                    }}
                  >
                    {data.weOfferAFleet}
                  </h6>
                  <h4
                    style={{ fontSize: "17px", fontFamily: "ProximaNovaBold" }}
                  >
                    Our Chauffeurs Will Meet You At The Private Aviation As You
                    Arrive.
                  </h4>

                  <h6
                    style={{
                      fontSize: "17px",
                      fontFamily: "ProximaNovaLight",
                      color: "#727070",
                    }}
                  >
                    {data.ourChauffeursWillMeetYou}
                  </h6>
                </Col>
              </Row>

            </Container>
          </Container>
          <Fleet fleet={fleet} />
          <Container fluid>
            <Container>
              <Row style={{ paddingTop: "100px" }}>
                <Col xl={12} md={12} xs={12} className={styles.discription1}>
                  <ul>
                    <li>Private Aviation Limousine service</li>
                    <h6>{data.privateAviationLimousineService}</h6>
                    <li>First Class Terminal</li>
                    <h6>{data.firstClassTerminal}</h6>
                    <li>First Class Booking</li>
                    <h6>{data.firstClassBooking}</h6>
                    <li>Reliability, Punctuality, and Comfort…</li>
                    <h6>{data.reliabilityPunctualityComfort}</h6>
                    <li>Private Jet Chapter Flights</li>
                    <h6>{data.privateJetChapterFlights}</h6>
                  </ul>
                </Col>
              </Row>
              <Row style={{ paddingTop: "100px" }}>
                <Col xl={12} md={12} xs={12} className={styles.discription1}>
                  <ul>
                    <li style={{ color: "#EE405E", fontSize: "22px" }}>
                      Top Private Aviations within Houston Greater Area
                    </li>
                    <li>
                      Atlantic Aviation Hobby Airport, Atlantic Aviation IAH
                      Airport
                    </li>
                    <h6>{data.atlanticAviationHobbyAirport}</h6>
                    <li>Million Air Hobby Airport</li>
                    <h6>{data.millionAirHobbyAirport}</h6>
                    <li>Wilson Air Center Houston</li>
                    <h6>{data.wilsonAirCenterHouston}</h6>
                    <li>Sugar Land Regional Airport</li>
                    <h6>{data.sugarlandRegionalAirport}</h6>
                    <li>Signature Flight Support</li>
                    <h6>{data.signatureFlightSupport}</h6>
                    <li>David Wayne Hooks Memorial Airport</li>
                    <h6>{data.davidWayneHooksMemorialAirport}</h6>
                    <li>Houston Executive Airport</li>
                    <h6>{data.houstonExecutiveAirport}</h6>
                    <li>Texas Gulf Coast Regional Airport</li>
                    <h6>{data.texasGulfCoastRegionalAirport}</h6>
                    <li>Baytown Airport</li>
                    <h6>{data.baytownAirport}</h6>
                  </ul>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row style={{ paddingTop: "100px" }}>
                <Col xl={12} md={12} xs={12} className={styles.discription2}>
                  <center>
                    <h4>AAdmirals for Private Aviation Houston Limo Service</h4>

                    <Image priority={true}
                      width="100"
                      src={data.aadmiralsPrivateImage}
                      alt="AAdmirals for Private Aviation Houston Limo Service"
                      height={50}
                      layout='responsive'

                      objectFit="contain"
                      quality={100}
                    />

                  </center>
                  <h6>{data.aadmiralsPrivateImageText}</h6>
                </Col>
              </Row>
            </Container>
            <Row className={styles.container1}>
              <Col xs={12} md={12} xl={12} className={styles.contact}>
                <h6>
                  Or Call us on <span> +1 346-857-4294 / 800-994-5078</span>
                </h6>
              </Col>
            </Row>
          </Container>
          <Testinmonial testimonials={testimonial} />
          <Askquestion faqs={faqs} />
          <Footer />
        </>
      )}
    </>
  );
}

export default PrivateJetLimoService;
