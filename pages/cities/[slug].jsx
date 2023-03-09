import React, { useState, useEffect } from "react";
import axios from "axios"
import { URL } from "../../config/serverUrl";
import { withRouter } from "next/router";
import Houstoncarservice from "../../Components/HoustonCarService";
import GalvestonCarService from "../../Components/GalvestonCarService/GalvestonCarService";
import MontgomeryCarService from "../../Components/MontgomeryCarService/MontgomeryCarService";
import ConroeCarService from "../../Components/ConroeCarService/ConroeCarService ";
import TomballCarService from "../../Components/TomballCarService/TomballCarService";
import CypressCarService from "../../Components/CypressCarService/CypressCarService";
import BeaumontCarService from "../../Components/BeaumontCarService-1/BeaumontCarService";
import SugarlandCarService from "../../Components/SugarlandCarService/SugarlandCarService";
import RichmondCarService from "../../Components/RichmondCarService/RichmondCarService";
import Katycarservice from "../../Components/katyCarService/katyCarService";
import SpringCarService from "../../Components/SpringCarService";
import FulshearCarService from "../../Components/FulshearCarService";
import  Head  from "next/head";




const Cities = (props) => {

    
  return (
    <>
      {/* <Head>
        <link rel="canonical" href={`https://aadmirals.com/${props.router.query.slug}`} />
    </Head> */}
        {props.router.query.slug=="houston-limo-car-service" ?
       <Houstoncarservice slug="houston-limo-car-service" />
       :
        ""
      } 
        {props.router.query.slug=="galveston-limo-car-service" ?
       <GalvestonCarService slug="galveston-limo-car-service"  />
       :
        ""
      }
      {props.router.query.slug=="montgomery-limo-car-service"   ?
       <MontgomeryCarService slug="montgomery-limo-car-service"/>
       :
        ""
      }
       {props.router.query.slug=="conroe-limo-car-service" ?
       <ConroeCarService slug="conroe-limo-car-service"/>
       :
        ""
      }
      {props.router.query.slug=="tomball-limo-car-service" ?
       <TomballCarService slug="tomball-limo-car-service"/>
       :
        ""
      }
       {props.router.query.slug=="cypress-limo-car-service" ?
       <CypressCarService slug="cypress-limo-car-service"/>
       :
        ""
      }
         {props.router.query.slug=="beaumont-limo-car-service" ?
       <BeaumontCarService slug="beaumont-limo-car-service"/>
       :
        ""
      }
         {props.router.query.slug=="sugarland-limo-car-service" ?
       <SugarlandCarService slug="sugarland-limo-car-service"/>
       :
        ""
      }
        {props.router.query.slug=="richmond-limo-car-service" ?
       <RichmondCarService  slug="richmond-limo-car-service"/>
       :
        ""
      }
        {props.router.query.slug=="katy-limo-car-service" ?
       <Katycarservice slug="katy-limo-car-service"/>
       :
        ""
      }
           {props.router.query.slug=="spring-limo-car-service" ?
       <SpringCarService  slug="spring-limo-car-service" />
       :
        ""
      }
           {props.router.query.slug=="fulshear-limo-car-service" ?
       <FulshearCarService slug="fulshear-limo-car-service"/>
       :
        ""
      }
    </>
  );
};


export async function getServerSideProps ({query}) {
   let {slug}=query
   
     if(slug == "houston-limo-car-service"){
      let res= await axios.get(`${URL}/website-content/houston-limo-service`);
      let data=res.data.modifiedResponse
      let data1={
        loading:false,
        error:null,
        houston_limo_page:data
      }
      return { props: {data1} }

     } 
     
     if(slug == "galveston-limo-car-service"){
      let res= await axios.get(`${URL}/website-content/galveston-limo-service`);  
      let data=res.data.modifiedResponse
      let data1={
        loading:false,
        error:null,
        galveston_limo_page:data
      }
      return { props: {data1} }

     }
     if(slug == "montgomery-limo-car-service"){
      let res= await axios.get(`${URL}/website-content/montgomery-limo-service`);  
      let data=res.data.modifiedResponse
      let data1={
        loading:false,
        error:null,
        montgomery_limo_page:data
      }
      return { props: {data1} }

     }
     if(slug == "conroe-limo-car-service"){
      let res= await axios.get(`${URL}/website-content/conroe-limo-service`);  
      let data=res.data.modifiedResponse
      let data1={
        loading:false,
        error:null,
        conroe_limo_page:data
      }
      return { props: {data1} }

     }
     if(slug == "tomball-limo-car-service"){
      let res= await axios.get(`${URL}/website-content/tomball-limo-service`);  
      let data=res.data.modifiedResponse
      let data1={
        loading:false,
        error:null,
        tomball_limo_page:data
      }
      return { props: {data1} }

     }
     if(slug == "cypress-limo-car-service"){
      let res= await axios.get(`${URL}/website-content/cypress-limo-service`);  
      let data=res.data.modifiedResponse
      let data1={
        loading:false,
        error:null,
        cypress_limo_page:data
      }
      return { props: {data1} }

     }
     if(slug == "beaumont-limo-car-service"){
      let res= await axios.get(`${URL}/website-content/beaumant-limo-service`);  
      let data=res.data.modifiedResponse
      let data1={
        loading:false,
        error:null,
        beamount_limo_page:data
      }
      return { props: {data1} }
     }
     if(slug == "sugarland-limo-car-service"){
      let res= await axios.get(`${URL}/website-content/sugarland-limo-service`);  
      let data=res.data.modifiedResponse
      let data1={
        loading:false,
        error:null,
        sugarland_limo_page:data
      }
      return { props: {data1} }
     }
     if(slug == "richmond-limo-car-service"){
      let res= await axios.get(`${URL}/website-content/richmond-limo-service`);  
      let data=res.data.modifiedResponse
      let data1={
        loading:false,
        error:null,
        richmond_limo_page:data
      }
      return { props: {data1} }
     }
     if(slug == "katy-limo-car-service"){
      let res= await axios.get(`${URL}/website-content/katy-limo-service`);  
      let data=res.data.modifiedResponse
      let data1={
        loading:false,
        error:null,
        katy_limo_page:data
      }
      return { props: {data1} }
     }
     if(slug == "spring-limo-car-service"){
      let res= await axios.get(`${URL}/website-content/spring-car-service`);  
      let data=res.data.modifiedResponse
      let data1={
        loading:false,
        error:null,
        springCarService:data
      }
      return { props: {data1} }
     }
     if(slug == "fulshear-limo-car-service"){
      let res= await axios.get(`${URL}/website-content/fulshear-car-service`);  
      let data=res.data.modifiedResponse
      let data1={
        loading:false,
        error:null,
        fulshearCarService:data
      }
      return { props: {data1} }
     } else {
      return {
        redirect: {
          destination: "/404",
          permanent: false,
        },
      };
     }
  }
  
export default withRouter(Cities);
