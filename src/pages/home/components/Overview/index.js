import * as React from "react";
import styles from "./Overview.module.scss";
import className from "classnames/bind";
import Image from "next/image";
import iconAutomation from "../../../../../public/Overview-Automation.png";
import iconBlueprism from "../../../../../public/Overview-Blueprism.png";
import iconPowerAutomate from "../../../../../public/Overview-PowerAutomate.png";
import iconUIpath from "../../../../../public/Overview-UIpath.png";
import icon2 from "../../../../../public/icons-overview2.png";

const cx = className.bind(styles);
export const Overview = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("wrapText")}>
        <div>
          <Image src={icon2} alt="icon2" />
        </div>
        <div className={cx("description")}>
          <h1 className={cx("title")}>Overview </h1>
          <span>
            With a wide range of solution from AI/ML, document parsing, object
            detection and popular tools (Automation Anywhere, Ui Path, Power
            Automate, Blueprism), TMA RPA Center have provided automation
            solutions for a variety of industries, including finance, banking,
            logistics, human resources, and e-commerce.
          </span>
          <span>
            TMA RPA Center provides solutions for automation projects or
            dedicated teams for a full automation program with multiple
            projects.
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
        <div className={cx("icons")}>
          <div className={cx("blueprismImage")}>
            <Image src={iconBlueprism} alt="icon" />
          </div>

          <div className={cx("UIpathPowerAuto")}>
            <div className={cx("topImage")}>
              <Image src={iconUIpath} alt="icon" />
            </div>
            <div className={cx("botImage")}>
              <Image src={iconPowerAutomate} alt="icon" />
            </div>
          </div>

          <div className={cx("automateImage")}>
            <Image src={iconAutomation} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};