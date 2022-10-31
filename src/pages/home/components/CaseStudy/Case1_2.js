import className from "classnames/bind";
const cx = className.bind(styles);
import styles from "./casetudy.module.scss";
import Image from "next/image";
import groupCase1 from "../../../../../public/CaseStudy/groupCase1.svg";

const Case1_2 = () => {
  return (
    <div className={cx("case")}>
      <div className={cx("content")} style={{ display: "flex" }}>
        <div className={cx("content")} style={{ width: "50%", lineHeight: "2vw" }}>
          <h1 style={{ margin: "2vw 0" }}>Problem</h1>
          <ul style={{ width: "89%", lineHeight: "2vw" }}>
            <li style={{ lineHeight: "3vw" }}>
              10 minutes to get and enter information for 1 CV into the recruitment system with
              multiple stages and applications
            </li>
            <li>1000 CVs to be processed per week</li>
          </ul>
        </div>
        <div className={cx("content2")} style={{ marginTop: 0, width: "50%" }}>
          <h1>Result</h1>
          <ul>
            <li style={{ position: "relative", top: "-0.6vw", lineHeight: "3vw" }}>
              <span>8000</span> hours saved for Human Resource Department annually
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("diagram")} style={{ marginTop: "6%" }}>
        <Image src={groupCase1} alt={groupCase1} />
      </div>
    </div>
  );
};
export default Case1_2;
