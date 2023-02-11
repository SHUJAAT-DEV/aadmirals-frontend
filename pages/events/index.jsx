import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "reactstrap";
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
import {Alert} from "reactstrap";
import Loader from "../../Components/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {getGalvestonCruisePage} from "../../redux/Services/Galveston_cruise_transportation/action";
import Head from "next/head";
import * as api from "../../api";
import axios from "axios";
import {URL} from "../../config/serverUrl";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import {useRouter} from "next/router";

import {NextSeo} from "next-seo";

import Testinmonial from "../../Components/Testimonial/Testimonial";

function Events(props) {
  const router = useRouter();

  const dispatch = useDispatch();

  // const cms = useSelector(state => state.galvestonCruise)
  // const { galveston_cruise_page } = cms

  // const data = galveston_cruise_page && galveston_cruise_page.galvestonCruiseTransfer[0]
  // const faqs = galveston_cruise_page && galveston_cruise_page.faqs
  // const fleet = galveston_cruise_page && galveston_cruise_page.fleet
  // const cityWeServe = galveston_cruise_page && galveston_cruise_page.cityWeServe
  // const testimonial = galveston_cruise_page && galveston_cruise_page.testimonial

  useEffect(() => {
    // dispatch(getGalvestonCruisePage())
  }, []);
  const cms = props.data1;
  //
  const {eventsTransfer} = cms;

  const data = eventsTransfer && eventsTransfer.eventsTransfer[0];
  const faqs = eventsTransfer && eventsTransfer.faqs;
  const fleet = eventsTransfer && eventsTransfer.fleet;
  //   const cityWeServe = houstonAirportTransportation && houstonAirportTransportation.cityWeServe
  const testimonial = eventsTransfer && eventsTransfer.testimonial;
  //

  const rawMarkup = (data) => {
    var rawMarkup = data;
    return {__html: rawMarkup};
  };
  return (
    <>
      <NextSeo
        title={data?.metaTitle}
        description={data?.metaDescription}
        canonical={`https://aadmirals.com${router?.pathname}`}
      />

      <SideNav />
      <Floatingbutton />
      <Header />

      <div className={styles.mainContainer} fluid id="#bookingForm">
        <Hero
          Text={""}
          Title={data.Description1}
          img={data.Image1}
          Form={HomeForm}
        />
      </div>

      <div className="container mt-3 mb-3">
        {eventsTransfer.eventsTransfer.map((data, key) => {
          return (
            <div className="row" key={key}>
              <div className="col-12">
                {<p>{ReactHtmlParser(data.Description2)}</p>}
                <img src={data.Image2} className="w-100 mb-4 mt-4" alt="" />
                <img src={data.Image21} className="w-100 mb-4 mt-4" alt="" />
                <img src={data.Image3} className="w-100 mb-4 mt-4" alt="" />
                {<p>{ReactHtmlParser(data.Description3)}</p>}
                <img src={data.Image4} className="w-100 mb-4 mt-4" alt="" />
                {<p>{ReactHtmlParser(data.Description4)}</p>}
                <img src={data.Image5} className="w-100 mb-4 mt-4" alt="" />
                <img src={data.Image51} className="w-100 mb-4 mt-4" alt="" />
                {<p>{ReactHtmlParser(data.Description5)}</p>}
              </div>
            </div>
          );
        })}
      </div>
      <div className="container services-links mb-4">
        <h3>Services</h3>
        <div>
          {data.dropdown.map((data, key) => {
            return (
              <li key={key}>
                <Link href={data.url} key={key}>
                  <a>{data.name}</a>
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
                  <img
                    src={data.image}
                    className="w-100 rounded bordered"
                    alt=""
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
export async function getStaticProps({query}) {
  let res2 = await axios.get(`${URL}/website-content/events-transfer`);
  //
  let data2 = res2.data.modifiedResponse;
  let data1 = {
    loading: false,
    error: null,
    eventsTransfer: data2,
  };
  return {props: {data1}};
}
export default Events;
