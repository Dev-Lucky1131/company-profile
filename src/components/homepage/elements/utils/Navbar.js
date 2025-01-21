"use client";

import { useEffect, useState } from "react";
import styles from "./css/Navbar.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../addons/footer/Logo 2.png";
import Star from "../addons/nav/star.png";
import { useRouter } from "next/navigation";


function Navbar() {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const [hover, setHover] = useState(false);
  let bop = {};
  if (typeof window !== "undefined") {
    bop = document.scrollingElement;
  }
  function useImperativeDisableScroll({ element, disabled }) {
    useEffect(() => {
      if (!element) {
        return;
      }
      element.style.overflowY = disabled ? "hidden" : "scroll";
      return () => {
        element.style.overflowY = "scroll";
      };
    }, [disabled]);
  }

  useImperativeDisableScroll({
    element: bop,
    disabled: nav,
  });

  const buttonVariant = {
    hover: { gap: ["5px", "20px", "5px"] },
    unhover: { gap: ["5px", "20px", "5px"] },
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Left}>
        <div className={styles.Logo} onClick={() => router.refresh()}>
          <Image
            src={Logo}
            alt={"vierralogo"}
            height={50}
            className={styles.LogoPicture}
          />
        </div>
      </div>
      <div className={styles.Right}>
        <motion.div
          className={styles.Login}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          initial={{ gap: "5px" }}
          animate={hover ? "hover" : "unhover"}
          variants={buttonVariant}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className={styles.starbox}>
            <span className={styles.number}>4.9</span>
            <div className={styles.starprt}>
              <Image src={Star}  className={styles.star}/>
            </div>
            <span className={styles.number}>(from 800 + Reviews)</span>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
