import Head from "next/head";
import HighLight from "./components/HighLight/index";
import Overview from "./components/Overview/index";
import AIML from "./components/AIML/index";
import RpaProcess from "./components/Process/index";
import Solutions from "./components/Solutions/index";
import CaseStudy from "./components/CaseStudy/index";
import Contact from "./components/Contact/index";
import styles from "./home.module.scss";
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Home() {
  // gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   const components = document.querySelectorAll("#component");
  //   const container = document.querySelector("#container");
  //   gsap.to(components, {
  //     xPercent: -100 * (components.length - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: container,
  //       pin: true,
  //       scrub: 1,
  //       snap: 1 / (components.length - 1),
  //       end: () => "+=" + container.offsetHeight,
  //     },
  //   });
  // }, []);

  return (
    <div>
      <Head>
        <title>RPA_TMA</title>
        <link rel="icon" href="/TmaLogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Generated by DC22" />
      </Head>
      <main>
        <div className={styles.container} id="container">
          <div id="component">
            <HighLight />
          </div>
          <div id="component">
            <Overview />
          </div>
          <div id="component">
            <AIML />
          </div>
          <div id="component">
            <RpaProcess />
          </div>
          <div id="component">
            <Solutions />
          </div>
          <div id="component">
            <CaseStudy />
          </div>
          <div id="component">
            <Contact />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
