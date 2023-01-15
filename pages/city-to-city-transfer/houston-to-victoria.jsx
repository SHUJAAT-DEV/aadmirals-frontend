
import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../../config/serverUrl";
import HoustonToVictoria from "../../Components/HoustonToVictoria"
import { useRouter } from 'next/router'
import Head from "next/head"
import {NextSeo} from 'next-seo'
function HoustonToLakeJacksonPage(props) {
  const router = useRouter()

  return (
    <>
     <NextSeo
            title={props?.data1?.HoustonToVictoria?.HoustonToVictoria[0]?.metaTitle}
            description={props?.data1?.HoustonToVictoria?.HoustonToVictoria[0]?.metaDescription}
            canonical={`https://aadmirals.com${router?.pathname}`}
           
            
        />
   
     <HoustonToVictoria data1={props.data1} />
    </>
  );
}
export async function getStaticProps ({ query }) {
  let res2 = await axios.get(`${URL}/website-content/houston-to-victoria`);
  // 
  let data2 = res2.data.modifiedResponse
  let data1 = {
    loading: false,
    error: null,
    HoustonToVictoria: data2
  }
  return { props: { data1 } }
}
export default HoustonToLakeJacksonPage;