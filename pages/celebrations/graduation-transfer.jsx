
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head"
import Graduation from "../../Components/Graduation/Graduation"
import axios from "axios"
import { URL } from "../../config/serverUrl";
import {NextSeo} from 'next-seo'
function GraduationPage(props) {
  const router = useRouter()
  const {data1} = props;
  const {celebrationsTransfer} = data1;
  const {graduationTransfer} = celebrationsTransfer;
 
  return (
    <>
       <NextSeo
            title={graduationTransfer[0]?.metaTitle}
            description={graduationTransfer[0]?.metaDescription}
            canonical={`https://aadmirals.com${router?.pathname}`}
           
            
        />
     <Graduation />
    </>
  );
}
export async function getStaticProps ({ query }) {
  let res2 = await axios.get(`${URL}/website-content/graduation-transfer`);
  // 
  let data2 = res2.data.modifiedResponse
  let data1 = {
    loading: false,
    error: null,
    celebrationsTransfer: data2
  }
  return { props: { data1 } }
}

export default GraduationPage;