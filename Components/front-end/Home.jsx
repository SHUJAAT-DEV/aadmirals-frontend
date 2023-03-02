import Faqs from "./components/Faqs";
import CustomerFeedBack from "./CustomerFeedBack";
import CardsSection2 from "./destinationCardsSection2";
import CardsSection1 from "./destinationCardsSection1";
import Image from "next/image";
import car1 from "../../Assets/car1.svg";
import car2 from "../../Assets/car2.svg";
import limo from "../../Assets/about-limmo.png";
import logo1 from "../../Assets/logo1.png";
import logo2 from "../../Assets/logo2.png";
import logo3 from "../../Assets/logo3.png";
import imageCap1 from "../../Assets/cardTitle.png";
import imageCap2 from "../../Assets/cardTitle2.jpg";
import imageCap3 from "../../Assets/cardTitle3.jpg";
import { useSelector } from "react-redux";

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
            <div
              className="inner-text"
              dangerouslySetInnerHTML={{
                __html: serviceDetail.metaDescription,
              }}>
            </div>
          </div>
          <div className="images">
            <Image
              src={limo}
              alt="Aadmirals service image"
              quality={100}
              placeholder="empty"
            />
          </div>
        </div>

      </section>

      <section className="section02">
        <div className="section02-container">
          <div className="content-container1">
            <div>
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
                __html: serviceDetail.firstSectionsDescription,
              }}></div>
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
                __html: serviceDetail.secondSectionDescription,
              }}></div>
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
            <div>
              <h5>airport with AAdmirals</h5>
            </div>
            <div>
              <h3>{serviceDetail.thirdSectionTitle}</h3>
            </div>
            <div
              className="inner-text"
              dangerouslySetInnerHTML={{
                __html: serviceDetail.thirdSectionDescription,
              }}></div>
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
                  STRESS-FREE IAH AIRPORT TRANSPORTATION
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
        <div className="cardContent" style={{
          margin: "auto"
        }}>
          <div>
            <h3 className="cards-heading">Popular Destnations</h3>
          </div>
          <div>
            <p className="cards-content">
              STRESS-FREE IAH AIRPORT TRANSPORTATION
            </p>
          </div>
        </div>
        <div className="updatecard-container">
          <CardsSection2 imageSrc={imageCap1} data={card1} />
          <CardsSection2 imageSrc={imageCap2}  data={card2} />
          <CardsSection2 imageSrc={imageCap1}  data={card3} />
          <CardsSection2 imageSrc={imageCap1} data={card1} />
          <CardsSection2 imageSrc={imageCap2}  data={card2} />
          <CardsSection2 imageSrc={imageCap1}  data={card3} />
          
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
