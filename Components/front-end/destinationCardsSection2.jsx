import React from "react";
// import "./style.scss"
import Image from "next/image";
import star from "../../Assets/Polygon 20.png";
import car from "../../Assets/card image.svg";

const CardsSection2 = () => {
  const starsStyle = {
    height: "fit-content",
    marginLeft: "-4%",
    width: "1.5vw",
  };
  return (
    <div className="cards">
      <div className="image-container">
        <Image
          src={car}
          style={{
            height: "fit-content",
            width: "24vw",
          }}
        />
      </div>
      <div className="cards-details">
        <h4>Standard Sedan Lincoln MKS, MKZ</h4>
        <p style={{ color: "#EF4A67" }}>
          Clean in and out 4 doors, 2 rows of seats clean Sedan car fit for 2
          people with 2 check-in bags and 2 carry-ons.
        </p>
        <div className="card-inner">
          <h5>From $75 Per Hour</h5>
          <div className="stars">
            <Image src={star} style={starsStyle} />
            <Image src={star} style={starsStyle} />
            <Image src={star} style={starsStyle} />
            <Image src={star} style={starsStyle} />
            <Image src={star} style={starsStyle} />
          </div>
          <button>BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default CardsSection2;
