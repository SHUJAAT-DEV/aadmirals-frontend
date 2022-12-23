import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head"
import HoustonRodeo from "../../Components/Houston Rodeo/HoustonRodeo"
import axios from "axios"
import { URL } from "../../config/serverUrl";
import {NextSeo} from 'next-seo'
function HoustonRodeoPage(props) {
  const router = useRouter()
  const {data1} = props;
  const {celebrationsTransfer} = data1;
  const {HoustonRadeoTransportation} = celebrationsTransfer;

  return (
    <>
       <NextSeo
            title={HoustonRadeoTransportation[0]?.metaTitle}
            description={HoustonRadeoTransportation[0]?.metaDescription}
            canonical={`https://aadmirals.com${router?.pathname}`}
           
            
        />
     <HoustonRodeo />
    </>
  );
}
export async function getStaticProps ({ query }) {
  let res2 = await axios.get(`${URL}/website-content/houston-radeo-transportation`);
  // 
  let data2 = res2.data.modifiedResponse
  let data1 = {
    loading: false,
    error: null,
    celebrationsTransfer: data2
  }
  return { props: { data1 } }
}
export default HoustonRodeoPage;