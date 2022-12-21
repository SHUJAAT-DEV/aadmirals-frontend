import React, {  useEffect } from "react";

import Header from "../../Components/Header/Header";
import styles from "../home.module.scss";

import Askquestion from "../../Components/askquestions/askquestion";
import Footer from "../../Components/Footer/Footer";

import Hero from "../../Components/hero/hero";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";

import SideNav from "../../Components/Header/SideNav/SideNav";

import HomeForm from "../../Components/Home Form/HomeForm";

import { useDispatch } from 'react-redux'

import axios from "axios"
import { URL } from "../../config/serverUrl";
import Link from "next/link"
import ReactHtmlParser from 'react-html-parser'; 
import { useRouter } from 'next/router'
import Image from "next/image";
import Testinmonial from '../../Components/Testimonial/Testimonial' 
import {NextSeo} from 'next-seo'

function CityToCityTransfer(props) {
  const router = useRouter()

  const cms = props.data1

  const { citytoCityTransfer } = cms

  const data = citytoCityTransfer && citytoCityTransfer.citytoCityTransfer[0]
  const faqs = citytoCityTransfer && citytoCityTransfer.faqs
  const fleet = citytoCityTransfer && citytoCityTransfer.fleet

  const testimonial = citytoCityTransfer && citytoCityTransfer.testimonial


const rawMarkup=(data) =>{
  var rawMarkup = data;
  return { __html: rawMarkup };
}
  return (
    <>
    <NextSeo
            title={data?.metaTitle}
            description={data?.metaDescription}
            canonical={`https://aadmirals.com${router?.pathname}`}
           
            
        />
     <div style={{ overflow: "hidden" }}>
      <SideNav />
      <Floatingbutton />
      <Header />

      <div className={styles.mainContainer} fluid id="#bookingForm">
      <Hero
           Text={""} Title={data.Description1}  img={data.Image1}  Form={HomeForm}
        />
      </div>


  
      <div className="container mt-3 mb-3 breakword_paragraph">
      { citytoCityTransfer.citytoCityTransfer.map((data,key) => {
          return (
            <div className="row" key={key}>
              <div className="col-12">
              { <p>{ ReactHtmlParser (data.Description2  ) }</p>}  
               <Image priority={true}
                      width="100"
                      src={data.Image2}
                      alt="AAdmirals Houston Limo Service “City to “City”"
                      height={40}
                      className='w-100 mb-4 mt-4'
                      layout='responsive'
                      
                      objectFit="cover"
                      quality={100}
                    />                       
                     <Image priority={true}
                      width="100"
                      src={data.Image3}
                      alt="AAdmirals Houston Limo Service “City to “City”"
                      height={70}
                      className='w-100 mb-4 mt-4'
                      layout='responsive'
                      
                      objectFit="cover"
                      quality={100}
                    />   
                    <br/>
            
            
                { <p>{ ReactHtmlParser (data.Description3  ) }</p>}    
                 <Image priority={true}
                      width="100"
                      src={data.Image4}
                      alt="AAdmirals Houston Limo Service “City to “City”"
                      height={40}
                      className='w-100 mb-4 mt-4'
                      layout='responsive'
                      
                      objectFit="cover"
                      quality={100}
                    />                      
               <br/>       
                { <p>{ ReactHtmlParser (data.Description4  ) }</p>}  
                 <Image priority={true}
                      width="100"
                      src={data.Image5}
                      alt="AAdmirals Houston Limo Service “City to “City”"
                      height={70}
                      className='w-100 mb-4 mt-4'
                      layout='responsive'
                      
                      objectFit="cover"
                      quality={100}
                    />      
                
                { <p>{ ReactHtmlParser (data.Description5  ) }</p>}  
                
                 <Image priority={true}
                      width="100"
                      src={data.Image51}
                      alt="AAdmirals Houston Limo Service “City to “City”"
                      height={70}
                      className='w-100 mb-4 mt-4'
                      layout='responsive'
                      
                      objectFit="cover"
                      quality={100}
                    /> 
                    <br/>
                { <p>{ ReactHtmlParser (data.Description6  ) }</p>}  

                       
              </div>
            </div>
          )
        })}
      </div>
      <div className="container services-links mb-4">
          <h3>Services</h3>
          <div>
            {
              data.dropdown.map((data,key)=>{
                return(
                  <li key={key}><Link href={data.url}><a>{data.name}</a></Link></li>
                )
              })
            }
          </div>
        </div>
      <div className="container">
        <div className="row">
          {fleet.map((data,key)=>{
            return(
              <div className="col-md-3 carCardContainer" key={key}>
                <div className="imageCardContainer">
                 <Image priority={true} width={100} height={130} objectFit="cover" quality={100} src={data.image} alt={data.name}  layout='responsive' className='w-100 rounded bordered' />
               
                </div>
                <h6>{data.name}</h6>
                <p>{data.description && data.description.substring(0, 20)}</p>
              </div>
            )
          })}
         
        </div>
      </div> 
      
      <Testinmonial testimonials={testimonial}/>
      

      <Askquestion faqs={faqs} />





<br></br>
<br></br>
<br></br>
      <Footer />
</div>
    </>
  );
}
export async function getStaticProps ({ query }) {
  let res2 = await axios.get(`${URL}/website-content/city-to-city-transfer`);
  // 
  let data2 = res2.data.modifiedResponse
  let data1 = {
    loading: false,
    error: null,
    citytoCityTransfer: data2
  }
  return { props: { data1 } }
}
export default CityToCityTransfer;
