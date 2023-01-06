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
  return (
    <Container fluid className={styles.data}>
      {quotes ? (
        <h6>
          {quotes.otherDetails.from} 
          {" "}
          {quotes.otherDetails.to}{" "}
          {" "}
          {`Duration: ${
            quotes.otherDetails.duration
              ? quotes.otherDetails.duration
              : `${quotes.otherDetails.hours} hours`
          } – Distance: ${
            quotes.otherDetails.distance ? quotes.otherDetails.distance : "N/A"
          }`}
          {" "}
          {quotes.otherDetails.date}
          {" "}
          {" "}
          {quotes.otherDetails.time}
        </h6>
      ) : (
        "Loading"
      )}
    </Container>
  );
}

export default TopInfo;
