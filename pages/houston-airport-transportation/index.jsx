import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../../Components/Header/Header";
import styles from "../home.module.scss";
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
import { Alert } from "reactstrap";
import Loader from "../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getGalvestonCruisePage } from "../../redux/Services/Galveston_cruise_transportation/action";
import Head from "next/head";
import * as api from "../../api";
import axios from "axios";
import { URL } from "../../config/serverUrl";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Testinmonial from "../../Components/Testimonial/Testimonial";
import sanitizeHTML from "../../Components/hero/SanitizedReactUtils";

function AirportTransportationHouston(props) {
  
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getGalvestonCruisePage())
  }, []);
  const cms = props.data1;
  //s
  const { houstonAirportTransportation } = cms;

  const data =
    houstonAirportTransportation &&
    houstonAirportTransportation.houstonAirportTransportation[0];
  const faqs =
    houstonAirportTransportation && houstonAirportTransportation.faqs;
  const fleet =
    houstonAirportTransportation && houstonAirportTransportation.fleet;
  //   const cityWeServe = houstonAirportTransportation && houstonAirportTransportation.cityWeServe
  const testimonial =
    houstonAirportTransportation && houstonAirportTransportation.testimonial;

  const rawMarkup = (data) => {
    var rawMarkup = data;
    return { __html: rawMarkup };
  };
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://aadmirals.com${router.pathname}`}
        />
        <meta charSet="utf-8" />
        <title>{data?.metaTitle}</title>
        <meta name="description" content={data?.metaDescription} />
      </Head>
      <SideNav />
      <Floatingbutton />
      <Header />

      <div className={styles.mainContainer} fluid id="#bookingForm">
        <Hero
          Text={data.ShortDescriptionBanner}
          Title={"Houston Airport Transportation & Shuttle Service"}
          img={data.bannerImage}
          Form={HomeForm}
        />
      </div>

      <div className="container mt-3 mb-3">
        {houstonAirportTransportation.houstonAirportTransportation.map(
          (data, key) => {
            
            let sanitizedContent1 = sanitizeHTML(data.DescriptionAfterBanner);
            let sanitizedContent2 = sanitizeHTML(data.DescriptionAfterBannerafterImage);
            let sanitizedContent3 = sanitizeHTML(data.DescriptionAfterAannerAfterImage2nd);
            let sanitizedContent4 = sanitizeHTML(data.DescriptionAfterBannerAfterImage3rd);

            console.log('sanitizedContent1 ', sanitizedContent2);

            return (
              <div className="row" key={key}>
                <div className="col-12">

                  {<p>{ReactHtmlParser(sanitizedContent1)}</p>}

                  <Image
                    priority={true}
                    src={data.ImageAfterBanner1st}
                    className="w-100 mb-4 mt-4"
                    alt="Airport Transportation Houston"
                    width={1200}
                    layout="responsive"
                    height={500}
                    quality={100}
                  />
                  {
                    <p>
                      {ReactHtmlParser(sanitizedContent2)}
                    </p>
                  }
                  <Image
                    priority={true}
                    src={data.ImageAfterBanner2nd}
                    className="w-100 mb-4 mt-4"
                    alt="AAdmirals Airport Transportation Houston"
                    width={1200}
                    layout="responsive"
                    height={400}
                    quality={100}
                  />
                  {
                    <p>
                      {ReactHtmlParser(
                        sanitizedContent3
                      )}
                    </p>
                  }

                  <Image
                    priority={true}
                    src={data.ImageAfterBanner3rd}
                    className="w-100 mb-4 mt-4"
                    alt="663"
                    width={1200}
                    layout="responsive"
                    height={400}
                    quality={100}
                  />
                  {
                    <p>
                      {ReactHtmlParser(
                        sanitizedContent4
                      )}
                    </p>
                  }
                  {/* <img src={data.ImageAfterBanner4th} className='w-100 mb-4 mt-4' alt="664" />
                { <p>{ ReactHtmlParser ( data.DescriptionAfterBannerAfterImage4th  ) }</p>}                         */}
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="container services-links mb-4">
        <h3>Services</h3>
        <div>
          {data.dropdown.map((data1, key) => {
            return (
              <li key={key}>
                <Link href={data1.url}>
                  <a>{data1.name}</a>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
      <div className="container">
        <div className="row">
          {fleet.map((data, key) => {
            return (
              <div className="col-3 carCardContainer" key={key}>
                <div className="imageCardContainer">
                  <Image
                    priority={true}
                    src={data.image}
                    className="w-100 rounded bordered"
                    alt={data?.name}
                    quality={100}
                    width={500}
                    height={600}
                    objectFit="cover"
                  />
                </div>
                <h6>{data.name}</h6>
                <p>{data.description && data.description.substring(0, 20)}</p>
              </div>
            );
          })}
        </div>
      </div>

      <Testinmonial testimonials={testimonial} />

      <Askquestion faqs={faqs} />

      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}
export async function getStaticProps({ query }) {
  let res2 = await axios.get(
    `${URL}/website-content/airport-transportation-houston`
  );
  //
  let data2 = res2.data.modifiedResponse;
  let data1 = {
    loading: false,
    error: null,
    houstonAirportTransportation: data2,
  };
  return { props: { data1 } };
}
export default AirportTransportationHouston;
