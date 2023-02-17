import React from 'react';
// import "./style.scss"

const CardsSection2 = () => {
    const cardsStyle = {
        marginTop: "2px",
        display: "flex"
    }
    const starsStyle = { 
        height: 'fit-content', 
        marginLeft: "-4%", 
        width: "1.5vw" 
    }
    return (
        <div className="cards">
            <div className="image-container">
                <img src="car pics.svg" style={{
                    height: 'fit-content',
                    width: '24vw',
                    marginTop:'2%'
                }}
                />
            </div>
            <div className="cards-details">
                <h4 style={cardsStyle}>Standard Sedan Lincoln MKS, MKZ</h4>
                <p style={{color: "#EF4A67"}}>Clean in and out 4 doors, 2 rows of seats clean Sedan car fit for 2 people with 2 check-in bags and 2 carry-ons.</p>
                <div className='card-inner'>
                    <h5>From $75 Per Hour</h5>
                    <div className="stars">
                        <img src="star 1.svg" style={starsStyle} />
                        <img src="star 1.svg" style={starsStyle} />
                        <img src="star 1.svg" style={starsStyle} />
                        <img src="star 1.svg" style={starsStyle} />
                        <img src="star 1.svg" style={starsStyle} />
                    </div>
                    <button>BOOK NOW</button>
                </div>
                
            </div>
        </div>
    )
}

export default CardsSection2;
