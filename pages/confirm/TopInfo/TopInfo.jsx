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
          {quotes.otherDetails.from} <FaChevronRight className={styles.icons} />
          <FaChevronRight className={styles.icons} />
          {quotes.otherDetails.to}{" "}
          <FaGripLinesVertical className={styles.icons} />
          {`Duration: ${
            quotes.otherDetails.duration
              ? quotes.otherDetails.duration
              : `${quotes.otherDetails.hours} hours`
          } – Distance: ${
            quotes.otherDetails.distance ? quotes.otherDetails.distance : "N/A"
          }`}
          <FaGripLinesVertical className={styles.icons} />{" "}
          {quotes.otherDetails.date}
          <FaGripLinesVertical className={styles.icons} />{" "}
          {quotes.otherDetails.time}
        </h6>
      ) : (
        "Loading"
      )}
    </Container>
  );
}

export default TopInfo;
