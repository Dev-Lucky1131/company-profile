import Image from "next/image";
import styles from "./css/Footer.module.css";
import global from "./css/Global.module.css";
import Logo from "./addons/footer/Logo 2.png";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={styles.Container}>
      <div className={global.Side}></div>
      <div className={styles.Main}>
        <div className={styles.content}>
          <div className={styles.f_part}>

            <div className={styles.ads}>
              <div className={styles.logoprt}>
                <Image src={Logo} className={styles.logoimg} />
              </div>
              <div className={styles.description}>
                Whether it&apos;s software, hardware, or<br />
                a combination of both, our aim is to<br />
                provide solutions that help our<br />
                clients streamline their operations<br />
                and achieve their goals.
              </div>
            </div>

            <div className={styles.support}>
              <div className={styles.itemname}>Support</div>
              <div className={styles.item}>Agences</div>
              <div className={styles.item}>Expertise</div>
              <div className={styles.item}>Nos offers</div>
              <div className={styles.item}>Réalisations</div>
            </div>
          </div>
          <div className={styles.s_part}>

            <div className={styles.legal}>
              <div className={styles.itemname}>Legal</div>
              <div className={styles.item}>legal notice</div>
              <div className={styles.item}>privacy policy</div>
              <div className={styles.item}>terms of use</div>
            </div>

            <div className={styles.social}>
              <div className={styles.itemname}>Social</div>
              <div className={styles.item}>Instagram</div>
              <div className={styles.item}>Twitter</div>
              <div className={styles.item}>Facebook</div>
              <div className={styles.item}>Linkedin</div>
            </div>
          </div>

        </div>
        <div className={styles.footer}>
          <div className={styles.intro}>© 2023 Vierra, Inc. All rights reserved</div>
          <div className={styles.dcpt}>Mentions légales | CGV | CGU</div>
        </div>
      </div>
      <div className={global.Side}></div>
    </div>
  );
}

export default Footer;
