import React from "react";
import styles from "./imagesectin.module.scss";
import { Button, Col, Container, Row } from "reactstrap";
import img1 from '../../Assets/8.png'
import img2 from '../../Assets/executive-car-service-1280x720.png'
import img3 from '../../Assets/Town-Car-Service-Minneapolis-1.png'
import img4 from '../../Assets/bbeb5efca7d6530eb5276df3d04faee8.png'
import img5 from '../../Assets/conti-private-1-710x350.png'
import img6 from '../../Assets/MKT-interior.png'

const ImageSection = (props) => {
  return (
    <div>
      <Container>
          <div className={styles.main}> 
        <Row>
          <Col xs={12} md={4} className={styles.im}>
            <img src={props.img1} alt={props?.alt1} width="100%" height="100%"/>
          </Col>
          <Col xs={12} md={4} className={styles.im}>
            <img src={props.img2} alt={props?.alt2} width="100%" height="100%"/>
          </Col>
          <Col xs={12} md={4} className={styles.im}>
            <img src={props.img3} alt={props?.alt3} width="100%" height="100%"/>
          </Col>
          <Col xs={12} md={4} className={styles.im}>
            <img src={props.img4} alt={props?.alt4} width="100%" height="100%"/>
          </Col>
          <Col xs={12} md={4} className={styles.im}>
            <img src={props.img5} alt={props?.alt5} width="100%" height="100%"/>
          </Col>
          <Col xs={12} md={4} className={styles.im}>
            <img src={props.img6} alt={props?.alt6} width="100%" height="100%"/>
          </Col>
        </Row>
        </div>
      </Container>
    </div>
  );
};

export default ImageSection;
