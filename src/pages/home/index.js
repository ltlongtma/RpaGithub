import Head from "next/head";
import HighLight from "./components/HighLight/index";
import Overview from "./components/Overview/index";
import AIML from "./components/AIML/index";
import RpaProcess from "./components/Process/index";
import Solutions from "./components/Solutions/index";
import CaseStudy from "./components/CaseStudy/index";
import Contact from "./components/Contact/index";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/dist/Draggable";
export default function Home() {
  const [viewMobile, setViewMobile] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(Draggable);
    const slides = document.querySelectorAll("section");
    const container = document.querySelector("#panelWrap");
    let toolTips = document.querySelectorAll(".toolTip");
    let oldSlide = 0;
    let activeSlide = 0;
    let dots = document.querySelector(".dots");
    let navDots = [];
    let dur = 0.6;
    let offsets = [];
    let toolTipAnims = [];
    let ih = window.innerHeight;
    let iw = window.innerWidth;

    // create nev dots and add tooltip listeners
    for (let i = 0; i < slides.length; i++) {
      let tl = gsap.timeline({ paused: true, reversed: true });
      let newDot = document.createElement("div");
      newDot.className = "dot";
      newDot.index = i;
      navDots.push(newDot);
      newDot.addEventListener("click", slideAnim);
      newDot.addEventListener("mouseenter", dotHover);
      newDot.addEventListener("mouseleave", dotHover);
      dots.appendChild(newDot);
      offsets.push(-slides[i].offsetTop);
      tl.to(toolTips[i], 0.25, { opacity: 1, ease: "easeNone" });
      toolTipAnims.push(tl);
    }

    // get elements positioned
    gsap.set(".dots", { yPercent: -50 });
    gsap.set(".toolTips", { yPercent: -50 });
    if (iw < 992) {
      gsap.set(".dots", { display: "none" });
    }

    // side screen animation with nav dots
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

    // tooltips hovers
    function dotHover() {
      toolTipAnims[this.index].reversed()
        ? toolTipAnims[this.index].play()
        : toolTipAnims[this.index].reverse();
    }

    // figure out which of the 4 nav controls called the function
    function slideAnim(e) {
      oldSlide = activeSlide;
      // dragging the panels
      if (this.id === "dragger") {
        activeSlide = offsets.indexOf(this.endY);
      } else {
        if (gsap.isTweening(container)) {
          return;
        }

        if (this.className === "dot") {
          activeSlide = this.index;
          // scrollwheel
        } else {
          activeSlide = e.deltaY > 0 ? (activeSlide += 1) : (activeSlide -= 1);
        }
      }
      // make sure we're not past the end or beginning slide
      activeSlide = activeSlide < 0 ? 0 : activeSlide;
      activeSlide = activeSlide > slides.length - 1 ? slides.length - 1 : activeSlide;
      if (oldSlide === activeSlide) {
        return;
      }
      // if we're dragging we don't animate the container
      if (this.id != "dragger") {
        gsap.to(container, dur, {
          y: offsets[activeSlide],
          ease: "power2.inOut",
          onUpdate: tweenDot,
        });
      }
    }

    gsap.set(".hideMe", { opacity: 1 });
    window.addEventListener("wheel", slideAnim);
    window.addEventListener("resize", newSize);

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
      // allowNativeTouchScrolling: false,
      bounds: "#masterWrap",
      activeCursor: "grabbing",
      cursor: "auto",
      allowContextMenu: true,
      // dragClickables: true,
      // clickableTest: (e) => console.log("E >>", e),
    });

    dragMe[0].id = "dragger";
    newSize();

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
      // dragMe[0].vars.snap = offsets;
    }

    // tween the dot animation as the draggable moves
    function tweenDot() {
      gsap.set(dotAnim, {
        time: Math.abs(gsap.getProperty(container, "y") / ih) + 1,
      });
    }
  }, []);
  useEffect(() => {
    const iw = window.innerWidth;

    if (iw < 992) {
      setViewMobile(true);
    }
  }, []);
  return (
    <div>
      <Head>
        <title>RPA_TMA</title>
        <link rel="icon" href="/tmaLogoTitleBar.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Generated by DC22" />
      </Head>
      <main>
        <div className="hideMe">
          <div id="masterWrap">
            <div id="panelWrap">
              <section>
                <HighLight viewMobile={viewMobile} />
              </section>
              <section>
                <Overview />
              </section>
              <section>
                <AIML />
              </section>
              <section>
                <RpaProcess viewMobile={viewMobile} />
              </section>
              <section>
                <Solutions viewMobile={viewMobile} />
              </section>
              <section>
                <CaseStudy viewMobile={viewMobile} />
              </section>
              <section>
                <Contact />
              </section>
            </div>
          </div>

          <div className="dots"></div>
          <div className="toolTips">
            <div className="toolTip">RPA Center</div>
            <div className="toolTip">Overview</div>
            <div className="toolTip">AI/ML Ecosystem</div>
            <div className="toolTip">RPA Process</div>
            <div className="toolTip">RPA Solutions</div>
            <div className="toolTip">Case Studies</div>
            <div className="toolTip">Contact</div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
