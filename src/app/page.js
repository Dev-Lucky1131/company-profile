"use client";

import Business from "@/components/homepage/elements/Business";
import Case from "@/components/homepage/elements/Case";
import Features from "@/components/homepage/elements/Features";
import Footer from "@/components/homepage/elements/Footer";
import Growth from "@/components/homepage/elements/Growth";
import Hero from "@/components/homepage/elements/Hero";
import Software from "@/components/homepage/elements/Software";
import Review from "@/components/homepage/elements/Reviews";
import Schedule from "@/components/homepage/elements/Schedule";
import Testimonials from "@/components/homepage/elements/Testimonials";
import { useElementSize } from "@mantine/hooks";
import styles from "./Main.module.css";
import '@coreui/coreui/dist/css/coreui.min.css'; // CoreUI's CSS


function Page() {
  const main = {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  };

  const container = {
    display: "flex",
    width: "clamp(1px,100vw,1920px)",
    minHeight: "100vh",
    justifyContent: "space-between",
    flexDirection: "column",
  };

  const { width, ref } = useElementSize();

  return (
    <div style={main}>
      <div style={container} className={styles.Cont} ref={ref}>
        <Hero width={width} />
        <Business width={width} />
        <Growth width={width} />
        <Software width={width} />
        <Features width={width} />
        <Case width={width} />
        <Review width={width} />
        <Testimonials width={width} />
        <Schedule width={width} />
        <Footer width={width} />
      </div>
    </div>
  );
}

export default Page;
