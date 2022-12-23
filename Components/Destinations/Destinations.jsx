import React from "react";
import DestinationsCards from "./DestinationsCards/DestinationsCards";
import styles from "./Destinations.module.scss";
import  Link  from "next/link";
import { Col, Container, Row } from "reactstrap";
import Carousel from "react-elastic-carousel";

const Destinations = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <div className={styles.mainContainer}>
      {/* <Container> */}
      <div className={styles.servicesHeadingContainer}>
        <h2>Popular destinations</h2>
        <h5>TO & FROM THE AIRPORT</h5>
      </div>

      <Row>
        <Carousel
          showArrows={false}
          breakPoints={breakPoints}
          enableAutoPlay={false}
          className="card_style_main"
        >
          <DestinationsCards heading="George Bush Airport" subHeading="Galveston Cruise" approx="Approx.70 miles"/>
          <DestinationsCards heading="George Bush Airport " subHeading="Downtown Houston" approx="Approx. 24 miles"/>
          <DestinationsCards heading="George Bush Airport " subHeading="Katy" approx="Approx. 44 miles"/>
          <DestinationsCards heading="George Bush Airport " subHeading="The Woodlands" approx="Approx. 24 miles"/>
          <DestinationsCards heading="George Bush Airport " subHeading="The Galleria" approx="Approx. 28 miles"/>

 
        </Carousel>
      </Row>
      <div className={styles.someInfo}>
        Other Airport Transfer Options?{" "}
        <Link href="/airport-transportation/hobby-airport">
         <a> <span>
            William P. Hobby Airport Transfer - Houston Airport Transfer
          </span></a>
        </Link>
      </div>
    </div>
  );
};

export default Destinations;
