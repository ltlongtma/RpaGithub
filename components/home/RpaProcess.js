import React from "react";
import step1Frame from "../../public/step1Frame.png";
import Image from "next/image";
import className from "classnames/bind";
import styles from "../../styles/Home.module.scss";

const cx = className.bind(styles);
export const RpaProcess = () => {
  return (
    <div className={cx("wrap")}>
      <h1 className={cx("title")}>RPA Process</h1>
      <div className={cx("process")}>
        <div className={cx("step1")}>
          <Image src={step1Frame} alt="step1" layout="fixed" />
          <div className={cx("content")} styles="background-image:{step1Frame}">
            <h1>UNDERSTAND</h1>
            <ul>
              <li>Understand the working process of clients</li>
              <li>Collect information of tools and effort of each task</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
