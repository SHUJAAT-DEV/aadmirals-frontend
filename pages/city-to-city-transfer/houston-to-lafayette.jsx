
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head"
import HoustontoLafayetteTransfer from "../../Components/Houston to Lafayette Transfer/HoustontoLafayetteTransfer"
import axios from "axios";
import { URL } from "../../config/serverUrl";
import {NextSeo} from 'next-seo'
function HoustontoLafayetteTransferPage(props) {
  const router = useRouter()

  return (
    <>
      <NextSeo
            title={props?.data1?.HoustonToVictoria?.houstonToLafayette[0]?.metaTitle}
            description={props?.data1?.HoustonToVictoria?.houstonToLafayette[0]?.metaDescription}
            canonical={`https://aadmirals.com${router?.pathname}`}
           
            
        />
     <HoustontoLafayetteTransfer />
    </>
  );
}
export async function getStaticProps ({ query }) {
  let res2 = await axios.get(`${URL}/website-content/houston-to-lafayette`);
  // 
  let data2 = res2.data.modifiedResponse
  let data1 = {
    loading: false,
    error: null,
    HoustonToVictoria: data2
  }
  return { props: { data1 } }
}

export default HoustontoLafayetteTransferPage;