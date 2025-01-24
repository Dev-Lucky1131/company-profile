// "use client";
// import { useState, useEffect } from "react";
// import { useElementSize } from "@mantine/hooks";
// import Image from "next/image";
// import Consistent from "./addons/case/virtual.png";
// import AI from "./addons/case/AI.png";
// import styles from "./css/Case.module.css";
// import global from "./css/Global.module.css";
// import { useInView } from "framer-motion";

// export default function Case() {
//   const { ref } = useElementSize();
//   const isInView = useInView(ref, { once: true });
//   const [activeTab, setActiveTab] = useState("photos");

//   function openPage(pageName, elmnt) {
//     document.querySelectorAll(".tabcontent").forEach(function (content) {
//       content.style.display = "none";
//     });
//     document.querySelectorAll(".button").forEach(function (tab) {
//       tab.style.backgroundColor = "";
//       tab.style.color = "#596780"; // the original text color
//     });
//     document.querySelectorAll(".clickableTab").forEach(function (tab) {
//       tab.style.backgroundColor = "";
//       tab.style.color = "#596780"; // the original text color
//     });
//     document.getElementById(pageName).style.display = "block";
//     elmnt.style.backgroundColor = "#7c5cfc";
//     elmnt.style.color = "#ffffff";
//   }

//   useEffect(() => {
//     if (typeof document !== "undefined") {
//       document.getElementById("defaultOpen").click();
//     }
//   }, []);

//   return (
//     <div className={global.Container} ref={ref}>
//       <div className={global.Side}></div>
//       <div className={styles.Main}>
//         <div className={styles.heading}>- We Help In Your Growth</div>
//         <div className={styles.description}>
//           Enhance Your Experience
//           <br />
//           with Our Unique Features
//         </div>
//         <div className={styles.detaileddescription}>
//           Experience the power and convenience of our software, Apped to
//           streamline
//           <br />
//           your operations and drive growth.
//         </div>
//         <div className={styles.pagetab}>
//           <div className={styles.tabbtn_prt}>
//             <div className={styles.tabbtn}>
//               {/* <div className={styles.f_part}> */}
//               <div
//                 id="defaultOpen"
//                 className="button"
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   textAlign: 'center',
//                   alignItems: "center",
//                   fontSize: "20px",
//                   color: "#596780",
//                   padding: "10px 25px",
//                   borderRadius: "30px",
//                   cursor: "pointer",
//                 }}
//                 onClick={(e) => openPage("UI", e.target)}
//               >
//                 UI/UIX
//               </div>
//               <div
//                 className={styles.clickableTab}
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   textAlign: 'center',
//                   alignItems: "center",
//                   fontSize: "20px",
//                   color: "#596780",
//                   padding: "10px 25px",
//                   borderRadius: "30px",
//                   cursor: "pointer",
//                 }}
//                 onClick={(e) => openPage("API", e.target)}
//               >
//                 API Dev
//               </div>
//               <div
//                 className={styles.clickableTab}
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   textAlign: 'center',
//                   alignItems: "center",
//                   fontSize: "20px",
//                   color: "#596780",
//                   padding: "10px 25px",
//                   borderRadius: "30px",
//                   cursor: "pointer",
//                 }}
//                 onClick={(e) => openPage("App", e.target)}
//               >
//                 App & IOS
//               </div>
//               {/* </div> */}
//               {/* <div className={styles.s_part}> */}
//               <div
//                 className={styles.clickableTab}
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   textAlign: 'center',
//                   alignItems: "center",
//                   fontSize: "20px",
//                   color: "#596780",
//                   padding: "10px 25px",
//                   borderRadius: "30px",
//                   cursor: "pointer",
//                 }}
//                 onClick={(e) => openPage("web", e.target)}
//               >
//                 Web Dev
//               </div>
//               <div
//                 className={styles.clickableTab}
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   textAlign: 'center',
//                   alignItems: "center",
//                   fontSize: "20px",
//                   color: "#596780",
//                   padding: "10px 25px",
//                   borderRadius: "30px",
//                   cursor: "pointer",
//                 }}
//                 onClick={(e) => openPage("software", e.target)}
//               >
//                 Software App
//               </div>
//               <div
//                 className={styles.clickableTab}
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   textAlign: 'center',
//                   alignItems: "center",
//                   fontSize: "20px",
//                   color: "#596780",
//                   padding: "10px 25px",
//                   borderRadius: "30px",
//                   cursor: "pointer",
//                 }}
//                 onClick={(e) => openPage("hosting", e.target)}
//               >
//                 hosting
//               </div>
//               {/* </div> */}

