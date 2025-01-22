import styles from "./css/Growth.module.css";
import global from "./css/Global.module.css";
import Statics from './addons/growth/statics.png';
import Instagram from './addons/growth/instagram.png';
import Subscribe from './addons/growth/subscribe.png';
import Clients from './addons/growth/clients.png';
import Launch from './addons/growth/launch.png';
import Revenue from './addons/growth/revenue.png';
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Growth({ width }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className={global.Container}
      style={{ marginTop: "100px", marginBottom: '100px' }}
    >
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
        <div className={styles.Container}>
          <div className={styles.left}>
            <div className={styles.TinyTitle}>
              <span className={styles.heading}>- GROWTH</span>
            </div>
            <div className={styles.header}  >
              Business Growth.
            </div>
            <div className={styles.f_Context}>
              According to a study by SCORE, a non-profit association for small businesses, the
              average revenue growth rate for small businesses with less than $5 million in
              annual revenue is 7.5% annually.{" "}
            </div>{" "}
            <div className={styles.s_Context}>
              They found that the average attention rate of growth for small businesses is 1%
              annually. While growth rates vary widely depending on the industry and location of
              the business, these statistics provide a general overview of what small business
              owners can expect in terms of revenue and attention growth.{" "}
            </div>{" "}
            <div className={styles.analysis_number}>
              <div className={styles.Helped}>
                <div className={styles.HelpedNumber}>
                  <span className={styles.SilvedHighlight}>350+</span>
                </div>
                <div className={styles.HelpedWord}>
                  Over 500 business<br />powered with us</div>
              </div>
              <div className={styles.Gained}>
                <div className={styles.HelpedNumber}>
                  <span className={styles.SilvedHighlight}>
                    4920+{" "}
                  </span>
                </div>
                <div className={styles.HelpedWord}>
                  Over 500 business <br />powered with us{" "}
                </div>
              </div>
            </div>

          </div>
          <div className={styles.right}>
            <div className={styles.growthimgprt}>
              <div className={styles.imgprt}>
                <Image src={Statics} className={styles.statics}></Image>
              </div>
              <div className={styles.imgprt}>
                <Image src={Launch} className={styles.launch}></Image>
              </div>
            </div>
            <div className={styles.growthimgprt}>
              <div className={styles.imgprt}>
                <Image src={Instagram} className={styles.instagram}></Image>
              </div>
              <div className={styles.imgprt}>
                <Image src={Subscribe} className={styles.subscribe}></Image>
              </div>
            </div>
            <div className={styles.t_growthimgprt} >
              <div className={styles.imgprt}>
                <Image src={Clients} className={styles.client}></Image>
              </div>
              <div className={styles.imgprt}>
                <Image src={Revenue} className={styles.revenue}></Image>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={global.Side}>

      </div>
    </div>
  );
}

export default Growth;
