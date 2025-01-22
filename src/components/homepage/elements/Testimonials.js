import styles from "./css/Testimonials.module.css"
import global from "./css/Global.module.css"
import Testimonialbox from "./utils/Testimonialbox"
import { useMemo } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

function Testimonials({ width }) {
  const list = useMemo(
    () => [
      {
        name: "Somerville Dental",
        context:
          "The management software tool that I reviewed is highly effective in managing projects, tasks, and team communication. It has a user-friendly interface and provides excellent collaboration features. The customizable dashboard allows quick access to all the important information, and the auto-assignment and reminder features help keep everyone on track. The tool's analytics section offers insightful reports to track progress and performance. Overall, I think this management software tool is a great option for teams and businesses looking to streamline their workflows and improve productivity.",
        position: "Dental Practice",
      },
      {
        name: "Jaxon Easton",
        context:
          "The management software tool that I reviewed is highly effective in managing projects, tasks, and team communication. It has a user-friendly interface and provides excellent collaboration features. The customizable dashboard allows quick access to all the important information, and the auto-assignment and reminder features help keep everyone on track. The tool's analytics section offers insightful reports to track progress and performance. Overall, I think this management software tool is a great option for teams and businesses looking to streamline their workflows and improve productivity.",
        position: "Production Manager",
      },
      {
        name: "Jaxon Easton",
        context:
          "The management software tool that I reviewed is highly effective in managing projects, tasks, and team communication. It has a user-friendly interface and provides excellent collaboration features. The customizable dashboard allows quick access to all the important information, and the auto-assignment and reminder features help keep everyone on track. The tool's analytics section offers insightful reports to track progress and performance. Overall, I think this management software tool is a great option for teams and businesses looking to streamline their workflows and improve productivity.",
        position: "Production Manager",
      },
      {
        name: "Jaxon Easton",
        context:
          "The management software tool that I reviewed is highly effective in managing projects, tasks, and team communication. It has a user-friendly interface and provides excellent collaboration features. The customizable dashboard allows quick access to all the important information, and the auto-assignment and reminder features help keep everyone on track. The tool's analytics section offers insightful reports to track progress and performance. Overall, I think this management software tool is a great option for teams and businesses looking to streamline their workflows and improve productivity.",
        position: "Production Manager",
      },
      {
        name: "Jaxon Easton",
        context:
          "The management software tool that I reviewed is highly effective in managing projects, tasks, and team communication. It has a user-friendly interface and provides excellent collaboration features. The customizable dashboard allows quick access to all the important information, and the auto-assignment and reminder features help keep everyone on track. The tool's analytics section offers insightful reports to track progress and performance. Overall, I think this management software tool is a great option for teams and businesses looking to streamline their workflows and improve productivity.",
        position: "Production Manager",
      },
      {
        name: "Jaxon Easton",
        context:
          "The management software tool that I reviewed is highly effective in managing projects, tasks, and team communication. It has a user-friendly interface and provides excellent collaboration features. The customizable dashboard allows quick access to all the important information, and the auto-assignment and reminder features help keep everyone on track. The tool's analytics section offers insightful reports to track progress and performance. Overall, I think this management software tool is a great option for teams and businesses looking to streamline their workflows and improve productivity.",
        position: "Production Manager",
      },
    ],
    []
  )
  return ( 
    <div className={global.Container}>
      <div className={global.Side}>

      </div>
      <div className={styles.Main}>
        <div className={styles.Text}>
          <div className={styles.heading}>-&nbsp;Review</div>
          <div className={styles.MainTitle}>
            <div>Thousands of rave reviews</div>
            <div className={global.HighLightSemiPurple}>
              {" "}
            </div>
          </div>
        </div>
        <div className={styles.Slider}>
          <Swiper
            style={{ display: "flex", justifyContent: "center" }}
            loop={true}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              700: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1020: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1620: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay]}
          >
            {list.map((bop, i) => (
              <SwiperSlide key={i}>
                <Testimonialbox
                  key={i}
                  name={bop.name}
                  context={bop.context}
                  position={bop.position}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.Slider}>
          <Swiper
            style={{ display: "flex", justifyContent: "center", marginBottom:'100px' }}
            loop={true}
            className="mySwiper"
            autoplay={{
              delay: 1700,
              disableOnInteraction: false,
            }}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              1020: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1620: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay]}
          >
            {list.map((bop, i) => (
              <SwiperSlide key={i}>
                <Testimonialbox
                  key={i}
                  name={bop.name}
                  context={bop.context}
                  position={bop.position}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={global.Side}>

      </div>
    </div>
  )
}

export default Testimonials
