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
  width: "13vw",
  fontFamily: 'ProximaNovaLight'
}

function Home({ serviceDetail }) {

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
        </div>
        <div className="icons-container">
          <div>
            <Image
              src={logo1}
              alt="Aadmirals dollar icon"
              width={95}
              height={90}
            />
            <div>
              <p style={pStyle}>Always on time for your pick-Up, and free of charge wait time</p>
            </div>
          </div>
          <div>
            <Image
              src={logo2}
              alt="Aadmirals clock icon"
              width={95}
              height={90}
            />
            <div>
              <p style={pStyle}>Always on time for your pick-Up, and free of charge wait time</p>
            </div>
          </div>
          <div>
            <Image
              src={logo3}
              alt="Aadmirals car icon"
              width={95}
              height={90}
            />
            <div>
              <p style={pStyle}>Always on time for your pick-Up, and free of charge wait time</p>
            </div>
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
            <div className="button-container">
              <button>Read More</button>
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
            <div className="button-container2">
              <button>Read More</button>
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
            <div className="button-container">
              <button>Read More</button>
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
            <CardsSection1 />
            <CardsSection1 />
            <CardsSection1 />
            <CardsSection1 />
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
