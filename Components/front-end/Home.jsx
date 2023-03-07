import Faqs from "./components/Faqs";
import CustomerFeedBack from "./CustomerFeedBack";
import CardsSection2 from "./destinationCardsSection2";
import CardsSection1 from "./destinationCardsSection1";
import Image from "next/image";
import car1 from "../../Assets/car1.svg";
import car2 from "../../Assets/car2.svg";
import limo from "../../Assets/about-limmo.png";
import logo1 from "../../Assets/logo1.svg";
import logo2 from "../../Assets/logo2.svg";
import logo3 from "../../Assets/logo3.svg";
import imageCap1 from "../../Assets/cardTitle.png";
import imageCap2 from "../../Assets/cardTitle2.jpg";
import imageCap3 from "../../Assets/cardTitle3.jpg";
import { useSelector } from "react-redux";
import {fetchLimitedContent,fetchLimitedContent2,fetchLimitedContent3} from "./fetchLimitedContent";
import { useState } from "react";
import sanitizeHTML from "../hero/SanitizedReactUtils";

const card1 = {
  title: "Standard Sedan Lincoln MKS, MKZ",
  description: "Clean in and out 4 doors, 2 rows of seats clean Sedan car fit for 2 people with 2 check-in bags and 2 carry-ons",
  price: "$75"
}
const card2 = {
  title: "Standard SUV, Chevy Suburban",
  description: "Clean in and out 4 doors, 2 rows of seats clean Sedan car fit for 2 people with 2 check-in bags and 2 carry-ons",
  price: "$75"
}
const card3 = {
  title: "Business Sedan, Mercedes E350,",
  description: "Clean in and out luxury 4 doors, 2 rows of seats clean Sedan car of the top brands and models fit for 2 people with 2 check-in bags and 2 carry-ons.",
  price: "$85"
}
const pStyle = {
  fontFamily: 'ProximaNovaLight'
}
const airportCard1 ={
  title: "George Bush Airport",
  description: "Galveston Cruise",
  distance: "Approx. 70 mile",
  link: "/airport-transportation/george-bush-airport-transfer"
}
const airportCard2 ={
  title: "George Bush Airport",
  description: "Downtown Houston",
  distance: "Approx. 24 mile",
  link: "/airport-transportation/hobby-airport-transfer"
}
const airportCard3 ={
  title: "George Bush Airport",
  description: "The Woodlands",
  distance: "Approx. 24 mile",
  link: "/airport-transportation/private-jet-limo"
}
const airportCard4 ={
  title: "George Bush Airport",
  description: "Katy",
  distance: "Approx. 44 mile",
  link: "/services/galveston-cruise-transfer"
}

