import styles from "./css/Hero.module.css";
import global from "./css/Global.module.css";
import Navbar from "./utils/Navbar";
import Image from "next/image";
import Google from "./addons/hero/googleplus logo.png";
import Microsoft from "./addons/hero/microsoft logo.png";
import Metal from "./addons/hero/metallb-horizontal-white logo.png";
import Linkedin from "./addons/hero/linkedin-plain-wordmark logo.png";
import Instagram from "./addons/hero/Frame 2.png";
import Pay from "./addons/hero/Frame 3.png";
import Amazon from "./addons/hero/Vector (2).png";
import Lrectangular from './addons/hero/Rectangle 1413.png';
import Rrectangular from './addons/hero/Rectangle 1414.png';
import Pattern from "./addons/hero/pattern.png";
import Vector from "./addons/hero/Vector.png";
import { useRef } from "react";
import { steps, useInView } from "framer-motion";


function Hero({ width }) {

  const logos = [
    {
      image: Google,
    },
    {
      image: Microsoft,
    },
    {
      image: Metal,
    },
    {
      image: Linkedin,
    },
    {
      image: Instagram,
    },
    {
      image: Pay,
    },
    {
      image: Amazon,
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className={styles.Container}>
      <div className={styles.bgshadow}>
        <div className={styles.brightimg}
          style={{
            position: 'relative',
          }}>
          <Image src={Vector} className={styles.heroimg}></Image>
          <div style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            width: '100%'
          }}>
            <Image src={Pattern}></Image>
          </div>

        </div>
      </div>
      <div className={global.Side}></div>
      <div className={global.Main}
        style={{
          backgroundColor: '#060515',
          position: 'relative'
        }}>

        <Navbar />
        <div
          ref={ref}
          className={styles.TextContainer}
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >

          <div className={styles.SectionTitle}>
            RealTime Solution Tools For <br />
            Your Entire Business
            <div className={styles.Factor}></div>
          </div>
        </div>



        <div
          ref={ref}
          className={styles.TextContainer}
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div className={styles.Context}>
            Our comprehensive tools offers small business owners a one-stop-shop solution to manage their accounting,<br />
            sales, marketing, outreach efforts, CRM, financial models, email campaigns, QuickBooks integration, record-<br />
            keeping, and a range of other crucial business functions.
          </div>
        </div>



        <div
          ref={ref}
          className={styles.TextContainer}
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
          }}
        >
          <div className={styles.schedulebox}>
            <div className={styles.HeroButton}>
              <div className={styles.HeroButtonText}>Schedule A Meeting</div>
            </div>
            <div className={styles.gapbox}>
              <div className={styles.gap}></div>
            </div>
            <div className={styles.iconbg}>
              <svg
                style={{ width: '20px', height: '20px', transform: 'rotate(215deg)' }}
                className="fill-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 14"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1v12m0 0 4-4m-4 4L1 9"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.SchemasContainer}>
        {logos.map((logos, i) => (
          <div key={i}>
            <Image src={logos.image} height={40} alt={"image"} />
          </div>
        ))}

      </div>
      <div className={styles.l_rectangular}>
        <Image src={Lrectangular} className={styles.rectangular}></Image>
      </div>
      <div className={styles.r_rectangular}>
        <Image src={Rrectangular} className={styles.rectangular}></Image>
      </div>
      <div className={global.Side}></div>
    </div>
  );
}

export default Hero;
