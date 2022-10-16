import className from "classnames/bind";
const cx = className.bind(styles);
import styles from "./casetudy.module.scss";
import groupCase5 from "../../../public/CaseStudy/groupCase5.png";
import Image from "next/image";

export const Case5 = () => {
  return (
    <div className={cx("case")}>
      <div className={cx("content")}>
        <div className={cx("content1")}>
          <h1>Problem</h1>
          <ul>
            <li>Inventory needs to be checked and updated regularly​​</li>
            <li>Late notifications or human errors can result in losing sales</li>
          </ul>
        </div>
        <div className={cx("content2")}>
          <h1>Result</h1>
          <ul>
            <li>Inventory can be scheduled to check 24/7​</li>
            <li>
              <span>3500+</span> hours returned to office workers annually
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("diagram")}>
      <Image src={groupCase5} alt={groupCase5} />
        
      </div>
    </div>
  );
};
