import React, {useState, useEffect} from "react";
import styles from "../Confirm.module.scss";
import {Col, Row} from "reactstrap";
import {withRouter} from "next/router";
import {setAmount} from "../../../redux/Bookings/PreBooking/action";
import {
  setAccountDetails,
  setDirection,
} from "../../../redux/Bookings/PreBooking/action";
import {useDispatch, useSelector} from "react-redux";
import {Alert} from "reactstrap";
import moment from "moment";
import RED_EYE from "../../../red-eye-time";
function UserDetails({otherDetails, stepper, setStepper, router, onCheckRed}) {
  const dispatch = useDispatch();

  const {pathname} = router;
  const [formData, setFormData] = useState({
    pickupSign: "",
    noteForChauffeur: "Not provided",
    email: "",
    fullName: "",
    phoneNumber: "",
    flightDetails: "Not Provided",
  });
  const [returnDate, setDate] = useState("N/A");
  const [returnTime, setTime] = useState("N/A");
  const [error, setError] = useState("");
  const [redEye, setRedEye] = useState(true);
  const loginReducer = useSelector((state) => state.login);
  const direction = useSelector((state) => state.PreBookingReducer.direction);
  const preammount = useSelector((state) => state?.PreBookingReducer?.amount);
  const {type} = direction;
  const {user} = loginReducer;

  // const { time, bookingTypes, date } = otherDetails

  const {pickupSign, noteForChauffeur, email, fullName, phoneNumber} = formData;
  const redEyeBeginningTime = moment(RED_EYE.STARTING_TIME, "hh:mm");
  const redEyeEndingTime = moment(RED_EYE.ENDING_TIME, "hh:mm");
  const returnTimeConverted = moment(returnTime, "hh:mm");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    if (
      returnTimeConverted > redEyeBeginningTime &&
      returnTimeConverted < redEyeEndingTime
    ) {
      setRedEye(true);
      onCheckRed(true);
      dispatch(setAmount(parseInt(preammount) + parseInt(30)));
    } else {
      setRedEye(false);
      onCheckRed(false);
    }
  }, [returnTime]);
  const handleNext = () => {
    if (type === "ROUND TRIP") {
      var Date = moment(returnDate);
      if (!Date.isValid() || returnTime == "N/A") {
        window.scrollTo(0, 0);

        return setError("Return trip details required");
      }
      if (
        returnTime < otherDetails.time &&
        moment(returnDate).isSame(otherDetails.date && otherDetails.date)
      ) {
        window.scrollTo(0, 0);

        return setError(
          "You can't select a time that is behind innitial pickup time."
        );
      }
      if (moment(returnDate).isBefore(otherDetails.date && otherDetails.date)) {
        window.scrollTo(0, 0);

        return setError(
          "You can't select a date that is behind innitial pickup date."
        );
      }
      setError("");
      dispatch(setDirection({returnDate, returnTime, type}));
    }
    if (pickupSign && email && fullName && phoneNumber) {
      dispatch(setAccountDetails(formData));
    } else {
      window.scrollTo(0, 0);

      return setError("All fields are required");
    }

    setStepper(stepper + 1);
  };

  const handleChange = (e) => {
    setError("");
    if (user) {
      formData.email = user.email;
      formData.fullName = user.fullName;
      formData.phoneNumber = user.phoneNumber;
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.detail}>
      {error ? (
        <Alert color="danger" className="mt-2">
          {error}
        </Alert>
      ) : null}
      {otherDetails && otherDetails.bookingTypes == 0 ? (
        <Row>
          <Col sm={12} md={12} lg={12} xl={12} className={styles.text_center}>
            <Row>
              <Col>
                <div className="pt-5">
                  <h3>Airport Pickup Details (If any)</h3>
                  <h6>
                    Enter your flight number so our chauffeur can track the
                    status of your flight and pick you up when you arrive, even
                    if your flight is delayed.
                  </h6>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <div className={styles.inputBox}>
                  <h6 className="mt-3">Flight Details</h6>
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name="flightDetails"
                    placeholder="LH 204"
                  />
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className={styles.inputBox}>
                  <h6 className="mt-3">Pickup Sign</h6>
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name="pickupSign"
                    placeholder="John Doe"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={styles.text_center}>
                <Row>
                  <Col>
                    <div className="pt-5 pb-3">
                      <h3>Additional Info</h3>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6}>
                    <div className={styles.inputBox}>
                      <h6 className="mt-3">Passenger's Name</h6>
                      {user ? (
                        <input
                          onChange={(e) => handleChange(e)}
                          type="text"
                          name="fullName"
                          placeholder="John Doe"
                          value={user ? user.fullName : ""}
                        />
                      ) : (
                        <input
                          onChange={(e) => handleChange(e)}
                          type="text"
                          name="fullName"
                          placeholder="John Doe"
                        />
                      )}
                    </div>
                  </Col>

                  <Col xs={12} sm={6}>
                    <div className={styles.inputBox}>
                      <h6 className="mt-3">Passenger's Email</h6>
                      {user ? (
                        <input
                          onChange={(e) => handleChange(e)}
                          type="text"
                          name="email"
                          placeholder="email@email.com"
                          value={user ? user.email : ""}
                        />
                      ) : (
                        <input
                          onChange={(e) => handleChange(e)}
                          type="text"
                          name="email"
                          placeholder="email@email.com"
                        />
                      )}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6}>
                    <div className={styles.inputBox}>
                      <h6 className="mt-3">
                        Notes for the chauffeur (Optional)
                      </h6>
                      <textarea
                        name="noteForChauffeur"
                        onChange={(e) => handleChange(e)}
                        id=""
                        placeholder="Any special requests (child car seats) Please dont include any confidential information"></textarea>
                      <h6>
                        Help us provide you with a better service and add any
                        special requests
                      </h6>
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div>
                      <div className={styles.inputBox}>
                        <h6 className="mt-3">Passenger's Mobile Number</h6>
                        {user ? (
                          <input
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="phoneNumber"
                            placeholder="+12356376353"
                            value={user.phoneNumber}
                          />
                        ) : (
                          <input
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="phoneNumber"
                            placeholder="+12356376353"
                          />
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              {type === "ROUND TRIP" ? (
                <Col
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={styles.text_center}>
                  <Row>
                    <Col>
                      <div className="pt-5 pb-3">
                        <h3>Return Trip Information</h3>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={6}>
                      <div>
                        <div className={styles.inputBox}>
                          <h6 className="mt-3">Return Pickup Date</h6>

                          <input
                            onChange={(e) =>
                              setDate(
                                moment(e.target.value).format("MM-DD-YYYY")
                              )
                            }
                            type="date"
                            name="date"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} sm={6}>
                      <div className={styles.inputBox}>
                        <h6 className="mt-3">Return Pickup Time</h6>

                        <input
                          onChange={(e) => setTime(e.target.value)}
                          type="time"
                          name="time"
                        />
                        {redEye ? (
                          <p className={styles.danger}>
                            Pickup between 12AM and 6AM costs 30$ Red Eye
                            charges that will be add on total bill during
                            booking.
                          </p>
                        ) : null}
                      </div>
                    </Col>
                  </Row>
                </Col>
              ) : null}
            </Row>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col sm={12} md={12} lg={12} xl={12} className={styles.text_center}>
            <Row>
              <Col>
                <div className="pt-5">
                  <h3>Pickup Details</h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6}>
                <div className={styles.inputBox}>
                  <h6 className="mt-3">Pickup Sign</h6>
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name="pickupSign"
                    placeholder="John Doe"
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={styles.text_center}>
                <Row>
                  <Col>
                    <div className="pt-5 pb-3">
                      <h3>Additional Info</h3>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6}>
                    <div className={styles.inputBox}>
                      <h6 className="mt-3">Passenger's Name</h6>
                      {user ? (
                        <input
                          onChange={(e) => handleChange(e)}
                          type="text"
                          name="fullName"
                          placeholder="John Doe"
                          value={user ? user.fullName : ""}
                        />
                      ) : (
                        <input
                          onChange={(e) => handleChange(e)}
                          type="text"
                          name="fullName"
                          placeholder="John Doe"
                        />
                      )}
                    </div>
                  </Col>

                  <Col xs={12} sm={6}>
                    <div className={styles.inputBox}>
                      <h6 className="mt-3">Passenger's Email</h6>
                      {user ? (
                        <input
                          onChange={(e) => handleChange(e)}
                          type="text"
                          name="email"
                          placeholder="email@email.com"
                          value={user ? user.email : ""}
                        />
                      ) : (
                        <input
                          onChange={(e) => handleChange(e)}
                          type="text"
                          name="email"
                          placeholder="email@email.com"
                        />
                      )}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6}>
                    <div className={styles.inputBox}>
                      <h6 className="mt-3">
                        Notes for the chauffeur (Optional)
                      </h6>
                      <textarea
                        name="noteForChauffeur"
                        onChange={(e) => handleChange(e)}
                        id=""
                        placeholder="Any special requests (child car seats) Please dont include any confidential information"></textarea>
                      <h6>
                        Help us provide you with a better service and add any
                        special requests
                      </h6>
                    </div>
                  </Col>
                  <Col xs={12} sm={6}>
                    <div>
                      <div className={styles.inputBox}>
                        <h6 className="mt-3">Passenger's Mobile Number</h6>
                        {user ? (
                          <input
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="phoneNumber"
                            placeholder="+12356376353"
                            value={user.phoneNumber}
                          />
                        ) : (
                          <input
                            type="text"
                            onChange={(e) => handleChange(e)}
                            name="phoneNumber"
                            placeholder="+12356376353"
                          />
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              {type === "ROUND TRIP" ? (
                <Col
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={styles.text_center}>
                  <Row>
                    <Col>
                      <div className="pt-5 pb-3">
                        <h3>Return Trip Information</h3>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={6}>
                      <div>
                        <div className={styles.inputBox}>
                          <h6 className="mt-3">Return Pickup Date</h6>

                          <input
                            onChange={(e) => setDate(e.target.value)}
                            type="date"
                            name="date"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} sm={6}>
                      <div className={styles.inputBox}>
                        <h6 className="mt-3">Return Pickup Time</h6>

                        <input
                          onChange={(e) => setTime(e.target.value)}
                          type="time"
                          name="time"
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              ) : null}
            </Row>
          </Col>
        </Row>
      )}
      <div className={` ${styles.buttonsContainer} mb-5`}>
        <button onClick={(e) => setStepper(stepper - 1)}>Previous</button>
        <button onClick={(e) => handleNext()}>Next</button>
      </div>
    </div>
  );
}

export default withRouter(UserDetails);
