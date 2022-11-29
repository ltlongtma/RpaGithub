import className from "classnames/bind";
const cx = className.bind(styles);
import styles from "./casetudy.module.scss";
import groupCase4 from "../../../../../public/CaseStudy/groupCase4.svg";
import Image from "next/image";

const Case4 = () => {
  return (
    <div className={cx("case")}>
      <div className={cx("content")}>
        <div className={cx("content1")}>
          <h1>Problem</h1>
          <ul style={{ marginTop: "4%" }}>
            <li>
              <p>Debts need to be checked to remind customers regularly​</p>
            </li>
            <li style={{ position: "relative", top: "1vw" }}>
              <p style={{ position: "relative", top: "-1vw" }}>
                Overdue debts may be missed sometime
              </p>
            </li>
          </ul>
        </div>
        <div className={cx("content2")}>
          <h1>Result</h1>
          <ul style={{marginTop: "4%" }}>
            <li style={{ position: "relative", top: "-0.5vw" }}>
              <p>
                <span>2500</span>
                <span style={{ color: "black", fontWeight: 600 }}></span> hours returned to office
                workers annually
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("diagram")} style={{ marginTop: "-1%" }}>
        <Image src={groupCase4} alt={groupCase4} />
      </div>
    </div>
  );
};
export default Case4;
