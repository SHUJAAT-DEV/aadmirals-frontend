/* eslint-disable react/no-unescaped-entities */
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
import Stepper from "react-stepper-horizontal";
import {useForm} from "react-hook-form";

const userDetailTitle = {
  0: "Airport Transfer/Point-Point Booking Details",
  1: "By The Hour Booking Details",
  2: "City to City Booking Details",
};

function UserDetails({otherDetails, stepper, setStepper, router, onCheckRed}) {
  console.log("otherDetails", otherDetails);
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
  const [mailValidate, setMailValidate] = useState(false);
  const [phoneValidate, setPhoneValidate] = useState(false);
  const [BookedByPhone, setBookedByPhone] = useState(false);
  const [redEye, setRedEye] = useState(true);
  const loginReducer = useSelector((state) => state.login);
  const direction = useSelector((state) => state.PreBookingReducer.direction);
  const preammount = useSelector((state) => state?.PreBookingReducer?.amount);
  const {type} = direction;
  const {user} = loginReducer;

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({mode: "onChange"});

  // const { time, bookingTypes, date } = otherDetails

  const {
    bookedByName,
    bookedByPhone,
    pickupSign,
    noteForChauffeur,
    email,
    fullName,
    phoneNumber,
  } = formData;
  const redEyeBeginningTime = moment(RED_EYE.STARTING_TIME, "hh:mm");
  const redEyeEndingTime = moment(RED_EYE.ENDING_TIME, "hh:mm");
  const returnTimeConverted = moment(returnTime, "hh:mm");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // useEffect(() => {
  //   if (
  //     returnTimeConverted > redEyeBeginningTime &&
  //     returnTimeConverted < redEyeEndingTime
  //   ) {
  //     setRedEye(true);
  //     onCheckRed(true);
  //     dispatch(setAmount(parseInt(preammount) + parseInt(30)));
  //   } else {
  //     setRedEye(false);
  //     onCheckRed(false);
  //   }
  // }, [returnTime]);
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
    if (email && phoneNumber) {
      dispatch(setAccountDetails(formData));
    } else {
      window.scrollTo(0, 0);
      return setError("All fields are required");
    }
    if (BookedByPhone) {
      return setError("Enter a valid US phone number pattern");
    }
    if (mailValidate) {
      return setError("Enter a valid Email address");
    } else {
    }
    if (phoneValidate) {
      return setError("Enter a valid US phone number pattern");
    }
    setStepper(stepper + 1);
  };

  // const handleChange = (e) => {
  //   setError("");
  //   if (user) {
  //     formData.email = user.email;
  //     formData.fullName = user.fullName;
  //     formData.phoneNumber = user.phoneNumber;
  //   }
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // if (error) {
  //   setTimeout(() => {
  //     setError("");
  //   }, 2000);
  // }

  const onSubmit = (data) => {
    console.log(data);
    const {
      bookByEmail,
      bookByName,
      bookByPhone,
      flightDetails,
      notes,
      passangerEmail,
      passangerName,
      passangerPhone,
      pickupDate,
      pickupTime,
      pickupSign,
    } = data;
    if (type === "ROUND TRIP") {
      dispatch(setDirection({pickupDate, pickupTime, type}));
    }
    if (passangerEmail && passangerPhone) {
      dispatch(setAccountDetails(data));
    }
    setStepper(stepper + 1);
  };
  const ErrorMessage = ({field}) => (
    <p style={{color: "red"}}>{field?.message}</p>
  );

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
              <h4>{userDetailTitle[otherDetails.bookingTypes]}</h4>
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
          {otherDetails && otherDetails.bookingTypes == 0 ? (
            <div>
              <Row style={{marginTop: 20}}>
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
              <Row style={{marginTop: 20}}>
                <Col xs={4} md={4} lg={4}>
                  <div className={styles.inputBox}>
                    <h6 className={styles.formText_reDesign}>
                      Name on Debit/ Credit Card
                    </h6>
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
              <Row style={{marginTop: 20}}>
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
                        required: "Name is required!",
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
                        required: "Email is required!",
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
              <Row style={{marginTop: 20}}>
                <Col xs={12} md={6} lg={4}>
                  <div className={styles.inputBox}>
                    <h6 className={styles.formText_reDesign}>
                      Flight’s/ Cruise Ship Details if any
                    </h6>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      className={styles.fields_reDesign}
                      {...register("passangerName", {
                        required: "Name is required!",
                      })}
                    />
                    {errors?.passangerName && (
                      <ErrorMessage field={errors?.passangerName} />
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
                      {...register("passangerEmail", {
                        required: "Email is required!",
                      })}
                    />
                    {errors?.passangerEmail && (
                      <ErrorMessage field={errors?.passangerEmail} />
                    )}
                  </div>
                </Col>
              </Row>
              <Row style={{marginTop: 20}}>
                <Col xs={12}>
                  <div className={styles.inputBox}>
                    <h6 className={styles.formText_reDesign}>
                      Notes (optional)
                    </h6>
                    <textarea
                      rows={4}
                      placeholder="Any special requests (child car seats) Please dont include any confidential information"
                      className={styles.fields_reDesign}
                      {...register("notes")}
                    />
                    <h6 style={{color: "gray"}}>
                      Help us provide you with a better service and add any
                      special requests
                    </h6>
                  </div>
                </Col>
              </Row>
              {type === "ROUND TRIP" && (
                <>
                  <h6 style={{marginTop: 20}}>Return Trip Information</h6>
                  <Row style={{marginTop: 20}}>
                    <Col xs={12} md={6} lg={4}>
                      <div className={styles.inputBox}>
                        <h6 className={styles.formText_reDesign}>
                          Pickup Date
                        </h6>
                        <input
                          type="date"
                          placeholder="e.g. John Doe"
                          className={styles.fields_reDesign}
                          {...register("pickupDate", {
                            required: "Date is required!",
                            onChange: (e) => {
                              setDate(
                                moment(e.target.value).format("MM-DD-YYYY")
                              );
                            },
                          })}
                        />
                        {errors?.pickupDate && (
                          <ErrorMessage field={errors?.pickupDate} />
                        )}
                      </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                      <div className={styles.inputBox}>
                        <h6 className={styles.formText_reDesign}>
                          Pickup Time
                        </h6>
                        <input
                          type="time"
                          placeholder="e.g. johdoe@gmail.com"
                          className={styles.fields_reDesign}
                          {...register("pickupTime", {
                            required: "Time is required!",
                            onChange: (e) => setTime(e.target.value),
                          })}
                        />
                        {errors?.pickupTime && (
                          <ErrorMessage field={errors?.pickupTime} />
                        )}
                      </div>
                    </Col>
                  </Row>
                </>
              )}
            </div>
          ) : (
            <>
              <Row style={{marginTop: 10}}>
                <Col xs={12} md={6} lg={4}>
                  <div className={styles.inputBox}>
                    <h6 className={styles.formText_reDesign}>Pickup Sign</h6>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      className={styles.fields_reDesign}
                      {...register("pickupSign", {
                        required: "This field is required!",
                      })}
                    />
                    {errors?.pickupSign && (
                      <ErrorMessage field={errors?.pickupSign} />
                    )}
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <div className={styles.inputBox}>
                    <h6 className={styles.formText_reDesign}>Book By Name</h6>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      className={styles.fields_reDesign}
                      {...register("bookByName", {
                        required: "Name is required!",
                      })}
                    />
                    {errors?.bookByName && (
                      <ErrorMessage field={errors?.bookByName} />
                    )}
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <div className={styles.inputBox}>
                    <h6 className={styles.formText_reDesign}>Book By Phone</h6>
                    <input
                      type="text"
                      placeholder="e.g. +1-111-202-3045"
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
              <Row style={{marginTop: 30}}>
                <Col>
                  <h3>Additonal Info</h3>
                </Col>
              </Row>
              <Row style={{marginTop: 10}}>
                <Col xs={12} md={6} lg={4}>
                  <div className={styles.inputBox}>
                    <h6 className={styles.formText_reDesign}>
                      Passanger's Name
                    </h6>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      className={styles.fields_reDesign}
                      {...register("passangerName", {
                        required: "Name is required!",
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
                      Passanger's Email
                    </h6>
                    <input
                      type="text"
                      placeholder="e.g. johdoe@gmail.com"
                      className={styles.fields_reDesign}
                      {...register("passangerEmail", {
                        required: "Email is required!",
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
              <Row style={{marginTop: 10}}>
                <Col xs={12}>
                  <div className={styles.inputBox}>
                    <h6 className={styles.formText_reDesign}>
                      Notes (Optional)
                    </h6>
                    <textarea
                      rows={4}
                      placeholder="Any special requests (child car seats) Please dont include any confidential information"
                      className={styles.fields_reDesign}
                      {...register("notes")}
                    />
                    <h6 style={{color: "gray"}}>
                      Help us provide you with a better service and add any
                      special requests
                    </h6>
                  </div>
                </Col>
              </Row>
              {type === "ROUND TRIP" && (
                <>
                  <h3 style={{marginTop: 20}}>Return Trip Information</h3>
                  <Row style={{marginTop: 20}}>
                    <Col xs={12} md={6} lg={4}>
                      <div className={styles.inputBox}>
                        <h6 className={styles.formText_reDesign}>
                          Pickup Date
                        </h6>
                        <input
                          type="date"
                          placeholder="e.g. John Doe"
                          className={styles.fields_reDesign}
                          {...register("pickupDate", {
                            required: "Date is required!",
                            onChange: (e) => {
                              setDate(
                                moment(e.target.value).format("MM-DD-YYYY")
                              );
                            },
                          })}
                        />
                        {errors?.pickupDate && (
                          <ErrorMessage field={errors?.pickupDate} />
                        )}
                      </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                      <div className={styles.inputBox}>
                        <h6 className={styles.formText_reDesign}>
                          Pickup Time
                        </h6>
                        <input
                          type="time"
                          placeholder="e.g. johdoe@gmail.com"
                          className={styles.fields_reDesign}
                          {...register("pickupTime", {
                            required: "Time is required!",
                            onChange: (e) => setTime(e.target.value),
                          })}
                        />
                        {errors?.pickupTime && (
                          <ErrorMessage field={errors?.pickupTime} />
                        )}
                      </div>
                    </Col>
                  </Row>
                </>
              )}
            </>
          )}
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
