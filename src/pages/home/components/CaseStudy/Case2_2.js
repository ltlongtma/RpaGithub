import className from "classnames/bind";
const cx = className.bind(styles);
import styles from "./casetudy.module.scss";
import groupCase2 from "../../../../../public/CaseStudy/groupCase2.svg";
import Image from "next/image";

const Case2_2 = () => {
  return (
    <div className={cx("case")}>
      <div className={cx("content")} style={{ display: "flex" }}>
        <div className={cx("content1")} style={{ width: "50%" , lineHeight:"2vw"}}>
          <h1>Problem</h1>
          <ul>
            <li style={{marginBottom:"2vw"}}>Complex process, need to manipulate files in different systems​</li>
            <li>Human errors may occur when collating large data daily</li>
          </ul>
        </div>
        <div className={cx("content2")} style={{ marginTop: 0, width: "50%", lineHeight:"2vw" }}>
          <h1>Result</h1>
          <ul className={cx("content2")} style={{ position:"relative", top:"-1.8vw"}}>
            <li  style={{marginBottom:"2vw"}}>
              <span>12000</span> hours returned in year one
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
