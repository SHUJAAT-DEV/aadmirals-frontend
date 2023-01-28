import React, {useState} from "react";
import styles from "./Blogscard.module.scss";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import Link from "next/link";
// import img from '../../Assets/blogimg.jpg'
import Avatar from "react-avatar";

const Blogscard = ({blogDetail}) => {
  return (
    <Row xs={12} md={3} className={styles.main}>
      {blogDetail &&
        blogDetail?.map((blog) => (
          <Col sm="12" md="6" lg="4">
            <Card className="mt-3">
              <Link href={`/blog/${blog.slug}`}>
                <a>
                  <CardImg
                    top
                    width="100%"
                    className={styles.image}
                    src={blog.blogImage}
                    alt="Card image cap"
                  />
                </a>
              </Link>
              <div className={styles.avatar}>
                <Avatar size={80} round={true} src={blog.bloggerImage} />
              </div>
              <CardBody className={styles.card_body}>
                <CardTitle tag="h6" className={styles.text}>
                  {blog.blogTitle}
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default Blogscard;
