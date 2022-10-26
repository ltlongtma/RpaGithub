import * as React from "react";
import styles from "./Overview.module.scss";
import className from "classnames/bind";
import Image from "next/image";
import iconAutomation from "../../../../../public/Overview-Automation.svg";
import iconBlueprism from "../../../../../public/Overview-Blueprism.svg";
import iconPowerAutomate from "../../../../../public/Overview-PowerAutomate.svg";
import iconUIpath from "../../../../../public/Overview-UIpath.svg";
import icon2 from "../../../../../public/icons-overview2.svg";

const cx = className.bind(styles);
const Overview = () => {
  // const handleScroll = () => {
  //   window.scrollTo({
  //     top: 2300,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <div className={cx("container")}>
      <div className={cx("wrapText")}>
        <div className={cx("logo")}>
          <Image src={icon2} alt="icon2" />
        </div>
        <div className={cx("description")}>
          <h1 className={cx("title")}>Overview </h1>
          <span>
            With a wide range of solution from AI/ML, document parsing, object detection and popular
            tools (Automation Anywhere, Ui Path, Power Automate, Blueprism), TMA RPA Center have
            provided automation solutions for a variety of industries, including finance, banking,
            logistics, human resources, and e-commerce.
          </span>
          <span>
            TMA RPA Center provides solutions for automation projects or dedicated teams for a full
            automation program with multiple projects.
          </span>
        </div>
        <div className={cx("experience")}>
          <div className={cx("expand")}>
            <h2>
              5 <span>Years</span>
            </h2>
            <div className={cx("overviewContent")}>of experience</div>
          </div>
          <div className={cx("expand")}>
            <h2>
              100<span>+</span>
            </h2>
            <div className={cx("overviewContent")}>developers</div>
          </div>
        </div>
      </div>
      <div className={cx("wrapImage")}>
        <div className={cx("leftImg")}>
          <Image src={iconAutomation} alt="icon" />

        </div>
        <div className={cx("centerImg")}>
          <div className={cx("topImage")}>
            <Image src={iconUIpath} alt="icon" />
          </div>
          <div className={cx("botImage")}>
            <Image src={iconPowerAutomate} alt="icon" />
          </div>
        </div>
        <div className={cx("rightImg")}>
          <Image src={iconBlueprism} alt="icon" />

        </div>
      </div>
    </div>
  );
};
export default Overview;
