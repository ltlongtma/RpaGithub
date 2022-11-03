import Head from "next/head";
import HighLight from "./components/HighLight/index";
import Overview from "./components/Overview/index";
import AIML from "./components/AIML/index";
import RpaProcess from "./components/Process/index";
import Solutions from "./components/Solutions/index";
import CaseStudy from "./components/CaseStudy/index";
import Contact from "./components/Contact/index";
import styles from "./home.module.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    let section1Height = document.getElementById("highLight").getBoundingClientRect().height;
    let section2Height = document.getElementById("overview").getBoundingClientRect().height;
    let section3Height = document.getElementById("aiml").getBoundingClientRect().height;
    let section4Height = document.getElementById("process").getBoundingClientRect().height;
    let section5Height = document.getElementById("solutions").getBoundingClientRect().height;
    let section6Height = document.getElementById("caseStudy").getBoundingClientRect().height;
    let section7Height = document.getElementById("contact").getBoundingClientRect().height;

    let pageYOffset = window.pageYOffset;
    console.log("E  >", pageYOffset);

    const handleScroll = (e) => {
      // window.scrollTo({
      //   top: section1Height,
      //   left: 0,
      //   behavior: "smooth",
      // });
      if (pageYOffset == 0) {
        document.getElementById("overview").scrollIntoView();
      } else if (pageYOffset == section1Height) {
        document.getElementById("aiml").scrollIntoView();
      }

      // console.log("E >>", window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   let panels = gsap.utils.toArray(".panel"),
  //     scrollTween;

  //   function goToSection(i) {
  //     scrollTween = gsap.to(window, {
  //       scrollTo: { y: i * innerHeight, autoKill: false },
  //       duration: 1,
  //       onComplete: () => (scrollTween = null),
  //       overwrite: true,
  //     });
  //   }

  //   panels.forEach((panel, i) => {
  //     ScrollTrigger.create({
  //       trigger: panel,
  //       start: "top bottom",
  //       end: "+=200%",
  //       onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
  //     });
  //   });

  //   // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
  //   ScrollTrigger.create({
  //     start: 0,
  //     end: "max",
  //     snap: 1 / (panels.length - 1),
  //   });
  // }, []);

  return (
    <div>
      <Head>
        <title>RPA_TMA</title>
        <link rel="icon" href="/TmaLogo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Generated by DC22" />
      </Head>
      <main>
        <div className={styles.container} id="wrap">
          <section className="panel highLight" id="highLight">
            <HighLight />
          </section>
          <section className="panel overview" id="overview">
            <Overview />
          </section>
          <section className="panel aiml" id="aiml">
            <AIML />
          </section>
          <section className="panel rpaProcess" id="process">
            <RpaProcess />
          </section>
          <section className="panel solutions" id="solutions">
            <Solutions />
          </section>
          <section className="panel caseStudy" id="caseStudy">
            <CaseStudy />
          </section>
          <section className="panel contact" id="contact">
            <Contact />
          </section>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
