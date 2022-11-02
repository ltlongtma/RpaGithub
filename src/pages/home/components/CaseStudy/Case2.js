import className from "classnames/bind";
const cx = className.bind(styles);
import styles from "./casetudy.module.scss";
import groupCase2 from "../../../../../public/CaseStudy/groupCase2.svg";
import Image from "next/image";

const Case2_2 = () => {
  return (
    <div className={cx("case")}>
      <div className={cx("content")}>
        <div className={cx("content1")}>
          <h1>Problem</h1>
          <ul>
            <li>
              Complex process, need to manipulate files in different systems​
            </li>
            <li>Human errors may occur when collating large data daily</li>
          </ul>
        </div>
        <div className={cx("content2")}>
          <h1>Result</h1>
          <ul >
            <li>
              <span>12000</span> hours returned in year one{" "}
              <span style={{ lineHeight: 0, visibility: "hidden" }}>
                This is the draft sentense
              </span>
            </li>
            <li>
              <span>100%</span> accuracy without manual effort
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("diagram")}>
        <Image src={groupCase2} alt={groupCase2} />
      </div>
    </div>
  );
};
export default Case2_2;
