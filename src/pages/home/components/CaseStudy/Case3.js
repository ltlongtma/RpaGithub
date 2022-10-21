import className from "classnames/bind";
const cx = className.bind(styles);
import styles from "./casetudy.module.scss";
import groupCase3 from "../../../../../public/CaseStudy/groupCase3.svg";
import Image from "next/image";
export const Case3 = () => {
  return (
    <div className={cx("case")}>
      <div className={cx("content")}>
        <div className={cx("content1")}>
          <h1>Problem</h1>
          <ul>
            <li>
              Hundreds of arrival notices to process with different format from
              multiple partners daily
            </li>
            <li>Repeated and time-consuming task</li>
          </ul>
        </div>
        <div className={cx("content2")}>
          <h1>Result</h1>
          <ul>
            <li>
              Reduce <span>90%</span> processing time​
            </li>
            <li>
              <span>3000</span> hours saved to workers annually
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
