import React from "react";
import styles from "./cities.module.scss";
import {Container} from "reactstrap";
import Link from "next/link";
import Image from "next/image";

function Cities({cities}) {
  return (
    <Container fluid className={`${styles.mainContainer} add_bottom_mrgin`}>
      <h2 className={styles.heading}>Cities We Serve</h2>
      <div className={styles.designContainer}>
        <img
          src="/Assets/left-arrow.svg"
          alt="AAdmirals-Arrow-right"
          loading="lazy"
        />
        <span></span>
        <img src="/Assets/car.svg" alt="AAdmirals-Car" loading="lazy" />
        <span></span>
        <img
          src="/Assets/left-arrow.svg"
          alt="AAdmirals-Arrow-Left"
          loading="lazy"
        />
      </div>
      <div className={styles.imagesContainer}>
        {cities
          ? cities.map((city) => (
              <Link href={`/${city.url ? city.url : ""}`}>
                <a>
                  <div className={styles.images}>
                    <Image
                      priority={true}
                      src={city.image}
                      alt={city.name}
                      objectFit="cover"
                      layout="fill"
                    />
                    <div className={styles.overly}>
                      <h4 className={styles.cities_name}>{city.name}</h4>
                    </div>
                  </div>
                </a>
              </Link>
            ))
          : null}
      </div>
    </Container>
  );
}

export default Cities;
