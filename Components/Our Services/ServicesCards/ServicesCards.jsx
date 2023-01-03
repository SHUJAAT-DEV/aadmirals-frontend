import React, {useEffect, useState} from "react";

import styles from "./ServicesCards.module.scss";
import Link from "next/link";
import ReadMoreReact from "read-more-react";
import Image from "next/image";
function ServicesCards({image, description, title, url}) {
  let [linkData, setLinkData] = useState("");
  useEffect(() => {
    if (title == "Galveston Cruise Transfer") {
      setLinkData("/galveston-cruise-transfer");
    }
    if (title == "Airport Transfer") {
      setLinkData("/airport-transportation-houston");
    }
    if (title == "Celebrations Transfer") {
      setLinkData("/celebrations");
    }
    if (title == "City To City Transfer") {
      setLinkData("/city-to-city-transfer");
    }
    if (title == "Events Transfer") {
      setLinkData("/events");
    }
    if (title == "Point to Point Transfer") {
      setLinkData("/city-to-city-transfer");
    }
    if (title == "Private Transfer for Families and Groups") {
      setLinkData("/city-to-city-transfe");
    }
  }, []);
  return (
    <div className="main_slider_serv">
          <div className={styles.cardsContainer}>
            <div className={styles.cards}>
              <div className={styles.cardImage}>
                <Image
                  priority={true}
                  src={image}
                  alt={title}
                  width={50}
                  height={30}
                  blurDataURL="https://www.pexels.com/photo/dark-blur-blurred-gradient-1526/"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className={styles.cardDetail}>
                <h3 className={styles.cardTitle} style={{ color: "black" }}>{title}</h3>
                <ReadMoreReact min={40}
                  ideal={50}
                  max={100}
                  readMoreText={'Read More'} text={description}
                  class
                />
              </div>
            </div>
          </div>
    </div>
  );
}

export default ServicesCards;
