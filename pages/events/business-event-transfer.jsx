import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head"
import Businessconventionsmeetings from "../../Components/Business Conventions & Meetings/Businessconventionsmeetings"
import axios from "axios"
import { URL } from "../../config/serverUrl";
import {NextSeo} from 'next-seo'
function BusinessconventionsmeetingsPage(props) {
  const router = useRouter()
  const {data1} = props;
const {celebrationsTransfer} = data1;
const {businessConvention} = celebrationsTransfer;

  return (
    <>
         <NextSeo
            title={businessConvention[0]?.metaTitle}
            description={businessConvention[0]?.metaDescription}
            canonical={`https://aadmirals.com${router?.pathname}`}
           
            
        />
     <Businessconventionsmeetings />
    </>
  );
}
export async function getStaticProps ({ query }) {
  let res2 = await axios.get(`${URL}/website-content/business-convention`);
  // 
  let data2 = res2.data.modifiedResponse
  let data1 = {
    loading: false,
    error: null,
    celebrationsTransfer: data2
  }
  return { props: { data1 } }
}
export default BusinessconventionsmeetingsPage;