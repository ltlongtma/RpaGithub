import className from "classnames/bind";
const cx = className.bind(styles);
import styles from "./casetudy.module.scss";
import Image from "next/image";
import groupCase1 from "../../../../../public/CaseStudy/groupCase1.svg";

const Case1_2 = () => {
  return (
    <div className={cx("case")}>
      <div className={cx("row","content")}>
        <div className={cx("col-lg-6","content1")}>
          <h1>Problem</h1>
          <ul style={{ top: 0 }}>
            <li style={{ alignItems: "baseline" }}>
              <p style={{ position: "relative", top: "-1vw" }}>
                <span>10</span> minutes to get and enter information for 1 CV into the recruitment
                system with multiple stages and applications
              </p>
            </li>
            <li style={{ alignItems: "baseline" }}>
              <p style={{ position: "relative", top: "-1vw" }}>
                <span>1000</span> CVs to be processed per week
              </p>
            </li>
          </ul>
        </div>
        <div className={cx("col-lg-6","content2")}>
          <h1>Result</h1>
          <ul style={{ top: 0 }}>
            <li style={{ alignItems: "baseline" }}>
              <p style={{ position: "relative", top: "-1vw" }}>
                <span>8000</span> hours saved for Human Resource Department annually
              </p>
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
