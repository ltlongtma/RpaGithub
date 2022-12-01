import className from "classnames/bind";
const cx = className.bind(styles);
import styles from "./casetudy.module.scss";
import groupCase3 from "../../../../../public/CaseStudy/groupCase3.svg";
import Image from "next/image";
const Case3 = () => {
  return (
    <div className={cx("case")}>
      <div className={cx("content")}>
        <div className={cx("content1")}>
          <h1>Problem</h1>
          <ul style={{ top: 0 }}>
            <li style={{ alignItems: "baseline" }}>
              <p style={{ position: "relative", top: "-1.5vw" }}>
                Hundreds of arrival notices to process with different formats daily
              </p>
            </li>

            <li>
              <p style={{ position: "relative", top: "-1vw" }}>Repeated and time-consuming task</p>
            </li>
          </ul>
        </div>
        <div className={cx("content2")}>
          <h1>Result</h1>
          <ul style={{ top: 0 }}>
            <li style={{ alignItems: "flex-start", marginTop: "-1%" }}>
              <p style={{ position: "relative", top: "-1vw" }}>
                Reduce <span>90%</span> processing time​{" "}
                <div style={{ visibility: "hidden" }}>this is the draft sentense</div>
              </p>
            </li>
            <li style={{ marginTop: "3%" }}>
              <p style={{ position: "relative", top: "-1vw" }}>
                <span>3000</span> hours saved to workers annually
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("diagram")}>
        <Image src={groupCase3} alt={groupCase3} />
      </div>
    </div>
  );
};
export default Case3;
