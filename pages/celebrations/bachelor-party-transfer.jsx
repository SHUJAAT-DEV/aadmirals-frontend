
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head"

import BacheloretteParty from "../../Components/Bachelorette Party/BacheloretteParty"
import axios from "axios"
import { URL } from "../../config/serverUrl";
import {NextSeo} from 'next-seo'
function BachelorettePartyPage(props) {
  const router = useRouter();
  console.log("line55",props)
  const {data1} = props;
  const {celebrationsTransfer} = data1;
  const {bachelorsParty} = celebrationsTransfer;
 

  return (
    <>
       <NextSeo
            title={bachelorsParty[0]?.metaTitle}
            description={bachelorsParty[0]?.metaDescription}
            canonical={`https://aadmirals.com${router?.pathname}`}
           
            
        />
     <BacheloretteParty img={bachelorsParty[0]?.heroImage}/>
    </>
  );
}
export async function getStaticProps ({ query }) {
  let res2 = await axios.get(`${URL}/website-content/bachelors-party`);
  // 
  let data2 = res2.data.modifiedResponse
  let data1 = {
    loading: false,
    error: null,
    celebrationsTransfer: data2
  }
  return { props: { data1 } }
}

export default BachelorettePartyPage;