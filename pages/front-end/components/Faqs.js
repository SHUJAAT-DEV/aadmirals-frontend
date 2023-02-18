import { useState } from "react";
import Image from 'next/image';
import v from "../../../Assets/openv.svg";
import v1 from "../../../Assets/closev.svg";

// import "../style.scss";
const faqsQs = [
    {
      no:1,
      question: 'What is meant by a “one way trip”?',
      answer: 'It is a one time trip, Pick-Up from point A and Drop - of at point B.'
    },
    {
      no:2,
      question: 'What is meant by a “return trip”?',
      answer: 'The trip back from a destination,'
    },
    {
      no:3,
      question: 'What if I need more drop-offs and/or pick-ups?',
      answer: 'We can do that , Please book “By the Hour” service, so the chauffeur will stay with you based on your instructions for multi stops, if your multi stops in a diffrent days, simply book several bookings based on your scheduled days and stop locations, For more information contact Us by phone call or by email.'
    },
    {
      no:4,
      question: 'What is meant by a “round trip”?',
      answer: 'it is a two way trip, going from point A to point B and then back from point B to point A again.'
    }
  ];
function Faqs(){
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
    return (
        <>
        <div className="faq-container">
          {faqsQs.map((faq, index) => (
            <div key={index} className="faq">
              <div className="Question" onClick={() => handleClick(index)}>
                <h6>{faq.no}: {faq.question}</h6>
                <span>
                {(activeIndex === index)? <Image src={v1} /> :(<Image src={v}  />)}</span>
              </div>
              {activeIndex === index && (
                <div className="Answer">
                  <span>
                  {faq.answer}
                  </span>
                </div>
              )}
              <hr/>
            </div>
          ))}
        </div>
        </>
    );

}
export default Faqs;