"use client";
import { useState, useEffect } from "react";
import { useElementSize } from "@mantine/hooks";
import Image from "next/image";
import Consistent from "./addons/case/virtual.png";
import AI from "./addons/case/AI.png";
import styles from "./css/Case.module.css";
import global from "./css/Global.module.css";
import { useInView } from "framer-motion";

export default function Case() {
  const { ref } = useElementSize();
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState("photos");

  function openPage(pageName, elmnt) {
    document.querySelectorAll(".tabcontent").forEach(function (content) {
      content.style.display = "none";
    });
    document.querySelectorAll(".button").forEach(function (tab) {
      tab.style.backgroundColor = "";
      tab.style.color = "#596780"; // the original text color
    });
    document.querySelectorAll(".clickableTab").forEach(function (tab) {
      tab.style.backgroundColor = "";
      tab.style.color = "#596780"; // the original text color
    });
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = "#7c5cfc";
    elmnt.style.color = "#ffffff";
  }

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.getElementById("defaultOpen").click();
    }
  }, []);

  return (
    <div className={global.Container} ref={ref}>
      <div className={global.Side}></div>
      <div className={styles.Main}>
        <div className={styles.heading}>- We Help In Your Growth</div>
        <div className={styles.description}>
          Enhance Your Experience
          <br />
          with Our Unique Features
        </div>
        <div className={styles.detaileddescription}>
          Experience the power and convenience of our software, Apped to
          streamline
          <br />
          your operations and drive growth.
        </div>
        <div className={styles.pagetab}>
          <div className={styles.tabbtn_prt}>
            <div className={styles.tabbtn}>
              {/* <div className={styles.f_part}> */}
                <div
                  id="defaultOpen"
                  className="button"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: 'center',
                    alignItems: "center",
                    fontSize: "20px",
                    color: "#596780",
                    padding: "10px 25px",
                    borderRadius: "30px",
                    cursor: "pointer",
                  }}
                  onClick={(e) => openPage("UI", e.target)}
                >
                  UI/UIX
                </div>
                <div
                  className="clickableTab"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: 'center',
                    alignItems: "center",
                    fontSize: "20px",
                    color: "#596780",
                    padding: "10px 25px",
                    borderRadius: "30px",
                    cursor: "pointer",
                  }}
                  onClick={(e) => openPage("API", e.target)}
                >
                  API Dev
                </div>
                <div
                  className="clickableTab"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: 'center',
                    alignItems: "center",
                    fontSize: "20px",
                    color: "#596780",
                    padding: "10px 25px",
                    borderRadius: "30px",
                    cursor: "pointer",
                  }}
                  onClick={(e) => openPage("App", e.target)}
                >
                  App & IOS
                </div>
              {/* </div> */}
              {/* <div className={styles.s_part}> */}
                <div
                  className="clickableTab"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: 'center',
                    alignItems: "center",
                    fontSize: "20px",
                    color: "#596780",
                    padding: "10px 25px",
                    borderRadius: "30px",
                    cursor: "pointer",
                  }}
                  onClick={(e) => openPage("web", e.target)}
                >
                  Web Dev
                </div>
                <div
                  className="clickableTab"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: 'center',
                    alignItems: "center",
                    fontSize: "20px",
                    color: "#596780",
                    padding: "10px 25px",
                    borderRadius: "30px",
                    cursor: "pointer",
                  }}
                  onClick={(e) => openPage("software", e.target)}
                >
                  Software App
                </div>
                <div
                  className="clickableTab"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: 'center',
                    alignItems: "center",
                    fontSize: "20px",
                    color: "#596780",
                    padding: "10px 25px",
                    borderRadius: "30px",
                    cursor: "pointer",
                  }}
                  onClick={(e) => openPage("hosting", e.target)}
                >
                  hosting
                </div>
              {/* </div> */}

            </div>
          </div>

          <div className={styles.content}>
            <div id="UI" className="tabcontent">
              <div className={styles.experience}>
                <div className={styles.f_work}>
                  <div className={styles.work_heading}>
                    Consisten
                    <br />
                    App Systm
                  </div>
                  <div className={styles.work_description}>
                    Our Virtual assistant can handle all your budget management
                  </div>
                  <div className={styles.f_work_img}>
                    <Image src={Consistent} className={styles.consistentimg} alt="" />
                  </div>
                </div>
                <div className={styles.s_work}>
                  <div className={styles.work_heading}>
                    Consisten
                    <br />
                    App Systm
                  </div>
                  <div className={styles.work_description}>
                    Our Virtual assistant can handle all your budget management
                  </div>
                  <div className={styles.s_work_img}>
                    <Image src={AI} className={styles.AIimg} alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.experience}>

                <div className={styles.s_work}>
                  <div className={styles.work_heading}>
                    Consisten
                    <br />
                    App Systm
                  </div>
                  <div className={styles.work_description}>
                    Our Virtual assistant can handle all your budget management
                  </div>
                  <div className={styles.s_work_img}>
                    <Image src={AI} className={styles.AIimg} alt="" />
                  </div>
                </div>
                <div className={styles.f_work}>
                  <div className={styles.work_heading}>
                    Consisten
                    <br />
                    App Systm
                  </div>
                  <div className={styles.work_description}>
                    Our Virtual assistant can handle all your budget management
                  </div>
                  <div className={styles.f_work_img}>
                    <Image src={Consistent} className={styles.consistentimg} alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.experience}>
                <div className={styles.f_work}>
                  <div className={styles.work_heading}>
                    Consisten
                    <br />
                    App Systm
                  </div>
                  <div className={styles.work_description}>
                    Our Virtual assistant can handle all your budget management
                  </div>
                  <div className={styles.f_work_img}>
                    <Image src={Consistent} className={styles.consistentimg} alt="" />
                  </div>
                </div>
                <div className={styles.s_work}>
                  <div className={styles.work_heading}>
                    Consisten
                    <br />
                    App Systm
                  </div>
                  <div className={styles.work_description}>
                    Our Virtual assistant can handle all your budget management
                  </div>
                  <div className={styles.s_work_img}>
                    <Image src={AI} className={styles.AIimg} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div id="API" className="tabcontent">
              <h3>API</h3>
              <div>Some API this fine day!</div>
            </div>
            <div id="App" className="tabcontent">
              <h3>App</h3>
              <div></div>
            </div>
            <div id="web" className="tabcontent">
              <h3>web</h3>
              <div>Who we are and what we do.</div>
            </div>
            <div id="software" className="tabcontent">
              <h3>Software</h3>
              <div>Who we are and what we do.</div>
            </div>
            <div id="hosting" className="tabcontent">
              <h3>hosting</h3>
              <div>Who we are and what we do.</div>
            </div>
          </div>
        </div>
      </div>
      <div className={global.Side}></div>
    </div>
  );
}
