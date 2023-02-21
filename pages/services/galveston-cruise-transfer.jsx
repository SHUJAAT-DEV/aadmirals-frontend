/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
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
import { Alert } from "reactstrap";
import Loader from "../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getGalvestonCruisePage } from "../../redux/Services/Galveston_cruise_transportation/action";
import Head from "next/head";
import * as api from "../../api";
import { useRouter } from "next/router";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Home from "../../Components/front-end/Home";
function GalvestonCruisesTransportation(props) {
  const router = useRouter();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGalvestonCruisePage());
  }, []);

  const cms = props.data1;
  console.log("galveston_cruise_page", props.data1.service_detail);
  const serviceDetail = props.data1.service_detail;
  const { galveston_cruise_page } = cms;

  const data =
    galveston_cruise_page && galveston_cruise_page.galvestonCruiseTransfer[0];
  const faqs = galveston_cruise_page && galveston_cruise_page.faqs;
  const fleet = galveston_cruise_page && galveston_cruise_page.fleet;
  const cityWeServe =
    galveston_cruise_page && galveston_cruise_page.cityWeServe;
  const testimonial =
    galveston_cruise_page && galveston_cruise_page.testimonial;

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
          <div style={{ overflow: "hidden" }}>
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
                Text={serviceDetail.heroDescription}
                Title={
                  serviceDetail.heroTitle ||
                  "Galveston Cruise Transfer & Shuttle | IAH/Hobby Airport to Glaveston"
                }
                img={serviceDetail.heroImage}
                Form={HomeForm}
              />
            </Container>
            <Home serviceDetail={serviceDetail} />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
export async function getStaticProps({ query }) {
  const res = await api.fetchGalvestonCruisePage();

  const serviceData = await api.fetchServicePageDetail(
    "63f225ab74e668584c122b85"
  );
  let serviceDetail = serviceData.data;
  let data = res.data.modifiedResponse;
  let data1 = {
    loading: false,
    error: null,
    galveston_cruise_page: data,
    service_detail: serviceDetail,
  };
  return { props: { data1 } };
}
export default GalvestonCruisesTransportation;
