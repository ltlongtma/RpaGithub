import className from "classnames/bind";
const cx = className.bind(styles);
import styles from "./casetudy.module.scss";
import groupCase4 from "../../../../../public/CaseStudy/groupCase4.svg";
import groupCase4_ViewMobile from "../../../../../public/CaseStudy/groupCase4_ViewMobile.svg";

import Image from "next/image";

const Case4 = ({ viewMobile }) => {
  return (
    <div className={cx("case")}>
      <div className={cx("row", "content")}>
        <div className={cx("col-lg-6", "content1")}>
          <h1>Problem</h1>
          <ul>
            <li>
              <p>Debts need to be checked to remind customers regularly​</p>
            </li>
            <li>
              <p>Overdue debts may be missed sometime</p>
            </li>
          </ul>
        </div>
        <div className={cx("col-lg-6", "content2")}>
          <h1>Result</h1>
          <ul>
            <li>
              <p>
                <span>2500</span>
                <span style={{ color: "black", fontWeight: 600 }}></span> hours returned to office
                workers annually
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("diagram")} >
        <Image src={viewMobile ? groupCase4_ViewMobile : groupCase4} alt={groupCase4} />
      </div>
    </div>
  );
};
export default Case4;
