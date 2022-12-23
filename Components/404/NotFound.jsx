import React from "react";
import styles from "./notFound.module.scss";
import Logo from "../../Assets/Group1077.png";
import ErrorIcon from "../../Assets/404-error.svg";
import { Container, Col, Row, CardBody, Button, Card } from "reactstrap";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from 'next/image'

const NotFound = () => {

  const history = useRouter();

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Not found</title>
      </Head>
      <Container className={`${styles.main_container}`}>
        <Row className={styles.setrow}>
          <Col xs={12} md={12} className={`${styles.background} p-0`}>
            <div className={styles.container_left}>
              <Container>
                <Card className={`${styles.cardPayment} mt-5 mb-4 `}>
                  <CardBody className=" pt-0">
                    <div className={styles.logoImage}>
                      <Image  loading="lazy" src={Logo} height={'100%'} width='100%' sizes="108px" objectFit="contain" />
                      {/* <img src="/Assets/Group1077.svg" alt="logo" width="100%" /> */}
                    </div>

                    <p className={styles.head}>404 Not Found</p>

                    <Col xs="12" className={`mb-3 ${styles.status_container}`}>
                      <div
                        className={styles.logoImage}
                        style={{ width: "100px" }}
                      >
                         <Image priority={true}  src="/Assets/404-error.svg" height={'100%'} width='100%' sizes="108px" objectFit="contain"  />
                      </div>
                    </Col>
                    <Button
                      onClick={(e) => history.push("/")}
                      className={styles.buttonPayment}
                    >
                      Go To Home
                    </Button>
                  </CardBody>
                </Card>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
