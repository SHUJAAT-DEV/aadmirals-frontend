
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head"
import Houston_to_Austin_Transfer from "../../Components/Houston_to_Austin_Transfer"
import axios from "axios";
import { URL } from "../../config/serverUrl";
import {NextSeo} from 'next-seo'
function Houston_to_Austin_TransferPage(props) {
  const router = useRouter()

  return (
    <>
      <NextSeo
            title={props?.data1?.HoustonToVictoria?.houstonToAustin[0]?.metaTitle}
            description={props?.data1?.HoustonToVictoria?.houstonToAustin[0]?.metaDescription}
            canonical={`https://aadmirals.com${router?.pathname}`}
           
            
        />
     <Houston_to_Austin_Transfer />
    </>
  );
}
export async function getStaticProps ({ query }) {
  let res2 = await axios.get(`${URL}/website-content/houston-to-austin`);
  // 
  let data2 = res2.data.modifiedResponse
  let data1 = {
    loading: false,
    error: null,
    HoustonToVictoria: data2
  }
  return { props: { data1 } }
}

export default Houston_to_Austin_TransferPage;