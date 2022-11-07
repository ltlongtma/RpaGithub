import Head from "next/head";
import HighLight from "./components/HighLight/index";
import Overview from "./components/Overview/index";
import AIML from "./components/AIML/index";
import RpaProcess from "./components/Process/index";
import Solutions from "./components/Solutions/index";
import CaseStudy from "./components/CaseStudy/index";
import Contact from "./components/Contact/index";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import className from "classnames/bind";
import styles from "./home.module.scss";

const cx = className.bind(styles);
export default function Home() {
  // useEffect(() => {
  //   let section1Height = document
  //     .getElementById("highLight")
  //     .getBoundingClientRect().height;
  //   let section2Height = document
  //     .getElementById("overview")
  //     .getBoundingClientRect().height;
  //   let section3Height = document
  //     .getElementById("aiml")
  //     .getBoundingClientRect().height;
  //   let section4Height = document
  //     .getElementById("process")
  //     .getBoundingClientRect().height;
  //   let section5Height = document
  //     .getElementById("solutions")
  //     .getBoundingClientRect().height;
  //   let section6Height = document
  //     .getElementById("caseStudy")
  //     .getBoundingClientRect().height;
  //   let section7Height = document
  //     .getElementById("contact")
  //     .getBoundingClientRect().height;

  //   // let pageYOffset = window.pageYOffset;
  //   // console.log("E  >", pageYOffset);

  //   const handleScroll = (e) => {
  //     if (window.pageYOffset > 0 && window.pageYOffset <= 500) {
  //       window.scrollTo({
  //         top: document.getElementById("overview").offsetTop,
  //       });
  //     } else if (
  //       window.pageYOffset > 100 &&
  //       window.pageYOffset < section1Height
  //     ) {
  //       window.scrollTo({
  //         top: 0,
  //       });
  //     }
  //     else if (
  //       window.pageYOffset >= section1Height - 0.5 &&
  //       window.pageYOffset < section1Height + 300
  //     ) {
  //       window.scrollTo({
  //         top: section1Height + section2Height + 300,
  //       });
  //     }
  //     // else if (
  //     //   window.pageYOffset > section1Height + section2Height &&
  //     //   window.pageYOffset < section1Height + (section2Height + (section2Height / 100) * 70)
  //     // ) {
  //     //   window.scrollTo({
  //     //     top: section1Height,
  //     //   });
  //     // }
  //     // console.log("pageYOffset >>", window.pageYOffset);

  //     // console.log("total 1+2 >>", section1Height + section2Height);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const slides = document.querySelectorAll("section");
    const container = document.querySelector("#panelWrap");
    let duration = 0.6;
    let offsets = [];
    let oldSlide = 0;
    let activeSlide = 0;
    let ih = window.innerHeight;

    const dotAnim = gsap.timeline({ paused: true });
    dotAnim.to(
      ".dot",
      {
        stagger: { each: 1, yoyo: true, repeat: 1 },
        scale: 2.1,
        rotation: 0.1,
        ease: "none",
      },
      0.5
    );
    dotAnim.time(1);
    function slideAnim(e) {
      oldSlide = activeSlide;
      // dragging the panels
      if (this.id === "dragger") {
        activeSlide = offsets.indexOf(this.endY);
      } else {
        if (gsap.isTweening(container)) {
          return;
        }
        // up/down arrow clicks
        // if (this.id === "downArrow" || this.id === "upArrow") {
        //   activeSlide =
        //     this.id === "downArrow" ? (activeSlide += 1) : (activeSlide -= 1);
        //   // click on a dot
        // } else if (this.className === "dot") {
        //   activeSlide = this.index;
        //   // scrollwheel
        // } else {
        //   activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1);
        // }
      }
      // make sure we're not past the end or beginning slide
      activeSlide = activeSlide < 0 ? 0 : activeSlide;
      activeSlide =
        activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
      if (oldSlide === activeSlide) {
        return;
      }
      // if we're dragging we don't animate the container
      if (this.id != "dragger") {
        gsap.to(container, {
          y: offsets[activeSlide],
          ease: "power2.inOut",
          duration: 0.6,
          onUpdate: tweenDot,
        });
      }
    }

    gsap.set(".hideMe", { opacity: 1 });
    window.addEventListener("wheel", slideAnim);
    window.addEventListener("resize", newSize);
    // resize all panels and refigure draggable snap array
function newSize() {
  offsets = [];
  ih = window.innerHeight;
  gsap.set("#panelWrap", { height: slides.length * ih });
  gsap.set(slides, { height: ih });
  for (let i = 0; i < slides.length; i++) {
    offsets.push(-slides[i].offsetTop);
  }
  gsap.set(container, { y: offsets[activeSlide] });
  dragMe[0].vars.snap = offsets;
}
    // make the container a draggable element
    let dragMe = Draggable.create(container, {
      type: "y",
      edgeResistance: 1,
      onDragEnd: slideAnim,
      onDrag: tweenDot,
      onThrowUpdate: tweenDot,
      snap: offsets,
      inertia: true,
      zIndexBoost: false,
      allowNativeTouchScrolling: false,
      bounds: "#masterWrap",
    });

    dragMe[0].id = "dragger";
    function tweenDot() {
      gsap.set(dotAnim, {
        time: Math.abs(gsap.getProperty(container, "y") / ih) + 1,
      });
    }
  }, []);

  return (
    <div>
      <Head>
        <title>RPA_TMA</title>
        <link rel="icon" href="/TmaLogo.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content="Generated by DC22" />
      </Head>
      <main>
        <div id="masterWrap">
          <div className={cx("container")} id="panelWrap">
            <section className={cx("hightLight ", "panel")} id="highLight">
              <HighLight />
            </section>
            <section className={cx("overview", "panel")} id="overview">
              <Overview />
            </section>
            <section className={cx("aiml", "panel")} id="aiml">
              <AIML />
            </section>
            <section className={cx("process", "panel")} id="process">
              <RpaProcess />
            </section>
            <section className={cx("solutions", "panel")} id="solutions">
              <Solutions />
            </section>
            <section className={cx("caseStudy", "panel")} id="caseStudy">
              <CaseStudy />
            </section>
            <section className={cx("contact", "panel")} id="contact">
              <Contact />
            </section>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
