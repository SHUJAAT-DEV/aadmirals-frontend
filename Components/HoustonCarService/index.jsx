import React, { useState, useEffect } from "react";
import styles from "./HoustonCarService.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Col, Container, Row } from "reactstrap";
import Limo from "../limo/limo";
import AskQuestion from "../askquestions/askquestion";
import BestService from "../besttransporationservice/service";
import ImageSection from "../imagesection/imagesectin";
import Bookandpay from "../bokandpay/bookandpay";
import Imagetitle from "../imagetitle/imagesectin";
import PersonalService from "../personalcarservices/service";
import Testmonial from "../Testimonial/Testimonial";
import Floatingbutton from "../floaingbutton/floatingbutton";
import Hero from "../hero/hero";
import SideNav from "../Header/SideNav/SideNav";
import HomeForm from "../Home Form/HomeForm";
import Loader from "../Loader/Loader";
import { getHoustonLimoPage } from "../../redux/Cities/Hounston_Limo_Service/action";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";
import { Helmet } from "react-helmet";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";

const Houstoncarservice = (props) => {
  const router = useRouter();
  const [load, setLoad] = useState(false);

  const dispatch = useDispatch();

  // const cms = useSelector((state) => state.houstonLimo);
  // const { houston_limo_page } = cms;

  // const data = houston_limo_page && houston_limo_page.houstanLimoService[0];
  // const faqs = cms.houston_limo_page && cms.houston_limo_page.faqs;

  useEffect(() => {
    dispatch(getHoustonLimoPage());
  }, []);

  const cms = props.data1;
  const { houston_limo_page } = cms;

  const data = houston_limo_page && houston_limo_page?.houstanLimoService[0];
  const faqs = cms.houston_limo_page && cms.houston_limo_page.faqs;

  return (
    <>
      <NextSeo
        title={data?.metaTitle}
        description={data?.metaDescription}
        canonical={`https://aadmirals.com/cities/${props?.slug}`}
      />
      {cms.loading || cms.error ? (
        <Loader />
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

            <div className={styles.mainContainer}>
              <Hero
                Text={data.heroDescription}
                Title={"Houston Limo Car Service & Airport Transfer"}
                img={data.heroImage}
                Form={HomeForm}
              />
            </div>
            <Container>
              <Row>
                <Col xs={12}>
                  <div className={styles.aligncenter}>
                    <p className={styles.headtext}>
                      We Are The Most Popular Leading Limousine And
                      Transportation Service In The Houston Greater Area.
                    </p>
                  </div>
                </Col>
              </Row>
              <Limo
                bannerImage={data.bannerImage}
                title={"Car to Airport Houston"}
              />

              <BestService text1={data?.paragraph} pageTitle={data.heroTitle} />

              <div className={styles.aligncontent}>
                <p className={styles.text}>
                  %10 off on all your transfer services when you complete 15
                  reservations with AAdmirals Houston Limo Service. %15 off on
                  your next Airport transfer service when you complete 5 Airport
                  transfers or any transfer service with AAdmirals. %7 off on
                  your next Airport Transfer when you rate and review AAdmirals
                  Travel& Transportation on one of Google, Yelp or Tripadvisor.
                  Get $5 off your next reservation when you refer AAdmirals
                  Travel& Transportation to a friend, a family member or when
                  you provide AAdmirals with an email of a friend or a family
                  member, even more
                  <span className={styles.textdark}>
                    {" "}
                    our online quotes and reservation system already includes a
                    5% discounted price, so book online to save money with
                    AAdmirals Travel& Transportation, Houston Limo Service.{" "}
                  </span>
                </p>
              </div>
              <ImageSection
                alt1="Car from Houston Airport"
                alt2="Limo Service Houston"
                alt3="Houston Limo Services"
                alt4="Airport Limo Service Houston"
                alt5="Limo Service in Houston"
                alt6="Best Limo Service in Houston"
                img1={data?.imageOne}
                img2={data?.imageTwo}
                img3={data?.imageThree}
                img4={data?.imageFour}
                img5={data?.imageFive}
                img6={data?.imageSix}
              />
              <div className={styles.aligncontent}>
                <p className={styles.text}>
                  AAdmirals Travel& Transportation Houston Limo Service offers
                  ground transportation services, including Airport Transfer,
                  Airport Private Shuttle, Galveston Cruise Transfer, Social
                  Events Transfer, Business Conventions Transfer, Celebrations
                  Transfer, City To City Transfer and By The Hour Car Service,
                  AAdmirals Houston Limo Service delivers ground transportation
                  services to Individuals, Groups and Corporations.
                </p>
              </div>
              <Bookandpay
                youCanGetASuperiorRide={data?.youCanGetASuperiorRide}
              />
              <Imagetitle />
              <br />
              <div className={styles.aligncontent}>
                <p className={styles.text1}>
                  Aadmirals houston limo service is the finest luxury car
                  service which provides what you need when you need it,
                  conveniently.
                </p>
              </div>

              <PersonalService
                airportTransfers={data.airportTransfers}
                airportTransfersImage={data.airportTransfersImage}
                carporateTransportation={data.carporateTransportation}
                professionalCarServices={data.professionalCarServices}
              />

              <AskQuestion faqs={faqs} />
            </Container>

            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Houstoncarservice;