//             </div>
//           </div>

//           <div className={styles.content}>
//             <div id="UI" className="tabcontent">
//               <div className={styles.experience}>
//                 <div className={styles.f_work}>
//                   <div className={styles.work_heading}>
//                     Consistent
//                     <br />
//                     App Systm
//                   </div>
//                   <div className={styles.work_description}>
//                     Our Virtual assistant can handle all your budget management
//                   </div>
//                   <div className={styles.f_work_img}>
//                     <Image src={Consistent} className={styles.consistentimg} alt="" />
//                   </div>
//                 </div>
//                 <div className={styles.s_work}>
//                   <div className={styles.work_heading}>
//                     Consistent
//                     <br />
//                     App Systm
//                   </div>
//                   <div className={styles.work_description}>
//                     Our Virtual assistant can handle all your budget management
//                   </div>
//                   <div className={styles.s_work_img}>
//                     <Image src={AI} className={styles.AIimg} alt="" />
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.experience}>

//                 <div className={styles.s_work}>
//                   <div className={styles.work_heading}>
//                     Consisten
//                     <br />
//                     App Systm
//                   </div>
//                   <div className={styles.work_description}>
//                     Our Virtual assistant can handle all your budget management
//                   </div>
//                   <div className={styles.s_work_img}>
//                     <Image src={AI} className={styles.AIimg} alt="" />
//                   </div>
//                 </div>
//                 <div className={styles.f_work}>
//                   <div className={styles.work_heading}>
//                     Consisten
//                     <br />
//                     App Systm
//                   </div>
//                   <div className={styles.work_description}>
//                     Our Virtual assistant can handle all your budget management
//                   </div>
//                   <div className={styles.f_work_img}>
//                     <Image src={Consistent} className={styles.consistentimg} alt="" />
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.experience}>
//                 <div className={styles.f_work}>
//                   <div className={styles.work_heading}>
//                     Consisten
//                     <br />
//                     App Systm
//                   </div>
//                   <div className={styles.work_description}>
//                     Our Virtual assistant can handle all your budget management
//                   </div>
//                   <div className={styles.f_work_img}>
//                     <Image src={Consistent} className={styles.consistentimg} alt="" />
//                   </div>
//                 </div>
//                 <div className={styles.s_work}>
//                   <div className={styles.work_heading}>
//                     Consisten
//                     <br />
//                     App Systm
//                   </div>
//                   <div className={styles.work_description}>
//                     Our Virtual assistant can handle all your budget management
//                   </div>
//                   <div className={styles.s_work_img}>
//                     <Image src={AI} className={styles.AIimg} alt="" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div id="API" className="tabcontent">
//               <h3>API</h3>
//               <div>Some API this fine day!</div>
//             </div>
//             <div id="App" className="tabcontent">
//               <h3>App</h3>
//               <div></div>
//             </div>
//             <div id="web" className="tabcontent">
//               <h3>web</h3>
//               <div>Who we are and what we do.</div>
//             </div>
//             <div id="software" className="tabcontent">
//               <h3>Software</h3>
//               <div>Who we are and what we do.</div>
//             </div>
//             <div id="hosting" className="tabcontent">
//               <h3>hosting</h3>
//               <div>Who we are and what we do.</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={global.Side}></div>
//     </div>
//   );
// }







"use client";

