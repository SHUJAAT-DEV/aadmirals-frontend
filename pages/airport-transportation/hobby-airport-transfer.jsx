import React, { useState, useEffect } from "react";
import * as api from "../../api";
import HoustonHobbyAirport from "../../Components/Houston Hobby Airport (HOU) Limo Service"
import Head from "next/head"
import { useRouter } from 'next/router'
import {NextSeo} from 'next-seo'

function HoustonHobbyAirportPage(props) {
  const router = useRouter()
  return (
    <>
     <NextSeo
            title={props?.data1?.hobby_airport_page?.hobbyAirport[0]?.metaTitle}
            description={props?.data1?.hobby_airport_page?.hobbyAirport[0]?.metaDescription}
            canonical={`https://aadmirals.com${router?.pathname}`}
        />
     <HoustonHobbyAirport data1={props.data1} />
    </>
  );
}

export async function getStaticProps ({query}) {
  const  res  = await api.fetchHobbyAirportPage();
  let data=  res.data.modifiedResponse
  let data1={
    loading:false,
    error:null,
    hobby_airport_page:data
  }
  return { props: {data1} }
}
export default HoustonHobbyAirportPage;
