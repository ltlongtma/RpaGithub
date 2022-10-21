import className from "classnames/bind";
const cx = className.bind(styles);
import styles from "./casetudy.module.scss";
import groupCase4 from "../../../../../public/CaseStudy/groupCase4.svg";
import Image from "next/image";

export const Case4 = () => {
  return (
    <div className={cx("case")}>
      <div className={cx("content")}>
        <div className={cx("content1")}>
          <h1>Problem</h1>
          <ul>
            <li>Debts need to be checked to remind customers regularly​</li>
            <li>Overdue debts may be missed sometime</li>
          </ul>
        </div>
        <div className={cx("content2")}>
          <h1>Result</h1>
          <ul>
            <li>
              <span>2500</span>
              <span style={{ color: "black", fontWeight: 600 }}>+</span> hours
              returned to office workers annually
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("diagram")}>
        <Image src={groupCase4} alt={groupCase4} />
      </div>
    </div>
  );
};
