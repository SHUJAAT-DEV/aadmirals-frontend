import React from 'react';
// import "./style.scss"

const CardsSection1 = ({data}) => {
    return (
        <div className="cards1">
            <a href={data.link}><h4>{data.title}</h4></a>
            <p>{data.description}</p>
            <p>{data.distance}</p>
            <a href='#'>
                <button>Book Now
                <span className="right-arrow"> &#8594;</span>
                </button>
            </a>
        </div>
    )
}

export default CardsSection1;
