import Faqs from "./components/Faqs";
import CustomerFeedBack from "./CustomerFeedBack";
import CardsSection2 from "./destinationCardsSection2";
import CardsSection1 from "./destinationCardsSection1";
import Image from "next/image";
import car1 from "../../Assets/car1.svg";
import car2 from "../../Assets/car2.svg";
import logo1 from "../../Assets/logo1.png";
import logo2 from "../../Assets/logo2.png";
import logo3 from "../../Assets/logo3.png";

function Home({ serviceDetail }) {
  return (
    <>
      <section className="home-section">
        <div className="home-container">
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
            }}></div>
        </div>
        <div className="home-logo-section">
          <div className="logo-area">
            <Image src={logo1} alt="My Image" width="100%" height="100%" />
            <span>
              Always on time for your pick-Up, and free of charge wait time
            </span>
          </div>
          <div className="logo-area">
            <Image src={logo2} alt="My Image" width="100%" height="100%" />
            <span>
              Always on time for your pick-Up, and free of charge wait time
            </span>
          </div>
          <div className="logo-area">
            <Image src={logo3} alt="My Image" width="100%" height="100%" />
            <span>
              Always on time for your pick-Up, and free of charge wait time
            </span>
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
              <Image
                src={serviceDetail.firstImage || car1}
                alt="Aadmirals service image"
                width="100%"
                height="100%"
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
              <Image
                src={serviceDetail.secondImage || car2}
                alt="Aadmirals service image"
                width="100%"
                height="100%"
              />
            </div>
            <div className="img-back-left"></div>
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
              <Image
                src={serviceDetail.thirdImage || car1}
                alt="Aadmirals service image"
                width="100%"
                height="100%"
              />
            </div>
            <div className="img-back-right"></div>
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="cardsContainer">
          <div className="content-container">
            <div className="cardContent">
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
            <CardsSection1 />
            <CardsSection1 />
            <CardsSection1 />
          </div>
        </div>
      </section>
      <section className="section5">
        <div className="cardsContainer">
          <div className="destinations">
            <div className="content-container3">
              <div className="cardContent">
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
            <div className="cardsParentContainer2">
              <CardsSection2 />
              <CardsSection2 />
              <CardsSection2 />
              <CardsSection2 />
              <CardsSection2 />
              <CardsSection2 />
            </div>
          </div>
        </div>
      </section>
      <section className="section8">
        <div className="customer-container">
          <center>
            <h2>WHAT OUR CUSTOMERS ARE SAYING</h2>
          </center>
          <CustomerFeedBack />
        </div>
      </section>
      <section style={{ padding: "3% 5%" }}>
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
