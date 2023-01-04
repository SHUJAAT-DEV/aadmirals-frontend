import React, { useState, useRef, useEffect } from "react";
import styles from "./hero.module.scss";
import { Container } from "reactstrap";
import Image from "next/image";
const Hero = ({ Text, Form, MotoHidden, img, Title }) => {
  return (
    <div>
      <Image
        priority={true}
        alt={Title}
        src={img}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Container className={styles.mainContainer} fluid>
        <div className={styles.headingsContainer}>
          <div style={{ paddingInline: "10px", width: "100%" }}>
            <p>
              <span
                style={{
                  color: "white",
                  backgroundColor: "#ee405e",
                  padding: "4px",
                }}>
                WORLD NO 1 AIRPORT TRANSPORT SERVICE
              </span>
            </p>
          </div>
          <h1 className={styles.home_h1}>
            {Title}
          </h1>
          {
            MotoHidden ? null : <p className={styles.moto}>
              {Text}
            </p>
          }
        </div>
        <Form />
      </Container>
    </div>

  );
};

export default Hero;
