import React from "react";
import styles from "./TestimonialCards.module.scss";

import Image from "next/image";
function TestimonialCards({image,msg,name}) {
  return (
    <div className="testomial_main">
      <div className={styles.mainContainer}>
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonial}>
            <h6>
            {msg}
            </h6>
            <h6>{name}</h6>
          </div>
          <div className={styles.imageContainer}>
           <Image priority={true} src={image} alt={name} width={20}   height={20} objectFit='contain'  />
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
