"use client";

import Image from "next/image";
import styles from "./css/Feature.module.css";
import global from "./css/Global.module.css";
import Feature from './addons/experience/group.png';
import { useElementSize } from "@mantine/hooks";
import { useRef } from "react";
import { useInView } from "framer-motion";
function Experience({ width: wd }) {
  const { ref, width } = useElementSize();
  const ref1 = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className={styles.Container} ref={ref}>
      <div className={styles.Side}>

      </div>
      <div
        className={styles.Main}
        ref={ref1}
        style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className={styles.featurebox}>
          <div className={styles.heading}>- Features</div>
          <div className={styles.header}>Case Studies</div>
          <div className={styles.description}>
            Our case studies showcase how our products and services have helped various<br />
            businesses achieve their goals.
          </div>
          <div className={styles.experiencebtn}>
            <div className={styles.studies}>Case Studies</div>
            <div className={styles.article}>Articles</div>
          </div>
          <div className={styles.featuremain}>
            <div className={styles.featureimg}>
              <Image src={Feature} className={styles.img}></Image>
              <div className={styles.featuredescription}>
                <div className={styles.featureheader}>Business Growth</div>
                <div className={styles.descriptioncontent}>
                  According to a study by SCORE, a non-profit association for small businesses, the average revenue growth rate<br />
                  for small businesses with less than $5 million in annual revenue is 7.5% annually.
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>
      <div className={styles.Side}></div>
    </div>
  );
}

export default Experience;
