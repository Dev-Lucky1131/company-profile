import styles from "./css/Review.module.css";
import global from "./css/Global.module.css";
import Person1 from './addons/review/Person1.png';
import Person2 from './addons/review/Person2.png';
import Person3 from './addons/review/Person3.png';
import Person4 from './addons/review/Person4.png';
import Person5 from './addons/review/Person5.png';
import Person6 from './addons/review/Person6.png';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import React from 'react';

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
        <span className={styles.heading}>-&nbsp;Reviews</span>

        <div className={styles.header}>
          Meet Our Team
        </div>
        <div className={styles.Main}>
          <div className={styles.reviews}>
            {/* <div className={styles.f_part}> */}
              <div className={styles.reviewprt_up}>
                <div className={styles.reivewimg}>
                  <Image src={Person1} className={styles.img}></Image>
                </div>
              </div>
              <div className={styles.reviewprt_down}>
                <div className={styles.reivewimg}>
                  <Image src={Person2} className={styles.img}></Image>
                </div>
              </div>
              <div className={styles.reviewprt_up}>
                <div className={styles.reivewimg}>
                  <Image src={Person3} className={styles.img}></Image>
                </div>
              </div>
            {/* </div> */}
            {/* <div className={styles.s_part}> */}
              <div className={styles.reviewprt_down}>
                <div className={styles.reivewimg}>
                  <Image src={Person4} className={styles.img}></Image>
                </div>
              </div>
              <div className={styles.reviewprt_up}>
                <div className={styles.reivewimg}>
                  <Image src={Person5} className={styles.img}></Image>
                </div>
              </div>
              <div className={styles.reviewprt_down}>
                <div className={styles.reivewimg}>
                  <Image src={Person6} className={styles.img}></Image>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className={global.Side}></div>
    </div>
  );
}

export default Software;
