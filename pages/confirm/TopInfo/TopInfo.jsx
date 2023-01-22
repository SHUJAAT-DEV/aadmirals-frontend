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
        color : "black"
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
              }}
            >
              {quotes.otherDetails.from}
            </span>
            {" "}
            <span
              style={{
                padding: "5px 5px",
                borderRadius: "10px",
                border: "1px solid",
              fontSize: "14px !important",
              marginRight: "4px"
              }}
            >
              {quotes.otherDetails.to}{" "}
            </span>
            <span
              style={{
                padding: "5px 5px",
                borderRadius: "10px",
              fontSize: "14px !important",
              border: "1px solid"
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
              style={{
                padding: "5px 5px",
                borderRadius: "10px",
              fontSize: "14px !important",
              border: "1px solid",
              }}>
              {quotes.otherDetails.date}
            </span>
            {" "}
            <span
              style={{
                padding: "5px 5px",
                borderRadius: "10px",
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
