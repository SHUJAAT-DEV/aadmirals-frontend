
import React, { useState, useEffect } from "react";
import axios from "axios";
import HoustonToLakejackson from "../../Components/HoustonToLakejackson"
import { URL } from "../../config/serverUrl";
import { useRouter } from 'next/router'
import Head from "next/head"
import {NextSeo} from 'next-seo'
function HoustonToLakeJacksonPage(props) {
  const router = useRouter()

  return (
    <>
      <NextSeo
            title={props?.data1?.HoustonToLakeJackson?.HoustonToLakeJackson[0]?.metaTitle}
            description={props?.data1?.HoustonToLakeJackson?.HoustonToLakeJackson[0]?.metaDescription}
            canonical={`https://aadmirals.com${router?.pathname}`}
           
            
        />
     <HoustonToLakejackson data1={props.data1} />
    </>
  );
}
export async function getStaticProps ({ query }) {
  let res2 = await axios.get(`${URL}/website-content/houston-to-lakejackson`);
  // 
  let data2 = res2.data.modifiedResponse
  let data1 = {
    loading: false,
    error: null,
    HoustonToLakeJackson: data2
  }
  return { props: { data1 } }
}
export default HoustonToLakeJacksonPage;