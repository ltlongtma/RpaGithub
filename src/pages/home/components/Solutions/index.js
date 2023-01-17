import className from "classnames/bind";
import styles from "./solution.module.scss";
import backgroundSolutions from "../../../../../public/backgroundSolutions.svg";
import Icon_Overview from "../../../../../public/icons-overview2.svg";
import IconLogistic from "../../../../../public/IconLogistic.svg";
import IconFinance from "../../../../../public/IconFinance.svg";
import IconEcommerce from "../../../../../public/IconEcommerce.svg";
import IconHumanResource from "../../../../../public/IconHumanResource.svg";
import MaskGroupBottom from "../../../../../public/MaskGroup.png";
import MaskGroupTop from "../../../../../public/MaskGroupTop_Solutions.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const cx = className.bind(styles);

const Solutions = ({ viewMobile }) => {
  return (
    <div className={cx("container")}>
      <div className={cx("triangle")}>
        <div className={cx("triangleLeft")}></div>
        <div className={cx("triangleRight")}></div>
      </div>
      <div className={cx("title")}>
        <Image src={Icon_Overview} alt="Icon_Overview" />
        <h1>Sample Projects and Solutions</h1>
      </div>
      {/* Desktop view */}
      <div className={cx("row", "content")} style={{ display: viewMobile ? "none" : "flex" }}>
        <div className={cx("col-lg-3", "item1", "mask")}>
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
        <div className={cx("col-lg-3", "item2", "mask")}>
          <div className={cx("itemHead")}>
            <Image src={IconFinance} alt="IconFinance" />
            <h1>Finance</h1>
          </div>
          <div className={cx("itemBody")}>
            <ul>
              <li>Debt Reminder</li>
              <li>Insurance Claim Payment Process</li>
              <li>Finance Report Mismatches Detection</li>
              <li>Identity Card & Driver&apos;s License Parser</li>
              <li>Bank & Tax Statement OCR</li>
            </ul>
          </div>
        </div>

        <div className={cx("col-lg-3", "item3", "mask")}>
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
        <div className={cx("col-lg-3", "item4", "mask")}>
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
      {/* Mobile view */}
      <div style={{ display: viewMobile ? "flex" : "none" }}>
        <Swiper
          slidesPerView={1.3}
          spaceBetween={15}
          pagination={{
            clickable: true,
            type: "fraction",
          
          }}
          modules={[Pagination]}
          className={cx("slide")}
        >
          <SwiperSlide>
            <div className={cx("item1", "mask")}>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("item2", "mask")}>
              <div className={cx("itemHead")}>
                <Image src={IconFinance} alt="IconFinance" />
                <h1>Finance</h1>
              </div>
              <div className={cx("itemBody")}>
                <ul>
                  <li>Debt Reminder</li>
                  <li>Insurance Claim Payment Process</li>
                  <li>Finance Report Mismatches Detection</li>
                  <li>Identity Card & Driver&apos;s License Parser</li>
                  <li>Bank & Tax Statement OCR</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("item3", "mask")}>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className={cx("item4", "mask")}>
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
          </SwiperSlide>
        </Swiper>
      </div>
      {/* --------------------------------------------- */}

      <div className={cx("maskTop")}>
        <Image src={MaskGroupTop} alt="MaskGroup" />
      </div>
      <div className={cx("maskBottom")}>
        <Image src={MaskGroupBottom} alt="MaskGroup" />
      </div>
    </div>
  );
};
export default Solutions;
