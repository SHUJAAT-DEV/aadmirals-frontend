import React, {useEffect, useState} from "react";
import styles from "./contact.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/BottomFooter/BottomFooter";
import SideNav from "../../Components/Header/SideNav/SideNav";
import {
  Container,
  Col,
  Row,
  CardBody,
  Button,
  Card,
  CardTitle,
} from "reactstrap";
import {NextSeo} from "next-seo";
import {getContactPage} from "../../redux/Contact_us/action";
import {getContactDetailsPage} from "../../redux/Contact_details/action";
import {useDispatch, useSelector} from "react-redux";
import {Alert} from "reactstrap";
import Head from "next/head";
import {useRouter} from "next/router";
import {ErrorMessage} from "@hookform/error-message";
import {useForm, Controller} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: {allow: ["com", "net"]},
  }),
  phoneNumber: Joi.number().required(),
  message: Joi.string().required(),
});
const Contact = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {handleSubmit, control} = useForm({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      phoneNumber: "",
      message: "",
    },
    resolver: joiResolver(schema),
  });

  const cms = useSelector((state) => state.contact);
  const details = useSelector((state) => state.contactDetails);

  const {loading, contact_us_page} = cms;
  const {contact_details_page} = details;
  const det = contact_details_page && contact_details_page.contactDetails[0];

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   setreqFields(false);
  //   if (!email || !phoneNumber || !message) {
  //     setreqFields(true);
  //   } else {
  //     dispatch(getContactPage(email, phoneNumber, message));
  //   }
  // };

  useEffect(() => {
    dispatch(getContactDetailsPage());
  }, []);

  const onSubmit = (event) => {
    const {email, phoneNumber, message} = event;
    dispatch(getContactPage(email, phoneNumber, message));
  };

  return (
    <>
      <NextSeo
        title="Contact Us | AAdmirals Travel & Transportation Services"
        description="Book your ride today by filling a form on our website or call us at +1 346-857-4294 to get a free quote. Get free wifi and cold water onboard with on-time pickup."
        canonical={`https://aadmirals.com${router?.pathname}`}
      />
      <SideNav />
      <Header />
      <Container className={`${styles.main_container} m-0 p-0`}>
        <Row>
          <Col xs={11} md={7} className={`${styles.background} p-0`}>
            <div className={styles.container_left}>
              <Container>
                {cms.error && (
                  <Alert className="m-0" color="danger">
                    {cms.error}
                  </Alert>
                )}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Card className={`${styles.cardPayment} mt-5 mb-4 `}>
                    <CardTitle className={`${styles.headingMain}  mt-4 mb-0`}>
                      Contact Us
                    </CardTitle>
                    <hr />
                    <CardBody className=" pt-0">
                      <div className="form-group icon">
                        <label htmlFor="email" className={styles.label}>
                          Email
                        </label>
                        <Controller
                          name="email"
                          control={control}
                          render={({
                            field: {onChange, onBlur, value, name, ref},
                            formState: {errors},
                          }) => (
                            <div>
                              <input
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                placeholder="Enter email"
                                className={`${styles.input} bg-light inside form-control`}
                              />
                              <ErrorMessage
                                errors={errors}
                                name={name}
                                render={({message}) => (
                                  <p style={{color: "red"}}>{message}</p>
                                )}
                              />
                            </div>
                          )}
                        />
                      </div>

                      <div className="form-group">
                        <label className={styles.label} htmlFor="phoneNumber">
                          Phone
                        </label>
                        <Controller
                          name="phoneNumber"
                          control={control}
                          render={({
                            field: {onChange, onBlur, value, name, ref},
                            formState: {errors},
                          }) => (
                            <div>
                              <input
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                type="number"
                                placeholder="+1"
                                className={`${styles.input} form-control inside bg-light`}
                              />
                              <ErrorMessage
                                errors={errors}
                                name={name}
                                render={({message}) => (
                                  <p style={{color: "red"}}>{message}</p>
                                )}
                              />
                            </div>
                          )}
                        />
                      </div>
                      <div className="form-group">
                        <label className={styles.label} htmlFor="message">
                          Message
                        </label>
                        <Controller
                          name="message"
                          control={control}
                          render={({
                            field: {onChange, onBlur, value, name, ref},
                            formState: {errors},
                          }) => (
                            <div>
                              <textarea
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                className={`${styles.input} form-control inside bg-light`}
                                placeholder="type a message..."
                                id="w3review"
                                name="w3review"
                                rows="4"
                                cols="50"
                              />
                              <ErrorMessage
                                errors={errors}
                                name={name}
                                render={({message}) => (
                                  <p style={{color: "red"}}>{message}</p>
                                )}
                              />
                            </div>
                          )}
                        />
                      </div>

                      <Row>
                        <Col xs="12">
                          <Button
                            type="submit"
                            className={styles.buttonPayment}>
                            {loading ? (
                              <span>Loading...</span>
                            ) : (
                              <span>Send</span>
                            )}
                          </Button>
                        </Col>
                      </Row>
                      <Row style={{marginTop: "15px"}}>
                        <Col xs="12">
                          {contact_us_page && (
                            <Alert
                              style={{borderRadius: "0.5rem"}}
                              color="success">
                              Your query has been sent to admin
                            </Alert>
                          )}
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </form>
              </Container>
            </div>
          </Col>
          <Col xs={12} md={5} className="">
            {details.error && (
              <Alert className="m-0" color="danger">
                {details.error}
              </Alert>
            )}
            <div className={styles.container_right}>
              <div className={styles.overly}>
                <img
                  src="/Assets/logo-white.svg"
                  className="img img-fluid mb-3"
                  // className={styles.upLogo}
                  alt="image"
                />
                <h1>Contact AAdmirals</h1>
                <div className={styles.details_container}>
                  <img
                    src="/Assets/location.svg"
                    className="img img-fluid"
                    alt="image"
                  />
                  <h6>Location</h6>
                  <p>{det && det.location}</p>
                </div>
                <div className={styles.details_container}>
                  <div className={styles.inner_container}>
                    <div className={styles.details_container}>
                      <a href={`tel:+1${det && det.phoneNumber}`}>
                        <img
                          src="/Assets/phone.svg"
                          className={`${styles.phone} img img-fluid`}
                          alt="image"
                        />
                        <h6>Phone</h6>
                        <p>+1{det && det.phoneNumber}</p>
                      </a>
                    </div>
                    <div className={styles.details_container}>
                      <a href={`https://wa.me/1${det && det.whatsapp}`}>
                        <img
                          src="/Assets/whatsapp.svg"
                          className={`${styles.phone} img img-fluid`}
                          alt="image"
                        />
                        <h6>Whatsapp</h6>
                        <p>+1{det && det.whatsapp}</p>
                      </a>
                    </div>
                    <div className={styles.details_container}>
                      <a href={`skype:+1${det && det.skype}-?chat`}>
                        <img
                          src="/Assets/skype.svg"
                          className={`${styles.phone} img img-fluid`}
                          alt="image"
                        />
                        <h6>Skype</h6>
                        <p>+1{det && det.skype}</p>
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.details_container}>
                  <a href={`mailto:${det && det.email}`}>
                    <img
                      src="/Assets/email.svg"
                      className="img img-fluid"
                      width="25px"
                      alt="image"
                    />
                    <h6>Support</h6>
                    <p>{det && det.email}</p>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
