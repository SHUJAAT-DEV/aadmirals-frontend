
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head"
import Party from "../../Components/Party/Party"
import axios from "axios"
import { URL } from "../../config/serverUrl";
import {NextSeo} from 'next-seo'
function PartyPage(props) {
  const router = useRouter()

const {data1} = props;
const {celebrationsTransfer} = data1;
const {partyTransfer} = celebrationsTransfer;

  return (
    <>
      <NextSeo
            title={partyTransfer[0]?.metaTitle}
            description={partyTransfer[0]?.metaDescription}
            canonical={`https://aadmirals.com${router?.pathname}`}
           
            
        />
     <Party />
    </>
  );
}
export async function getStaticProps ({ query }) {
  let res2 = await axios.get(`${URL}/website-content/party-transfer`);
  // 
  let data2 = res2.data.modifiedResponse
  let data1 = {
    loading: false,
    error: null,
    celebrationsTransfer: data2
  }
  return { props: { data1 } }
}

export default PartyPage;