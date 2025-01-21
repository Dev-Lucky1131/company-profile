import styles from "./css/Business.module.css";
import global from "./css/Global.module.css";
import Image from "next/image";
import Service from './addons/business/service.png'
import Support from './addons/business/support.png'
import Team from './addons/business/team.png'
import Directline from './addons/business/Direction Line.png'
import { useRef } from "react";
import { useInView } from "framer-motion";

function Business({ width }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className={global.Container}>
      <div className={global.Side}>
      </div>
      <div className={global.Main}>
        <div className={styles.heading}>- We Help In Your Growth</div>
        <div className={styles.header}>
          How can We help your<br />
          business?
        </div>
        <div className={styles.main}>
          <div className={styles.service}>
            <div className={styles.serviceimg}>
              <Image className={styles.businessimg} src={Service}></Image>
              <div className={styles.directline}>
                <Image src={Directline} className="centered"></Image>
              </div>
            </div>
            <div className={styles.businesscontent}>
              <div className={styles.contentheading}>Comprehensive Service</div>
              <div className={styles.contentmain}>
                You must login in first to be able to use our<br />
                platform to get your product analysis
              </div>
            </div>

          </div>
          <div className={styles.team}>
            <div className={styles.teamimg}>
              <Image className={styles.businessimg} src={Team}></Image>
              <div className={styles.directline}>
                <Image src={Directline} className="centered"></Image>
              </div>
            </div>
            <div className={styles.expertcontent}>
              <div className={styles.contentheading}>Expert Team</div>
              <div className={styles.contentmain}>
                You must login in first to be able to use our<br />
                platform to get your product analysis
              </div>
            </div>

          </div>
          <div className={styles.support}>
            <div className={styles.supportimg}>
              <Image className={styles.businessimg} src={Support}></Image>
            </div>
            <div className={styles.businesscontent}>
              <div className={styles.contentheading}>End-to-end Support</div>
              <div className={styles.contentmain}>
                You must login in first to be able to use our<br />
                platform to get your product analysis
              </div>
            </div>
          </div>
        </div>
        <div className={styles.solutionbtn}>
          View our business solutions
        </div>

      </div>
      <div className={global.Side}>
      </div>
    </div>
  );
}

export default Business;
