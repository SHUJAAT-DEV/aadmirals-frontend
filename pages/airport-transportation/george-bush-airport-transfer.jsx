import React, {useState, useEffect} from "react";
import Head from "next/head";
import GeorgeBushAirport from "../../Components/George Bush Airport";
import * as api from "../../api";
import {useRouter} from "next/router";
import {NextSeo} from "next-seo";
function GeorgeBushAirportPage(props) {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={props?.data1?.george_bush_page?.georgeBushAirport[0]?.metaTitle}
        description={
          props?.data1?.george_bush_page?.georgeBushAirport[0]?.metaDescription
        }
        canonical={`https://aadmirals.com${router?.pathname}`}
      />

      <GeorgeBushAirport data1={props.data1} />
    </>
  );
}
export async function getStaticProps({query}) {
  const res = await api.fetchGeorgeBushPage();
  let data = res.data.modifiedResponse;
  let data1 = {
    loading: false,
    error: null,
    george_bush_page: data,
  };
  return {props: {data1}};
}
export default GeorgeBushAirportPage;
