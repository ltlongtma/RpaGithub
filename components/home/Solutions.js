import className from "classnames/bind";
import styles from "../../styles/Home.module.scss";
import backgroundSolutions from "../../public/backgroundSolutions.png";
import Icon_Overview from "../../public/Icon_Overview.png";
import IconLogistic from "../../public/IconLogistic.png";
import IconFinance from "../../public/IconFinance.png";
import IconEcommerce from "../../public/IconEcommerce.png";
import IconHumanResource from "../../public/IconHumanResource.png";

import Image from "next/image";

const cx = className.bind(styles);

export const Solutions = () => {
  return (
    <div className={cx("solutions")}>
      <div className={cx("imgBackground")}>
        <Image src={backgroundSolutions} alt="backGround_Solutions" />
      </div>
      <div className={cx("title")}>
        <Image src={Icon_Overview} alt="Icon_Overview" />
        <h1>Sample Projects and Solutions</h1>
      </div>
      <div className={cx("content")}>
        <div className={cx("item1")}>
          <div className={cx("itemHead")}>
            <Image src={IconLogistic} alt="IconLogistic" />
            <h1>Logistics</h1>
          </div>
          <div className={cx("itemBody")}>
            <ul>
              <li>Account Creation Make Easy</li>
              <li>Inventory Alert</li>
              <li>COD Automation</li>
              <li>Traffic Image Processing</li>
              <li>Logistics Data Process</li>
            </ul>
          </div>
        </div>
        <div className={cx("item2")}>
          <div className={cx("itemHead")}>
            <Image src={IconFinance} alt="IconFinance" />
            <h1>Finance</h1>
          </div>
          <div className={cx("itemBody")}>
            <ul>
              <li>Debt reminder</li>
              <li>Insurance Claim Payment Process</li>
              <li>Finance report mismatches detection</li>
              <li>Identity card & Driver&apos;s license parser</li>
              <li>Bank & Tax Statement OCR</li>
            </ul>
          </div>
        </div>

        <div className={cx("item3")}>
          <div className={cx("itemHead")}>
            <Image src={IconEcommerce} alt="IconEcommerce" />
            <h1>E-commerce</h1>
          </div>
          <div className={cx("itemBody")}>
            <ul>
              <li>Brand Labeling & Recognition</li>
              <li>Product Description Optimization </li>
              <li>Product Description Generator</li>
              <li>Vendor Application Process</li>
            </ul>
          </div>
        </div>
        <div className={cx("item4")}>
          <div className={cx("itemHead")}>
            <Image src={IconHumanResource} alt="IconHumanResource" />
            <h1>Human Resource</h1>
          </div>
          <div className={cx("itemBody")}>
            <ul>
              <li>Document Parser</li>
              <li>Job vs Candidate Matching </li>
              <li>Automatic Resume Input</li>
              <li>Onboarding Process</li>
            </ul>
          </div>
        </div>
      </div>
      <h1>haha</h1>
    </div>
  );
};
