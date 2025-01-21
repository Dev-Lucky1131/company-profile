import styles from "./css/Schedule.module.css";
import global from "./css/Global.module.css";
import Shadow from './addons/schedule/Vector.png'
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
        className={styles.Main}
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className={styles.content}>
          <div className={styles.heading}>
            Why To Schedule A Call
          </div>
          <div className={styles.description}>
            Scheduling a call is essential to ensure that we fully understand your unique needs and can provide personalized<br />
            solutions. A direct conversation allows us to clarify details, address any specific concerns, and discuss how our services<br />
            can best support your goals
          </div>
          <div className={styles.solutionbtnprt}>
            <div className={styles.soulutionbtn}>
              View our business solutions
            </div>
          </div>
          <div className={styles.shadow}>
            <Image src={Shadow}></Image>
          </div>
        </div>

      </div>
      <div className={global.Side}></div>
    </div>
  );
}

export default Software;
