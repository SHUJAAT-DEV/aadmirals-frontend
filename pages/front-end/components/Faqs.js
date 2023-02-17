import { useState } from "react";
import Image from 'next/image';
import v from "../../../Assets/openv.svg";
import v1 from "../../../Assets/closev.svg";

// import "../style.scss";
const faqsQs = [
    {
      no:1,
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.'
    },
    {
      no:2,
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.'
    },
    {
      no:3,
      question: 'What is a component?',
      answer: 'A component is a reusable piece of code that can be used to build a user interface.'
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