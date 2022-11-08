import * as React from "react";
import styles from "./AIML.module.scss";
import className from "classnames/bind";
import Image from "next/image";
import icon2 from "../../../../../public/AIMLIcon.svg";
import maskGroupAIML from "../../../../../public/maskGroupAIML.svg";
import maskTopAIML from "../../../../../public/maskTopAIML.svg";
import text from "../../../../../public/AnaText.svg";
import voice from "../../../../../public/AnaVoice.svg";
import image from "../../../../../public/AnaImageVideo.svg";
import data from "../../../../../public/AnaData.svg";
import anaImage from "../../../../../public/anaImage.svg";
import anaLeftImage from "../../../../../public/anaLeftImage.svg";

const cx = className.bind(styles);
const AIML = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("triangle")}>
        <div className={cx("triangle-left")}></div>
        <div className={cx("triangle-right")}></div>
      </div>
      <div className={cx("AIMLContent")}>
        <div className={cx("head")}>
          <div>
            <Image src={icon2} alt="image" />
          </div>
          <h1 className={cx("title")}>Empowered by TMA AI/ML ecosystem</h1>
        </div>
        <div className={cx("body")}>
          <div className={cx("left")}>
            <Image src={anaLeftImage} alt="image" />
          </div>
          <div className={cx("center")}>
            <div className={cx("top")}>
              <div className={cx(["left", "icons"])}>
                <Image src={image} alt="image" />
              </div>
              <div className={cx(["right", "icons"])}>
                <Image src={text} alt="image" />
              </div>
            </div>
            <div className={cx("image")}>
              <Image src={anaImage} alt="image" />
            </div>

            <div className={cx("bot")}>
              <div className={cx(["left", "icons"])}>
                <Image src={data} alt="image" />
              </div>
              <div className={cx(["right", "icons"])}>
                <Image src={voice} alt="image" />
              </div>
            </div>
          </div>
          <div className={cx("right")}>
            <div>
              <div className={cx("expandTop10")}>
                <h2>
                  <span className={cx("span")}>Top </span>10
                  <span className={cx("overviewContent")}>
                    {" "}
                    AI & IoT Enterprises
                  </span>
                </h2>
              </div>
              <div className={cx("expand400")}>
                <h2>
                  400<span className={cx("span")}>+ </span>
                  <span className={cx("overviewContent")}>
                    AI/ML & Data Engineers
                  </span>
                </h2>
              </div>
              <div className={cx("expand10Years")}>
                <h2>
                  10 <span className={cx("span")}>Years </span>
                  <span className={cx("overviewContent")}>of Experience</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("maskTop")}>
        <Image src={maskTopAIML} alt="maskTopAIML" />
      </div>
      <div className={cx("maskBottom")}>
        <Image src={maskGroupAIML} alt="maskGroupAIML" />
      </div>
    </div>
  );
};
export default AIML;
