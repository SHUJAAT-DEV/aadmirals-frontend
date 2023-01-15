import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head"
import Astrogame from "../../Components/Astro Game/Astrogame"
import axios from "axios"
import { URL } from "../../config/serverUrl";
import {NextSeo} from 'next-seo'
function AstrogamePage(props) {
  const router = useRouter()
  const {data1} = props;
  const {celebrationsTransfer} = data1;
  const {astroGame} = celebrationsTransfer;

  return (
    <>
       <NextSeo
            title={astroGame[0]?.metaTitle}
            description={astroGame[0]?.metaDescription}
            canonical={`https://aadmirals.com${router?.pathname}`}
           
            
        />
     <Astrogame />
    </>
  );
}
export async function getStaticProps ({ query }) {
  let res2 = await axios.get(`${URL}/website-content/astro-game`);
  // 
  let data2 = res2.data.modifiedResponse
  let data1 = {
    loading: false,
    error: null,
    celebrationsTransfer: data2
  }
  return { props: { data1 } }
}
export default AstrogamePage;