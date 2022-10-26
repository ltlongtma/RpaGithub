import className from "classnames/bind";
import styles from "./solution.module.scss";
import backgroundSolutions from "../../../../../public/backgroundSolutions.svg";
import Icon_Overview from "../../../../../public/icons-overview2.svg";
import IconLogistic from "../../../../../public/IconLogistic.svg";
import IconFinance from "../../../../../public/IconFinance.svg";
import IconEcommerce from "../../../../../public/IconEcommerce.svg";
import IconHumanResource from "../../../../../public/IconHumanResource.svg";
import MaskGroup from "../../../../../public/MaskGroup.png";
MaskGroup;
import Image from "next/image";

const cx = className.bind(styles);

const Solutions = () => {
  
  const handleScroll = () => {
    // console.log("E >>>", window.pageYOffset);
    if (window.pageYOffset > 3500) {
      window.scrollTo({
        top: 5200,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={cx("solutions")} onWheel = {handleScroll}>
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
      <div className={cx("maskBottom")}>
        <Image src={MaskGroup} alt="MaskGroup" />
      </div>
    </div>
  );
};
export default Solutions;
