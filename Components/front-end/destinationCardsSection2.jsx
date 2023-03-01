import React from "react";
import Image from "next/image";
import star from "../../Assets/Polygon 20.png";
import car from "../../Assets/card image.svg";
import seatIcon from "../../Assets/seat.svg";
import dieselIcon from "../../Assets/desel.svg";
import mechanicIcon from "../../Assets/mechanic.svg";

const CardsSection2 = ({data, imageSrc}) => {

  return (
    <>
      <div className="updatechild-container">
        <div className="image-container">
          <Image src={imageSrc} className="card-image" alt="limousine car image" />
        </div>
        <div>
          <h5>{data.title}</h5>
          <p >{data.description}</p>
          <ul>
            <li>
              <span></span>
              <Image src={seatIcon} alt='seat icon' height={10} width="20px" />
              4 seats</li>
            <li><span></span>
              <Image src={dieselIcon} alt='seat icon' height={10} width="20px" />
              Diesel</li>
            <li><span></span>
              <Image src={mechanicIcon} alt='seat icon' height={10} width="20px" />
              Mechanic</li>
          </ul>
          <div className="card-inner">
            <span style={{ display: "flex", gap: '62px' }}>
              <span style={{
                color: "#ef4a67",
                fontWeight: "400",
                fontSize: "24px"
              }}>
                {data.price}
                <span style={{ fontWeight: "400" }}> / per hour</span>
              </span>
              <span className="stars">
                <img src="../../Assets/Polygon 20.png" />
                <img src="../../Assets/Polygon 20.png" />
                <img src="../../Assets/Polygon 20.png" />
                <img src="../../Assets/Polygon 20.png" />
              </span>
            </span>
            <button>Book Now
              <span className="right-arrow"> &#8594;</span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsSection2;
