import React, { useState, useRef, useEffect } from "react";
import styles from "./hero.module.scss";
import { Container } from "reactstrap";
import img1 from "../../Assets/20191028-180329-Astroscelebrategame5_74865.png";
import Image from "next/image";
import {Editor, EditorState, RichUtils} from 'draft-js';

const Hero = ({ Text, Form, MotoHidden, img, Title }) => {

  const handleEditable = () => {
    //some logics here as per clients requirements
  };
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const toggleBulletPoints = e => {
    e.preventDefault();
    setEditorState(RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
  };


  return (
    <div>
      {/* <div className={styles.mainDiv}>
    
    </div> */}
      <Image
        priority={true}
        alt={Title}
        src={img}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Container className={styles.mainContainer} fluid>
        <div className={styles.headingsContainer}>
          <div style={{ paddingInline: "10px", width: "100%" }}>
            <p>
              <span contentEditable={true} onInput={handleEditable}
                style={{
                  color: "white",
                  backgroundColor: "#ee405e",
                  padding: "4px",
                }}>
                WORLD NO 1 AIRPORT TRANSPORT SERVICE
              </span>
            </p>
          </div>
          <h1 contentEditable={true} onInput={handleEditable} className={styles.home_h1}>
            {Title}
          </h1>
          <button onClick={toggleBulletPoints}>Toggle bullet points</button>
          <Editor editorState={editorState} onChange={setEditorState} />
          {
            MotoHidden ? null : <p className={styles.moto}>
              {Text}
            </p>
          }
        </div>
        <Form />
      </Container>
    </div>

  );
};

export default Hero;
