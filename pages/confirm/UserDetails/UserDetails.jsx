/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import styles from "../Confirm.module.scss";
import { Col, Row } from "reactstrap";
import { withRouter } from "next/router";
import { setAmount } from "../../../redux/Bookings/PreBooking/action";
import {
  setAccountDetails,
  setDirection,
} from "../../../redux/Bookings/PreBooking/action";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";
import moment from "moment";
import RED_EYE from "../../../red-eye-time";
import Stepper from "react-stepper-horizontal";
import { useForm } from "react-hook-form";

const userDetailTitle = {
  0: "Airport Transfer/Point-Point Booking Details",
  1: "By The Hour Booking Details",
  2: "City to City Booking Details",
};

const initialValue = {
  bookByName: "",
  bookByEmail: "",
  bookByPhone: "",
  cardHolderName: "",
  passangerEmail: "",
  passangerName: "",
  passangerPhone: "",
  flightNCuriseDetail: "",
  pickUpSign: "",
  notes: "",
  returnPickUpdate: "",
  returnPickUpTime: "",
};
const ErrorMessage = ({ field }) => (
  <p style={{ color: "red", fontSize: "0.75rem" }}>{field?.message}</p>
);
function UserDetails({
  otherDetails,
  stepper,
  setStepper,
  router,
  onCheckRed,
}) {
  const [returnDate, setDate] = useState("N/A");
  const [returnTime, setTime] = useState("N/A");
  const dispatch = useDispatch();
  const { pathname } = router;
  const [error, setError] = useState("");
  const direction = useSelector((state) => state.PreBookingReducer.direction);
  const { type } = direction;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const onSubmit = (data) => {
    if (type === "ROUND TRIP") {
      const { returnPickUpdate, returnPickUpTime } = data;
      dispatch(setDirection({ returnPickUpdate, returnPickUpTime, type }));
    }
    dispatch(setAccountDetails(data));
    setStepper(stepper + 1);
  };

  return (
    <div className={styles.detail}>
      <div className={styles.form_reDesign}>
        {error ? (
          <Alert color="danger" className="mt-2">
            {error}
          </Alert>
        ) : null}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col>
              <h4>{userDetailTitle[otherDetails?.bookingTypes]}</h4>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  fontSize: "small",
                }}>
                <input type="checkbox" />
                <h6>
                  Please check this box if the name on the card is different
                  other than the passenger's name or you book for someone else.
                </h6>
              </div>
            </Col>
          </Row>
          <div>
            <Row style={{ marginTop: 20 }}>
              <Col xs={12} md={6} lg={4}>
                <div className={styles.inputBox}>
                  <h6 className={styles.formText_reDesign}>Book by Name</h6>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className={styles.fields_reDesign}
                    {...register("bookByName", {
                      required: "Name is required.",
                    })}
                  />
                  {errors?.bookByName && (
                    <ErrorMessage field={errors?.bookByName} />
                  )}
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className={styles.inputBox}>
                  <h6 className={styles.formText_reDesign}>
                    Booked by Email Addres
                  </h6>
                  <input
                    type="text"
                    placeholder="e.g. johdoe@gmail.com"
                    className={styles.fields_reDesign}
                    {...register("bookByEmail", {
                      required: "Email is required!",
                    })}
                  />
                  {errors?.bookByEmail && (
                    <ErrorMessage field={errors?.bookByEmail} />
                  )}
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className={styles.inputBox}>
                  <h6 className={styles.formText_reDesign}>Book by Phone</h6>
                  <input
                    type="text"
                    placeholder="e.g. +1-222-505-3023"
                    className={styles.fields_reDesign}
                    {...register("bookByPhone", {
                      required: "Phone is required!",
                    })}
                  />
                  {errors?.bookByPhone && (
                    <ErrorMessage field={errors?.bookByPhone} />
                  )}
                </div>
              </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Col xs={4} md={4} lg={4}>
                <div className={styles.inputBox}>
                  <h6 className={styles.formText_reDesign}>
                    Name on Debit/ Credit Card
                  </h6>
                  <input
                    type="text"
                    placeholder="e.g. +1-222-505-3023"
                    className={styles.fields_reDesign}
                    {...register("cardHolderName", {
                      required: "Card holder name is required!",
                    })}
                  />
                  {errors?.cardHolderName && (
                    <ErrorMessage field={errors?.cardHolderName} />
                  )}
                </div>
              </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Col xs={12} md={6} lg={4}>
                <div className={styles.inputBox}>
                  <h6 className={styles.formText_reDesign}>
                    Passenger/ Group’s leader travel Name
                  </h6>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className={styles.fields_reDesign}
                    {...register("passangerName", {
                      required: "passanger Name is required!",
                    })}
                  />
                  {errors?.passangerName && (
                    <ErrorMessage field={errors?.passangerName} />
                  )}
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className={styles.inputBox}>
                  <h6 className={styles.formText_reDesign}>
                    Passenger’s Email Address
                  </h6>
                  <input
                    type="text"
                    placeholder="e.g. johdoe@gmail.com"
                    className={styles.fields_reDesign}
                    {...register("passangerEmail", {
                      required: "passanger Email is required!",
                    })}
                  />
                  {errors?.passangerEmail && (
                    <ErrorMessage field={errors?.passangerEmail} />
                  )}
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className={styles.inputBox}>
                  <h6 className={styles.formText_reDesign}>
                    Passanger's Phone
                  </h6>
                  <input
                    type="text"
                    placeholder="e.g. +1-222-505-3023"
                    className={styles.fields_reDesign}
                    {...register("passangerPhone", {
                      required: "Phone is required!",
                    })}
                  />
                  {errors?.passangerPhone && (
                    <ErrorMessage field={errors?.passangerPhone} />
                  )}
                </div>
              </Col>
            </Row>
            {/* flight detail */}
            <Row style={{ marginTop: 20 }}>
              <Col xs={12} md={6} lg={4}>
                <div className={styles.inputBox}>
                  <h6 className={styles.formText_reDesign}>
                    Flight’s/ Cruise Ship Details if any
                  </h6>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className={styles.fields_reDesign}
                    {...register("flightNCuriseDetail", {
                      required: "Flight/Curise detail is required!",
                    })}
                  />
                  {errors?.flightNCuriseDetail && (
                    <ErrorMessage field={errors?.flightNCuriseDetail} />
                  )}
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className={styles.inputBox}>
                  <h7 className={styles.formText_reDesign}>Pick-Up Sign</h7>
                  <input
                    type="text"
                    placeholder="e.g. johdoe@gmail.com"
                    className={styles.fields_reDesign}
                    {...register("pickUpSign", {
                      required: "pick-up sign is required!",
                    })}
                  />
                  {errors?.pickUpSign && (
                    <ErrorMessage field={errors?.pickUpSign} />
                  )}
                </div>
              </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Col xs={12}>
                <div className={styles.inputBox}>
                  <h6 className={styles.formText_reDesign}>
                    Notes, or any other additional information:
                  </h6>
                  <textarea
                    rows={4}
                    name="notes"
                    placeholder="Any special requests (child car seats) Please dont include any confidential information"
                    className={styles.fields_reDesign}
                    {...register("notes")}
                  />
                  <h6 style={{ color: "gray", fontSize: ".7rem" }}>
                    Help us provide you with a better service and add any
                    special requests
                  </h6>
                </div>
              </Col>
            </Row>
            {type === "ROUND TRIP" && (
              <>
                <h6 style={{ marginTop: 20, color: "black" }}>
                  Enter Your Return Trip Information:
                </h6>
                <Row style={{ marginTop: 20 }}>
                  <Col xs={12} md={6} lg={4}>
                    <div className={styles.inputBox}>
                      <h6 className={styles.formText_reDesign}>
                        Return Pick-Up Date
                      </h6>
                      <input
                        type="date"
                        placeholder="e.g. John Doe"
                        className={styles.fields_reDesign}
                        {...register("returnPickUpdate", {
                          required: "Date is required!",
                          onChange: (e) => {
                            setDate(
                              moment(e.target.value).format("MM-DD-YYYY")
                            );
                          },
                        })}
                      />
                      {errors?.returnPickUpdate && (
                        <ErrorMessage field={errors?.returnPickUpdate} />
                      )}
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={4}>
                    <div className={styles.inputBox}>
                      <h6 className={styles.formText_reDesign}>
                        Return Pick- Up Time
                      </h6>
                      <input
                        type="time"
                        placeholder="e.g. johdoe@gmail.com"
                        className={styles.fields_reDesign}
                        {...register("returnPickUpTime", {
                          required: "Time is required!",
                          onChange: (e) => setTime(e.target.value),
                        })}
                      />
                      {errors?.returnPickUpTime && (
                        <ErrorMessage field={errors?.returnPickUpTime} />
                      )}
                    </div>
                  </Col>
                </Row>
              </>
            )}
          </div>
          <div className={` ${styles.buttonsContainer} mb-5`}>
            <button onClick={(e) => setStepper(stepper - 1)}>Previous</button>
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(UserDetails);
