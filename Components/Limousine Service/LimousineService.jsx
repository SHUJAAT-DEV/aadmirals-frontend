import React from "react";
import { Container, Col, Row } from "reactstrap";
import styles from "../../pages/home.module.scss";

import Image from "next/image";
function LimousineService({ data }) {
  return (
    <Container fluid className={styles.mainContainer_Limo}>
      <div className={styles.discriptionContainer_Limo}>
        <h2 className={styles.heading_Limo}>
          The Best Limousine Service in Houston
        </h2>
        {/* <p className={styles.paragraph}>
         {data.theBestLimousineServiceInHouston}
        </p> */}
      </div>
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <div className={styles.featuresBox_Limo}>
         
          <div className={styles.propertiesBox_Limo}>
          <div className="custom_main_images">
          <Row>
            <Col>
          <div className={styles.properties_Limo}>
             <Image priority={true} src="/Assets/surface1.svg"   width="70" height="50" alt="AAdmirals Saftey" />
            <h3>Safety, Time and Satisfaction are our priorities.</h3>
            <p>{data.paragraphOne}</p>
          </div>
          </Col>
          <Col>
          <div className={styles.properties_Limo}>
             <Image priority={true} width="70" height="50"   src="/Assets/13-car.svg" alt="Private Travel" />
            <h3>Private travel solutions meets all requirements and budgets</h3>
            <p>{data.paragraphTwo}</p>
          </div>
          </Col>
          <Col>
          <div className={styles.properties_Limo}>
             <Image priority={true} width="70" height="50"   src="/Assets/give-money.svg" alt="All prives" />
            <h3>All Inclusive Pricing</h3>
            {data.paragraphThree}
          </div>
          </Col>
          </Row>
          </div>
        </div>
        </div>
        <div
          style={{ paddingTop: "100px" }}
          className={styles.discriptionContainer_Limo}
        >
          <h2 className={styles.heading_Limo}>
            Unique Limousine Experience in Houston
          </h2>
          <p style={{ textAlign: "left" }} className={styles.paragraph_Limo}>
            {data.uniqueLimousineExperienceInHouston}
          </p>
        </div>
     
      </div>
      <div className="main_video_conainer">
        <div className="main_video_iframe">
            <iframe
              src="https://www.youtube.com/embed/wq9SHYyzLNs"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
      </div>
    </Container>
  );
}

export default LimousineService;
