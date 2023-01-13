import className from "classnames/bind";
const cx = className.bind(styles);
import styles from "./casetudy.module.scss";
import groupCase3 from "../../../../../public/CaseStudy/groupCase3.svg";
import groupCase5_ViewMobile from "../../../../../public/CaseStudy/groupCase5_ViewMobile.svg";

import Image from "next/image";
const Case3 = ({ viewMobile }) => {
  return (
    <div className={cx("case")}>
      <div className={cx("row", "content")}>
        <div className={cx("col-lg-6", "content1")}>
          <h1>Problem</h1>
          <ul>
            <li>
              <p>Hundreds of arrival notices to process with different formats daily</p>
            </li>

            <li>
              <p>Repeated and time-consuming task</p>
            </li>
          </ul>
        </div>
        <div className={cx("col-lg-6", "content2")}>
          <h1>Result</h1>
          <ul>
            <li>
              <p>
                Reduce <span>90%</span> processing time​
                <span style={{ visibility: "hidden" }}>this is the draft sentense</span>
              </p>
            </li>
            <li>
              <p >
                <span>3000</span> hours saved to workers annually
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("diagram")}>
        <Image src={viewMobile ? groupCase5_ViewMobile : groupCase3} alt={groupCase3} />
      </div>
    </div>
  );
};
export default Case3;
