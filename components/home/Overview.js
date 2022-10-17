import * as React from "react";
import styles from "../../styles/Overview.module.scss";
import className from "classnames/bind";
import Image from "next/image";
import icon from "../../public/icons-overview1.png";
import icon2 from "../../public/icons-overview2.png";

const cx = className.bind(styles);
function Overview() {
  return (
    <div className={cx("container")}>
      <div className={cx("wrap")}>
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

      <div className={cx("wrap1")}>
        <Image src={icon} />
      </div>
    </div>
  );
}
export default Overview;
