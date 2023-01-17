import className from "classnames/bind";
const cx = className.bind(styles);
import styles from "./casetudy.module.scss";
import groupCase5 from "../../../../../public/CaseStudy/groupCase5.svg";
import groupCase5_ViewMobile from "../../../../../public/CaseStudy/groupCase5_ViewMobile.svg";
import Image from "next/image";

const Case5 = ({ viewMobile }) => {
  return (
    <div className={cx("case")}>
      <div className={cx("row", "content")}>
        <div className={cx("col-lg-6", "content1")}>
          <h1>Problem</h1>
          <ul>
            <li>Inventory needs to be checked and updated regularly​​</li>
            <li>Late notifications or human errors can result in losing sales</li>
          </ul>
        </div>
        <div className={cx("col-lg-6", "content2")}>
          <h1>Result</h1>
          <ul>
            <li>
              Inventory can be scheduled to check 24/7
              {/* <span
                style={{
                  lineHeight: 0,
                  fontSize: "1.5vw",
                  fontWeight: 100,
                  visibility: "hidden",
                }}
              >
                .draft sentense
              </span> */}
              ​
            </li>
            <li>
              <p>
                <span>3500</span> hours returned to office workers annually
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("diagram")}>
        <Image src={viewMobile ? groupCase5_ViewMobile : groupCase5} alt={groupCase5} />
      </div>
    </div>
  );
};
export default Case5;
