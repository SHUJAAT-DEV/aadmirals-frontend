import React from "react";
// import "./style.scss"
import Image from "next/image";
import star from "../../Assets/Polygon 20.png";
import car from "../../Assets/card image.svg";
// import imageCap1 from "../../Assets/cardTitle.png";
// import imageCap2 from "../../Assets/cardTitle2.jpg";
// import imageCap3 from "../../Assets/cardTitle3.jpg";
import seatIcon from "../../Assets/seat.svg";
import dieselIcon from "../../Assets/desel.svg";
import mechanicIcon from "../../Assets/mechanic.svg";

const CardsSection2 = ({data, imageSrc}) => {
  const starsStyle = {
    // height: "fit-content",
    // marginLeft: "-4%",
    // width: "1vw",
  };
  // cardImage = props.card2Image;

  return (
    // <div className="cards"> 
    //   <div className="image-container">
    //     <Image 
    //       src={car}
    //       style={{
    //         height: "fit-content",
    //         width: "24vw",
    //         borderRadius: "0px"
    //       }} 
    //     />
    //   </div>
    //   <div className="cards-details">
    //     <h4>Standard Sedan Lincoln MKS, MKZ</h4>
    //     <p style={{ color: "#EF4A67" }}>
    //       Clean in and out 4 doors, 2 rows of seats clean Sedan car fit for 2
    //       people with 2 check-in bags and 2 carry-ons.
    //     </p>
    //     <div className="card-inner">
    //       <h5>From $75 Per Hour</h5>
    //       <div className="stars">
    //         <Image src={star} style={starsStyle} />
    //         <Image src={star} style={starsStyle} />
    //         <Image src={star} style={starsStyle} />
    //         <Image src={star} style={starsStyle} />
    //         <Image src={star} style={starsStyle} />
    //       </div>
    //       <button>BOOK NOW</button>
    //     </div>
    //   </div>
    // </div>
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
                {/* <Image src={star} style={starsStyle} />
                <Image src={star} style={starsStyle} />
                <Image src={star} style={starsStyle} />
                <Image src={star} style={starsStyle} /> */}
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
