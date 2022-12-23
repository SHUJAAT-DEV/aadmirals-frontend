import React from "react";
import {Container, Row, Col} from "reactstrap";
import Pic1 from "../../Assets/Rectangle 184.jpg";
import Pic2 from "../../Assets/Rectangle 183.jpg";
import styles from "./PopularLocations.module.scss";

function PopularLocations(props) {
  return (
    <>
      <Container style={{marginTop: "-24px"}} className={styles.mainContainer}>
        <Row className={styles.container}>
          <Col xl={5} md={12} lg={12} xs={12}>
            <h3 className={styles.heading}>Popular Locations</h3>
            <h6 className={styles.text} style={{textAlign: "justify"}}>
              {props.popularLocations}
            </h6>
          </Col>
          <Col xl={5} md={12} lg={12} xs={12}>
            <img src={props.popularLocationsImage} alt="pic1" width="100%" />
          </Col>
        </Row>
        <Row className={styles.container}>
          <Col xl={5} md={12} lg={12} xs={12}>
            <img src={props.hobbyAirportRatesImage} alt="pic2" width="100%" />
          </Col>
          <Col xl={5} md={12} lg={12} xs={12}>
            <h3 className={styles.heading}>
              Hobby Airport Rates: Popular Locations
            </h3>
            <h6 className={styles.text} style={{textAlign: "justify"}}>
              {props.hobbyAirportRates}
            </h6>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className={styles.container1}>
          <Col xs={12} md={12} xl={12} className={styles.contact}>
            <h6>
              Or Call us on <span> +1 346-857-4294 / 800-994-5078</span>
            </h6>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PopularLocations;
