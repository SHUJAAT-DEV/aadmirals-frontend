import React, { useState } from "react";
import styles from "../Confirm.module.scss";
import {
  FaChevronRight,
  FaBriefcase,
  FaPeopleCarry,
  FaGripLinesVertical,
} from "react-icons/fa";
import {
  Col,
  Row,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

function TopInfo({ quotes }) {
  console.log("Quotes checking", quotes);
  return (
    <Container fluid
      className={styles.data}
      style={{
        backgroundColor: "transparent",
        color: "black"
      }}
    >
      <div style={{
        alignContent: "center"
      }}>
        {quotes ? (
          <div
            style={{
              textAlign: "center"
            }}
          >
            <span
              style={{
                padding: "5px 5px",
                borderRadius: "10px",
                fontSize: "14px !important",
                border: "1px solid",
                fontFamily: "AvenirNext, Helvetica, Arial, Open Sans, sans-seri"
              }}
            >
              {quotes.otherDetails.from}
            </span>
            {" "}
            <span
              className={styles.svgReplace}
            >
              &gt;&gt;
            </span>
            {" "}
            <span
              style={{
                padding: "5px 5px",
                borderRadius: "10px",
                border: "1px solid",
                fontSize: "14px !important",
                marginRight: "4px",
                fontFamily: "AvenirNext, Helvetica, Arial, Open Sans, sans-seri"
              }}
            >
              {quotes.otherDetails.to}{" "}
            
            </span>
            <span
                className={styles.svgReplace}
              >
                &gt;&gt;
              </span>
              {" "}
            <span
              style={{
                padding: "5px 5px",
                borderRadius: "10px",
                fontSize: "14px !important",
                border: "1px solid",
                fontFamily: "AvenirNext, Helvetica, Arial, Open Sans, sans-seri"
              }}
            >
              {`Duration: ${quotes.otherDetails.duration
                ? quotes.otherDetails.duration
                : `${quotes.otherDetails.hours} hours`
                } – Distance: ${quotes.otherDetails.distance ? quotes.otherDetails.distance : "N/A"
                }`}
            </span>
            {" "}
            <span
              className={styles.svgReplace}
            >
              &gt;&gt;
            </span>
            {" "}
            <span
              style={{
                padding: "5px 5px",
                borderRadius: "10px",
                fontSize: "14px !important",
                border: "1px solid",
                fontFamily: "AvenirNext, Helvetica, Arial, Open Sans, sans-seri"
              }}>
              {quotes.otherDetails.date}
            </span>
            {" "}
            <span
              className={styles.svgReplace}
            >
              &gt;&gt;
            </span>
            {" "}
            <span
              style={{
                padding: "5px 5px",
                borderRadius: "10px",
                fontFamily: "AvenirNext, Helvetica, Arial, Open Sans, sans-seri",
                fontSize: "14px !important",
                border: "1px solid"
              }}>
              {quotes.otherDetails.time}
            </span>
          </div>
        ) : (
          "Loading"
        )}
      </div>
    </Container>
  );
}

export default TopInfo;
