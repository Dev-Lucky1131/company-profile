import styles from "./css/Software.module.css";
import global from "./css/Global.module.css";
import Skill from './addons/software/Skills.png'
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import React from 'react';
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react';

function Software({ width }) {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, []);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className={styles.Container}>
      <div className={global.Side}></div>
      <div
        className={global.Main}
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <span className={styles.heading}>-&nbsp;Join Us</span>

        <div className={styles.header}>
          Qualities of an excellent<br /> candidate{" "}
        </div>
        <div className={styles.Main}>
          <div className={styles.left}>
            <div className={styles.stackimage}>
            <Image src={Skill} className={styles.img}></Image>
            </div>
          </div>
          <div className={styles.right}>
            <CAccordion activeItemKey={2} className={styles.accordion}>
              <CAccordionItem itemKey={1} style={{marginTop:'20px'}} className={styles.accordionitem}>
                <CAccordionHeader >Experience</CAccordionHeader>
                <CAccordionBody>
                My experience and expertise: am proficient in multiple programming languages, have a strong understanding of software development methodologies, and possess excellent problem-solving skills.
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={2} style={{marginTop:'20px'}} className={styles.accordionitem}>
                <CAccordionHeader>Expert</CAccordionHeader>
                <CAccordionBody>
                My experience and expertise: am proficient in multiple programming languages, have a strong understanding of software development methodologies, and possess excellent problem-solving skills.
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={3} style={{marginTop:'20px'}} className={styles.accordionitem}>
                <CAccordionHeader>Motivate towards works</CAccordionHeader>
                <CAccordionBody>
                My experience and expertise: am proficient in multiple programming languages, have a strong understanding of software development methodologies, and possess excellent problem-solving skills.
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </div>
        </div>
      </div>
      <div className={global.Side}></div>
    </div>
  );
}

export default Software;