function Home({ serviceDetail }) {
  const [section1, setSection1] = useState(true);
  const [section2, setSection2] = useState(true);
  const [section3, setSection3] = useState(true);

  let sanitizedContentSection1 = sanitizeHTML(serviceDetail.firstSectionsDescription);
  let showLimitedContentSection1 = "";
  showLimitedContentSection1 = fetchLimitedContent(sanitizedContentSection1);
  const sectionContent = section1 ? showLimitedContentSection1 : sanitizedContentSection1;
  const handleSection = () => setSection1(false);

  let sanitizedContentSection2 = sanitizeHTML(serviceDetail.secondSectionDescription);
  let showLimitedContentSection2 = "";
  showLimitedContentSection2 = fetchLimitedContent2(sanitizedContentSection2);
  const sectionContent2 = section2 ? showLimitedContentSection2 : sanitizedContentSection2;
  const handleSection2 = () => setSection2(false);

  let sanitizedContentSection3 = sanitizeHTML(serviceDetail.thirdSectionDescription);
  let showLimitedContentSection3 = "";
  showLimitedContentSection3 = fetchLimitedContent3(sanitizedContentSection3);
  const sectionContent3 = section3 ? showLimitedContentSection3 : sanitizedContentSection3;
  const handleSection3 = () => setSection3(false);
  const visible = () => {
    if (section1) {
      return (
        <span
          onClick={handleSection}
          className="hoverEffect button-container"
          >
          Read More
        </span>
      );
    }
  return null;
  };
  const visible2 = () => {
    if(section2){
        return (
          <span
            onClick={handleSection2}
            className="hoverEffect button-container"
            >
            Read More
          </span>
        );
      }
    return null;
  };
  const visible3 = () => {
     if(section3){
      return (
        <span
          onClick={handleSection3}
          className="hoverEffect button-container"
          >
          Read More
        </span>
      );
    }
    return null;
  };

  const details = useSelector((state) => state.contactDetails);
  const { contact_details_page } = details;
  const det = contact_details_page && contact_details_page.contactDetails[0];
  return (
    <>
      <section className="home-section">

        <div className="home-container">
          <div className="content">
            <div>
              <h3>
                {serviceDetail.metaTitle ||
                  "AAdmirals Travel & Transportation Houston Limo Service"}
              </h3>
            </div>
            <div className="inner-text" 
              dangerouslySetInnerHTML={{
                __html: serviceDetail.metaDescription,
              }}>
            </div>
            
          </div>
        </div>
        <div className="icons-container">
          <div className="icons">
            <Image
              src={logo1}
              alt="Aadmirals dollar icon"
              width={80}
              height={75}
            />
            <div className="text">
              <p style={pStyle}>Always on time for your pick-Up, and free of charge wait time</p>
            </div>
          </div>
          <div className="icons">
            <Image
              src={logo2}
              alt="Aadmirals clock icon"
              width={80}
              height={75}
            />
            <div className="text">
              <p style={pStyle}>Always on time for your pick-Up, and free of charge wait time</p>
            </div>
          </div>
          <div className="icons">
            <Image
              src={logo3}
              alt="Aadmirals car icon"
              width={80}
              height={75}
            />
            <div className="text">
              <p style={pStyle}>Always on time for your pick-Up, and free of charge wait time</p>
            </div>
          </div>
        </div>

      </section>

      <section className="section02">
        <div className="section02-container">
          <div className="content-container1">
            <div className="content-top">
              <h5>STRESS-FREE IAH AIRPORT TRANSPORTATION</h5>
            </div>
            <div>
              <h3>
                {serviceDetail.firstSectionsTitle}
                Get first-class service to and from the airport with AAdmirals
              </h3>
            </div>
            <div
              className="inner-text"
              dangerouslySetInnerHTML={{
                __html:sectionContent,
              }}></div>
              {visible()}
            <br />
            <div className="number-container2">
              <a href={`tel:+1${det && det.phoneNumber}`}>
                <span>
                  <img src="/Assets/phone.svg" alt="phone" />
                </span>
                +1 {det && det.phoneNumber}
              </a>
              <a href={`https://wa.me/1${det && det.whatsapp}`}>
                <span>
                  <img src="/Assets/whatsapp.svg" alt="phone" />
                </span>
                +1 {det && det.whatsapp}
              </a>
            </div>
          </div>
          <div className="image-container1">
            <div className="img-left">
              <img
                src={serviceDetail.firstImage || car1}
                alt="Aadmirals service image"
                width="100%"
                height="100%"
                loading="lazy"
              />
            </div>
            <div className="img-back-right"></div>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="container2">
          <div className="image-container22">
            <div className="img-right">
              <img
                src={serviceDetail.secondImage || car2}
                alt="Aadmirals service image"
                width="100%"
                height="100%"
                loading="lazy"
              />
            </div>
            <div className="img-back-left" style={{ backgroundColor: "#ef4a67" }}></div>
          </div>
          <div className="content-container22">
            <div>
              <h3>{serviceDetail.secondSectionTitle}</h3>
            </div>
            <div
              className="inner-text"
              dangerouslySetInnerHTML={{
                __html: sectionContent2,
              }}></div>
              {visible2()}
            <br />
            <div className="number-container2">
              <a href={`tel:+1${det && det.phoneNumber}`}>
                <span>
                  <img src="/Assets/phone.svg" alt="phone" />
                </span>
                +1 {det && det.phoneNumber}
              </a>
              <a href={`https://wa.me/1${det && det.whatsapp}`}>
                <span>
                  <img src="/Assets/whatsapp.svg" alt="phone" />
                </span>
                +1 {det && det.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="section3-container">
          <div className="content-container1">
            <div className="content-top">
              <h5>airport with AAdmirals</h5>
            </div>
            <div>
              <h3>{serviceDetail.thirdSectionTitle}</h3>
            </div>
            <div
              className="inner-text"
              dangerouslySetInnerHTML={{
                __html: sectionContent3,
              }}></div>
              {visible3()}
            <br />
            <div className="number-container2">
              <a href={`tel:+1${det && det.phoneNumber}`}>
                <span>
                  <img src="/Assets/phone.svg" alt="phone" />
                </span>
                +1 {det && det.phoneNumber}
              </a>
              <a href={`https://wa.me/1${det && det.whatsapp}`}>
                <span>
                  <img src="/Assets/whatsapp.svg" alt="phone" />
                </span>
                +1 {det && det.whatsapp}
              </a>
            </div>
          </div>
          <div className="image-container1">
            <div className="img-left">
              <img
                src={serviceDetail.thirdImage || car1}
                alt="Aadmirals service image"
                width="100%"
                height="100%"
                loading="lazy"
              />
            </div>
            <div className="img-back-right"></div>
          </div>
        </div>
      </section>

      <section className="section4">
        <div className="cardsContainer">
          <div className="content-container">
            <div className="cardContent" style={{
              paddingBottom: "1%"
            }}>
              <div>
                <h3 className="cards-heading">Popular Destnations</h3>
              </div>
              <div>
                <p className="cards-content">
                  TO & FROM THE AIRPORT
                </p>
              </div>
            </div>
          </div>
          <div className="cardsParentContainer">
            <CardsSection1 data={airportCard1}/>
            <CardsSection1 data={airportCard2} />
            <CardsSection1 data={airportCard3} />
            <CardsSection1 data={airportCard4} />
          </div>
        </div>
      </section>

      <section className="update-section5">
        <div className="updatecard-container">
          <CardsSection2 imageSrc={imageCap1} data={card1} />
          <CardsSection2 imageSrc={imageCap2} data={card2} />
          <CardsSection2 imageSrc={imageCap1} data={card3} />
          <CardsSection2 imageSrc={imageCap1} data={card1} />
          <CardsSection2 imageSrc={imageCap2} data={card2} />
          <CardsSection2 imageSrc={imageCap1} data={card3} />
        </div>
        {/* </div>
          </div>
        </div> */}
      </section>

      <section className="section8">
        <div className="customer-container">
          <center style={{
            paddingBottom: "1%"
          }}>
            <h2>WHAT OUR CUSTOMERS ARE SAYING</h2>
          </center>
          <CustomerFeedBack />
        </div>
      </section>

      <section className="faqs-section">
        <div className="faqs">
          <h2>Frequently Ask Questions</h2>
          <p>
            At Upstart, we pride ourselves on offering exceptional customer
            experiences for every client that walks through our doors.
          </p>
        </div>
        <Faqs />
      </section>
    </>
  );
}

export default Home;
