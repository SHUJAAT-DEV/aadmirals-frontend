import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./Wedding.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import pic from "../../Assets/Rectangle 187.png";
import HomeForm from "../../Components/Home Form/HomeForm";
import pic1 from "../../Assets/Rectangle 187.png";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import Hero from "../../Components/hero/hero";
import SideNav from "../../Components/Header/SideNav/SideNav";
import pic2 from "../../Assets/Rectangle 184.jpg";
import { useRouter } from 'next/router'
import Head from "next/head"

const  Wedding = () => {
  const router = useRouter()

  return (
    <>
      <Head>
    <link rel="canonical" href={`https://aadmirals.com${router.pathname}`} />
    </Head>
      <SideNav />
      <Floatingbutton />
      <Header />
      <div className={styles.mainContainer} fluid>
        <Hero
          Text="Houston Wedding"
          Thin="Limo Services"
          MotoHidden={true}
          Form={HomeForm}
        />
      </div>
      <Container>
        <center>
          <Row>
            <Col xs={12} md={12} xl={12} className="py-5">
              <h1 className="pt-5">Houston Wedding Limo Service</h1>
            </Col>
            <Col xs={12} md={12} xl={12}>
              <img src={pic} width="100%" alt="car" />
            </Col>
            <Col xs={12} md={12} xl={12} className="py-5">
              <h6 style={{ fontFamily: "ProximaNovaLight" }}>
                The stress of planning for a wedding can take a toll on the
                bride, the groom, the wedding party, and the family. Remove some
                of this worry by hiring AAdmirals Travel& Transportation to meet
                your wedding Limo needs. Houston Wedding Limos By AAdmirals
                Travel& Transportation will make your wedding transportation
                smooth, happy and make your wedding day the best memorable day
                in your life. Book your wedding limo transfer with AAdmirals
                Travel& Transportation and get out of stress about your wedding
                day transportation, because our chauffeurs are experienced with
                Houston greater area roads and streets, churches and hotels, our
                chauffeurs are capable of offering the best limousine services
                and transportation in Houston. Our fleet includes the newest
                model of luxurious Limousines and well maintained vehicles to
                transfer you and your guests to the church or hotel relaxed and
                in complete comfort! In a few words We have all your wedding
                transportation needs, professional Chauffeurs and Vehicles that
                meet your needs at affordable rates.
              </h6>
            </Col>
            <Col xs={12} md={12} xl={12}>
              <img src={pic1} width="100%" alt="pic1" />
            </Col>
            <Col
              xs={12}
              md={12}
              xl={12}
              className="py-4"
              style={{ textAlign: "left" }}
            >
              <h6 style={{ fontFamily: "ProximaNovaBold", fontSize: "18px" }}>
                Each couple has their own plan for their wedding day, but in the
                few lines below we give you lights about some wedding styles and
                suggested cars that meet your needs for each style. we are happy
                to serve your wedding transportation based on your own plan:-
              </h6>
            </Col>
          </Row>
        </center>
        <Row className="pb-5">
          <Col xs={12} md={5} xl={5} className={styles.paragraphContainer}>
            <p>
              <span className={styles.lists}>
                A classic or traditional wedding,
              </span>{" "}
              Markers of such a wedding, typically, include the couple marrying
              in a church and family members and friends,as well as formal
              celebrations following the ceremony, in such wedding style you
              will be in need of a Luxury Sedan limo such as a Mercedes Benz or
              a Cadillac Sedan car or you may like to to go in a stretch limo
              car to transfer you to the church then to the hotel for your
              party, in addition you will need another vehicle to transfer your
              guests from a certain location to the church then to the hotel for
              the party as well,the type of this vehicle depends on the number
              of guests, you might need more than one vehicle, one of the best
              limo vehicles for your guests transfer is the luxury executive VAN
              fit for 14 passengers.
            </p>
          </Col>
          <Col xs={12} md={5} xl={5} xl={{ offset: 1 }}>
            <img src={pic2} width="100%" alt="pic2" />
          </Col>
        </Row>
        <Row className="pb-5">
          <Col xs={12} md={5} xl={5} className={styles.paragraphContainer}>
            <p>
              <span className={styles.lists}>Fancy Wedding Day,</span> Wedding
              ceremony might be held outdoors and indoors, for sure this is a
              memorable wedding day and of course the most visual celebration of
              the beautiful and the most expensive wedding style as well, such
              style normally includes more than one event and several locations
              to stop by, starting from small party dressing of both The bride
              and The groom, going to some favorite sites for photos with
              friends, party lunch, going to the church, then go to the hotel
              for the big party ending at a late time. For this wedding style
              AAdmirals Travel& Transportation need to be in direct touch to
              organize the perfect transportation service to cover all your
              wedding day and night transportation needs in style based on your
              plan and number of guests.
            </p>
          </Col>
          <Col xs={12} md={5} xl={5} xl={{ offset: 1 }}>
            <img src={pic2} width="100%" alt="pic2" />
          </Col>
        </Row>
        <Row className="pb-5">
          <Col xs={12} md={5} xl={5} className={styles.paragraphContainer}>
            <p>
              <span className={styles.lists}>Romantic & Economy,</span> n such
              style, The bride and The groom plan to spend a few hours
              celebrating with their family members and friends at a hotel, or a
              restaurant dancing and taking photos then go to spend the night at
              one of the hotels they like. the transportation needs are limited
              in this style, normally The bride and The groom need to be picked
              up after the wedding night to drop them off at the hotel, then in
              the next morning they need to be picked up taken to their house.
              In this style they will need a luxury Sedan, SUV or maybe a
              stretch limo for the transfer.
            </p>
            <p>
              So, Do your own wedding plans and call AAdmirals Travel&
              Transportation Houston Limo Service and provide us with your
              wedding schedule and we will take care of the rest.
            </p>
          </Col>
          <Col xs={12} md={5} xl={5} xl={{ offset: 1 }}>
            <img src={pic2} alt="pic2" width="100%" />
          </Col>
        </Row>
        <Row className="pb-5 pt-1">
          <Col xs={12} md={12} xl={12} style={{ textAlign: "center" }}>
            <h3 style={{ fontFamily: "ProximaNovaBold", fontSize: "44px" }}>
              Why Choose AAdmirals for Your Wedding?
            </h3>
          </Col>
          <Col xs={12} md={12} xl={12}>
            <ul>
              <li className={`${styles.list} py-3`}>
                Top notch limos to choose from, a variety of limos to match your
                style, and to accommodate the size of your wedding party,
                contact us to assist you in planning out how many vehicles you
                will need and what type of cars can make your wedding day go
                smooth and in style, and how many hours you may need the
                service.
              </li>
              <li className={`${styles.list} py-3`}>
                Luxury Sedans, SUVs, VANs and stretch limos, all meet perfect
                wedding day requirements for getting your out of town family and
                friends to and from the venues.
              </li>
              <li className={`${styles.list} py-3`}>
                Professional and friendly Chauffeurs are knowledgeable of the
                Houston greater area and with planned routes, just give us your
                program details and focus on your wedding day.
              </li>
              <li className={`${styles.list} py-3`}>
                On Time at the location where you need us.
              </li>
              <li className={`${styles.list} py-3`}>
                Text Updates without stress.
              </li>
              <li className={`${styles.list} py-3`}>
                We Text And Email confirmation and receipts.
              </li>
              <li className={`${styles.list} py-3`}>
                Flexibility for last minute change based on your request.
              </li>
              <li className={`${styles.list} py-3`}>
                Online free Quote, online reservation and secure online payment.
              </li>
              <li className={`${styles.list} py-3`}>
                We offer canned coke and sprite, bottled cold water and Ice as a
                complete package.
              </li>
              <p style={{ fontFamily: "ProximaNovaBold" }}>
                ‘Just Married’ sign and red carpet service. At AAdmirals, we aim
                to make your Wedding day Memorable!
              </p>
            </ul>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Wedding;