import { useState } from "react";
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
  const [activeTab, setActiveTab] = useState("UI");

  const openPage = (pageName) => {
    setActiveTab(pageName);
  };

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
              {/* Tab Buttons */}
              <button
                className={`${styles.tabButton} ${activeTab === "UI" ? styles.activeTab : ""
                  }`}
                onClick={() => openPage("UI")}
              >
                UI/UIX
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === "API" ? styles.activeTab : ""
                  }`}
                onClick={() => openPage("API")}
              >
                API Dev
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === "App" ? styles.activeTab : ""
                  }`}
                onClick={() => openPage("App")}
              >
                App & IOS
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === "web" ? styles.activeTab : ""
                  }`}
                onClick={() => openPage("web")}
              >
                Web Dev
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === "software" ? styles.activeTab : ""
                  }`}
                onClick={() => openPage("software")}
              >
                Software App
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === "hosting" ? styles.activeTab : ""
                  }`}
                onClick={() => openPage("hosting")}
              >
                Hosting
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className={styles.content}>
            {/* UI/UIX Content */}
            <div
              id="UI"
              className={`${styles.tabContent} ${activeTab === "UI" ? styles.tabContentActive : ""
                }`}
            >
              <div className={styles.experience}>
                <div className={styles.f_work}>
                  <div className={styles.work_heading}>
                    Consistent
                    <br />
                    App System
                  </div>
                  <div className={styles.work_description}>
                    Our Virtual assistant can handle all your budget management
                  </div>
                  <div className={styles.f_work_img}>
                    <Image
                      src={Consistent}
                      className={styles.consistentimg}
                      alt="Consistent App System"
                    />
                  </div>
                </div>
                <div className={styles.s_work}>
                  <div className={styles.work_heading}>
                    Consistent
                    <br />
                    App System
                  </div>
                  <div className={styles.work_description}>
                    Our Virtual assistant can handle all your budget management
                  </div>
                  <div className={styles.s_work_img}>
                    <Image
                      src={AI}
                      className={styles.AIimg}
                      alt="AI Assistance"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.experience}>
                <div className={styles.s_work}>
                  <div className={styles.work_heading}>
                    Consistent
                    <br />
                    App System
                  </div>
                  <div className={styles.work_description}>
                    Our Virtual assistant can handle all your budget management
                  </div>
                  <div className={styles.s_work_img}>
                    <Image
                      src={AI}
                      className={styles.AIimg}
                      alt="AI Assistance"
                    />
                  </div>
                </div>
                <div className={styles.f_work}>
                  <div className={styles.work_heading}>
                    Consistent
                    <br />
                    App System
                  </div>
                  <div className={styles.work_description}>
                    Our Virtual assistant can handle all your budget management
                  </div>
                  <div className={styles.f_work_img}>
                    <Image
                      src={Consistent}
                      className={styles.consistentimg}
                      alt="Consistent App System"
                    />
                  </div>
                </div>

              </div>
              <div className={styles.experience}>
                <div className={styles.f_work}>
                  <div className={styles.work_heading}>
                    Consistent
                    <br />
                    App System
                  </div>
                  <div className={styles.work_description}>
                    Our Virtual assistant can handle all your budget management
                  </div>
                  <div className={styles.f_work_img}>
                    <Image
                      src={Consistent}
                      className={styles.consistentimg}
                      alt="Consistent App System"
                    />
                  </div>
                </div>
                <div className={styles.s_work}>
                  <div className={styles.work_heading}>
                    Consistent
                    <br />
                    App System
                  </div>
                  <div className={styles.work_description}>
                    Our Virtual assistant can handle all your budget management
                  </div>
                  <div className={styles.s_work_img}>
                    <Image
                      src={AI}
                      className={styles.AIimg}
                      alt="AI Assistance"
                    />
                  </div>
                </div>
              </div>
              {/* Additional Content Sections as Needed */}
            </div>

            {/* API Dev Content */}
            <div
              id="API"
              className={`${styles.tabContent} ${activeTab === "API" ? styles.tabContentActive : ""
                }`}
            >
              <h3>API Development</h3>
              <div>Details about API Development services.</div>
            </div>

            {/* App & IOS Content */}
            <div
              id="App"
              className={`${styles.tabContent} ${activeTab === "App" ? styles.tabContentActive : ""
                }`}
            >
              <h3>App & IOS Development</h3>
              <div>Details about App & IOS Development services.</div>
            </div>

            {/* Web Dev Content */}
            <div
              id="web"
              className={`${styles.tabContent} ${activeTab === "web" ? styles.tabContentActive : ""
                }`}
            >
              <h3>Web Development</h3>
              <div>Details about Web Development services.</div>
            </div>

            {/* Software App Content */}
            <div
              id="software"
              className={`${styles.tabContent} ${activeTab === "software" ? styles.tabContentActive : ""
                }`}
            >
              <h3>Software Applications</h3>
              <div>Details about Software Application services.</div>
            </div>

            {/* Hosting Content */}
            <div
              id="hosting"
              className={`${styles.tabContent} ${activeTab === "hosting" ? styles.tabContentActive : ""
                }`}
            >
              <h3>Hosting Services</h3>
              <div>Details about Hosting Services.</div>
            </div>
          </div>
        </div>
      </div>
      <div className={global.Side}></div>
    </div>
  );
}
