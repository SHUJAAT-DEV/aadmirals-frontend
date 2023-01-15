
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head"
import Houston_to_CollegeStatTransfer from "../../Components/Houston_to_CollegeStatTransfer"
import axios from "axios";
import { URL } from "../../config/serverUrl";
import {NextSeo} from 'next-seo'
function Houston_to_CollegeStatTransferPage(props) {
  const router = useRouter()

  return (
    <>
    <NextSeo
            title={props?.data1?.HoustonToVictoria?.HoustonToCollegeStation[0]?.metaTitle}
            description={props?.data1?.HoustonToVictoria?.HoustonToCollegeStation[0]?.metaDescription}
            canonical={`https://aadmirals.com${router?.pathname}`}
           
            
        />
     <Houston_to_CollegeStatTransfer />
    </>
  );
}
export async function getStaticProps ({ query }) {
  let res2 = await axios.get(`${URL}/website-content/houston-to-college-station`);
  // 
  let data2 = res2.data.modifiedResponse
  let data1 = {
    loading: false,
    error: null,
    HoustonToVictoria: data2
  }
  return { props: { data1 } }
}

export default Houston_to_CollegeStatTransferPage;