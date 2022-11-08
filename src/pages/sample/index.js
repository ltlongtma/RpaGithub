import gsap from "gsap";
import React, { useEffect } from "react";
import AIML from "../home/components/AIML";
import CaseStudy from "../home/components/CaseStudy";
import Contact from "../home/components/Contact";
import HighLight from "../home/components/HighLight";
import Overview from "../home/components/Overview";
import RpaProcess from "../home/components/Process";
import Solutions from "../home/components/Solutions";

export default function Sample() {
  useEffect(() => {
    const slides = document.querySelectorAll("section");
    const container = document.querySelector("#panelWrap");
    let dots = document.querySelector(".dots");
    let toolTips = document.querySelectorAll(".toolTip");
    let oldSlide = 0;
    let activeSlide = 0;
    let navDots = [];
    let dur = 0.6;
    let offsets = [];
    let toolTipAnims = [];
    let ih = window.innerHeight;
  
    document.querySelector("#upArrow").addEventListener("click", slideAnim);
    document.querySelector("#downArrow").addEventListener("click", slideAnim);

    // create nev dots and add tooltip listeners
    for (let i = 0; i < slides.length; i++) {
      let tl = gsap.timeline({ paused: true, reversed: true });
      gsap.set(slides[i], { backgroundColor: colorArray[i] });
      let newDot = document.createElement("div");
      newDot.className = "dot";
      newDot.index = i;
      navDots.push(newDot);
      newDot.addEventListener("click", slideAnim);
      newDot.addEventListener("mouseenter", dotHover);
      newDot.addEventListener("mouseleave", dotHover);
      dots.appendChild(newDot);
      offsets.push(-slides[i].offsetTop);
      tl.to(toolTips[i], 0.25, { opacity: 1, ease: Linear.easeNone });
      toolTipAnims.push(tl);
    }

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
        // up/down arrow clicks
        if (this.id === "downArrow" || this.id === "upArrow") {
          activeSlide = this.id === "downArrow" ? (activeSlide += 1) : (activeSlide -= 1);
          // click on a dot
        } else if (this.className === "dot") {
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
      allowNativeTouchScrolling: false,
      bounds: "#masterWrap",
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
      dragMe[0].vars.snap = offsets;
    }

    // tween the dot animation as the draggable moves
    function tweenDot() {
      gsap.set(dotAnim, {
        time: Math.abs(gsap.getProperty(container, "y") / ih) + 1,
      });
    }
  }, []);

  return (
    <div className="hideMe">
      <svg
        id="downArrow"
        className="arrow1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <g strokeLinejoin="round" strokeLinecap="round">
          <circle r="46" cx="50" cy="50" />
          <polyline points="25 40, 50 70, 75 40"></polyline>
        </g>
      </svg>
      <svg id="upArrow" className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <g strokeLinejoin="round" strokeLinecap="round">
          <circle r="46" cx="50" cy="50" />
          <polyline points="25 60, 50 30, 75 60"></polyline>
        </g>
      </svg>

      <div id="masterWrap">
        <div id="panelWrap">
          <section>
            <HighLight />
          </section>
          <section>
            <Overview />
          </section>
          <section>
            <AIML />
          </section>
          <section>
            <RpaProcess />
          </section>
          <section>
            <Solutions />
          </section>
          <section>
            <CaseStudy />
          </section>
          <section>
            <Contact />
          </section>
        </div>
      </div>

      <div className="dots"></div>
      {/* <div className="toolTips">
        <div className="toolTip">Slider Control</div>
        <div className="toolTip">Powered by GSAP</div>
        <div className="toolTip">Side animation</div>
        <div className="toolTip">Random dog</div>
        <div className="toolTip">Sliders are useful</div>
        <div className="toolTip">Follow on Twitter</div>
      </div> */}
    </div>
  );
}
