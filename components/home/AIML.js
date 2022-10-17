import * as React from "react";
import styles from "../../styles/AIML.module.scss";
import className from "classnames/bind";
import Image from "next/image";
import AnalysisImage from "../../public/AIMLImage.png";
import icon2 from "../../public/AIMLIcon.png";

const cx = className.bind(styles);
function AIML() {
  return (
    <div className={cx("container")}>
      <div className={cx("triangle")}>
        <div className={cx("triangle-left")}></div>
        <div className={cx("triangle-right")}></div>
      </div>
      <div className={cx("AIMLContent")}>
        <div className={cx("head")}>
          <div>
            <Image src={icon2} />
          </div>
          <h1 className={cx("title")}>Empowered by TMA AI/ML ecosystem</h1>
        </div>
        <div className={cx("body")}>
          <div>
            <Image src={AnalysisImage} />
          </div>
          <div className={cx("experience")}>
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
                  Engineers AI/ML & Data Analytics
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
  );
}
export default AIML;
