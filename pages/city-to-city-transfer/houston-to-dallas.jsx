
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head"
import HoustontoDallasTransfer from "../../Components/Houston to Dallas Transfer/HoustontoDallasTransfer"
import axios from "axios";
import { URL } from "../../config/serverUrl";
import {NextSeo} from 'next-seo'
function HoustontoDallasTransferPage(props) {
  const router = useRouter()

  return (
    <>
      <NextSeo
            title={props?.data1?.HoustonToVictoria?.HoustonToDallas[0]?.metaTitle}
            description={props?.data1?.HoustonToVictoria?.HoustonToDallas[0]?.metaDescription}
            canonical={`https://aadmirals.com${router?.pathname}`}
           
            
        />
     <HoustontoDallasTransfer />
    </>
  );
}
export async function getStaticProps ({ query }) {
  let res2 = await axios.get(`${URL}/website-content/houston-to-dallas`);
  // 
  let data2 = res2.data.modifiedResponse
  let data1 = {
    loading: false,
    error: null,
    HoustonToVictoria: data2
  }
  return { props: { data1 } }
}
export default HoustontoDallasTransferPage;