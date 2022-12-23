import React, { useState } from "react";
import styles from "../Confirm.module.scss";
import Paypal from "../../../Payment/Paypal";
import Braintree from "../../../Payment/Braintree";
import { ListGroup, ListGroupItem } from "reactstrap";

import { Collapse, Button, CardBody, Card } from "reactstrap";
import { getToken } from "../../../redux/Payment/actions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import  {Alert} from 'reactstrap'
function PaymentMethod() {
  const dispatch = useDispatch();
  const {execute_error} = useSelector((state) => state.paymentReducer);

  const history = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggle2 = () => {
    dispatch(getToken(history));
    setIsOpen2(!isOpen2);
  };
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={styles.payment_method_main}>
        {execute_error && <Alert className="m-2" color="danger">{execute_error}</Alert>}
        <h3>How would you like to pay?</h3>
        <div className={styles.list_container}>
          <ListGroup>
            <ListGroupItem className={styles.list_option} onClick={(e) => toggle2()}>
              <span>
                <img
                  width="32px"
                  src="../../../Assets/credit-card.svg"
                  className="img img fluid mr-2"
                  alt="image"
                />
              </span>
              Pay With Card
            </ListGroupItem>
            <ListGroupItem className={styles.list_option} onClick={(e) => toggle()}>
              <span>
                <img src="../../../Assets/paypal.svg" width="32px" className="img img fluid mr-2" alt="image" />
              </span>
              PayPal
            </ListGroupItem>
          </ListGroup>
          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody className={styles.textAlign}>
                <Paypal />
              </CardBody>
            </Card>
          </Collapse>
          <Collapse isOpen={isOpen2}>
            <Card>
              <CardBody className={`${styles.textAlign} p-0`}>
                <Braintree trigger={isOpen2} />
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default PaymentMethod;
