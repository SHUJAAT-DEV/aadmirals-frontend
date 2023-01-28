import React, {useState, useRef, useEffect} from "react";
import styles from "./hero.module.scss";
import {Container} from "reactstrap";
import Image from "next/image";
const Hero = ({Text, Form, MotoHidden, img, Title}) => {
  return (
    <div>
      <div className={styles.mainDiv}>
        <Image
          priority={true}
          blurDataURL="https://www.pexels.com/photo/dark-blur-blurred-gradient-1526/"
          placeholder={"blur"}
          alt={Title}
          src={img}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <Container className={styles.mainContainer} fluid>
        <div className={styles.headingsContainer}>
          <div style={{paddingInline: "10px", width: "100%"}}>
            <p>
              <span
                style={{
                  color: "white",
                  backgroundColor: "#cc0023",
                  padding: "4px",
                }}>
                WORLD NO 1 AIRPORT TRANSPORT SERVICE
              </span>
            </p>
          </div>
          <h1 className={styles.home_h1}>{Title}</h1>
          {MotoHidden ? null : (
            <p
              className={styles.moto}
              dangerouslySetInnerHTML={{
                __html: Text.replace(/<img .*?>/g, ""),
              }}></p>
          )}
        </div>
        <Form />
      </Container>
    </div>

    // <div ref={box} >

    // </div>
  );
};

export default Hero;
