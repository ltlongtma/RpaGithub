import className from "classnames/bind";
const cx = className.bind(styles);
import styles from "./casetudy.module.scss";
import Image from "next/image";
import groupCase1 from "../../../../../public/CaseStudy/groupCase1.svg";

const Case1_2 = () => {
  return (
    <div className={cx("case")}>
      <div className={cx("content")}>
        <div className={cx("content1")}>
          <h1>Problem</h1>
          <ul>
            <li>
              <span>10</span> minutes to get and enter information for
              <span> 1</span> CV into the recruitment system with multiple
              stages and applications
            </li>
            <li>
              <span>1000</span> CVs to be processed per week
            </li>
          </ul>
        </div>
        <div className={cx("content2")}>
          <h1>Result</h1>
          <ul>
            <li>
              <span>8000</span> hours saved for Human Resource Department
              annually
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
