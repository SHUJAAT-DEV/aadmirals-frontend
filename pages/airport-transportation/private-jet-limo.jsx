import React, {useState, useEffect} from "react";
import * as api from "../../api";
import Head from "next/head";
import {useRouter} from "next/router";

import PrivateJetLimoService from "../../Components/PrivateJetLimoService";
import {NextSeo} from "next-seo";
function PrivateJetLimoServicePage(props) {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={
          props?.data1?.private_jet_page?.privateAviationAndRegional[0]
            ?.metaTitle
        }
        description={
          props?.data1?.private_jet_page?.privateAviationAndRegional[0]
            ?.metaDescription
        }
        canonical={`https://aadmirals.com${router?.pathname}`}
      />
      <PrivateJetLimoService data1={props.data1} />
    </>
  );
}
export async function getStaticProps({query}) {
  const res = await api.fetchPrivateJetPage();
  let data = res.data.modifiedResponse;
  let data1 = {
    loading: false,
    error: null,
    private_jet_page: data,
  };
  return {props: {data1}};
}
export default PrivateJetLimoServicePage;
