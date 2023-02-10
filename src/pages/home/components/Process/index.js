import React from "react";
import Icon_Overview from "../../../../../public/icons-overview2.svg";
import Image from "next/image";
import className from "classnames/bind";
import styles from "./process.module.scss";
import arrowIcon from "../../../../../public/arrowIcon.svg";
import iconGroup from "../../../../../public/iconGroup.svg";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const cx = className.bind(styles);
const RpaProcess = ({ viewMobile }) => {
  return (
    <div className={cx("container")}>
      {/* Title */}
      <div className={cx("title")}>
        <Image src={Icon_Overview} alt="Icon_Overview" />
        <h1>RPA Process</h1>
      </div>
      {/* Desktop view */}
      <div style={{ display: viewMobile ? "none" : "block" }}>
        <div className={cx("row", "process1")}>
          <div className={cx("col-lg-3", "step1")}>
            <h1>UNDERSTAND</h1>
            <div className={cx("arrowIcon")}>
              <Image src={arrowIcon} alt="arrowIcon" />
            </div>
            <div className={cx("content1")}>
              <ul>
                <li>Understand the working process of clients</li>
                <li>Collect information of tools and effort of each task</li>
              </ul>
            </div>
          </div>
          <div className={cx("col-lg-3", "step2")}>
            <h1>ANALYZE</h1>
            <div className={cx("arrowIcon")}>
              <Image src={arrowIcon} alt="arrowIcon" />
            </div>

            <div className={cx("content2")}>
              <ul>
                <li>
                  Analyze clients&apos; system, break down processes and identify where to automate
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("col-lg-3", "step3")}>
            <h1>Structure</h1>
            <div className={cx("arrowIcon")}>
              <Image src={arrowIcon} alt="arrowIcon" />
            </div>
            <div className={cx("content3")}>
              <ul>
                <li>Listdown all parts of the process that can be automated</li>
              </ul>
            </div>
          </div>
          <div className={cx("col-lg-3", "step4")}>
            <h1>Proposal</h1>
            <div className={cx("arrowIcon")}>
              <Image src={arrowIcon} alt="arrowIcon" />
            </div>
            <div className={cx("content4")}>
              <ul>
                <li>Propose the solutions for automation</li>
                <li>Provide quotation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx("row", "process2")}>
          <div className={cx("col-lg-3", "frame")}>
            <div className={cx("img")}>
              <Image src={iconGroup} alt="iconGroup" />
            </div>
          </div>
          <div className={cx("col-lg-3", "frame")}>
            <ul>
              <li>Image</li>
              <li>Video</li>
              <li>Voice</li>
              <li>Text</li>
              <li>Data</li>
            </ul>
          </div>
          <div className={cx("col-lg-3", "frame")}>
            <ul>
              <li>Document Parser</li>
              <li>ID card Parser</li>
              <li>License Parser</li>
              <li>OCR</li>
              <li>Video Analysis</li>
            </ul>
          </div>
          <div className={cx("col-lg-3", "frame")}>
            <ul>
              <li>Options</li>
              <li>Benefits</li>
              <li>Trial/Production</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile view */}
      {viewMobile ? (
        <div className="h-100">
          <Swiper
            slidesPerView={1}
            // spaceBetween={15}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className={cx("slide")}
            autoplay={{
              delay: 9000,
              disableOnInteraction: false,
              stopOnLastSlide: true,
              pauseOnMouseEnter: true,
            }}
          >
            <SwiperSlide
              className={cx("d-flex flex-column justify-content-center ms-3 w-75", "slideItem")}
            >
              <div className={cx("step1")}>
                <h1>UNDERSTAND</h1>
                <div className={cx("arrowIcon")}>
                  <Image src={arrowIcon} alt="arrowIcon" />
                </div>
                <div className={cx("content1")}>
                  <ul>
                    <li>Understand the working process of clients</li>
                    <li>Collect information of tools and effort of each task</li>
                  </ul>
                </div>
              </div>
              <div className={cx("frame")}>
                <div className={cx("img")}>
                  <Image src={iconGroup} alt="iconGroup" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={cx("d-flex flex-column justify-content-center  w-75 ", "slideItem")}
            >
              <div className={cx("step2")}>
                <h1>ANALYZE</h1>
                <div className={cx("arrowIcon")}>
                  <Image src={arrowIcon} alt="arrowIcon" />
                </div>

                <div className={cx("content2")}>
                  <ul>
                    <li>
                      Analyze clients&apos; system, break down processes and identify where to
                      automate
                    </li>
                  </ul>
                </div>
              </div>
              <div className={cx("frame")}>
                <ul>
                  <li>Image</li>
                  <li>Video</li>
                  <li>Voice</li>
                  <li>Text</li>
                  <li>Data</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={cx("d-flex flex-column justify-content-center  w-75 ", "slideItem")}
            >
              <div className={cx("step3")}>
                <h1>Structure</h1>
                <div className={cx("arrowIcon")}>
                  <Image src={arrowIcon} alt="arrowIcon" />
                </div>
                <div className={cx("content3")}>
                  <ul>
                    <li>Listdown all parts of the process that can be automated</li>
                  </ul>
                </div>
              </div>
              <div className={cx("frame")}>
                <ul>
                  <li>Document Parser</li>
                  <li>ID card Parser</li>
                  <li>License Parser</li>
                  <li>OCR</li>
                  <li>Video Analysis</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className={cx("d-flex flex-column justify-content-center  w-75 ", "slideItem")}
            >
              <div className={cx("step4")}>
                <h1>Proposal</h1>
                <div className={cx("arrowIcon")}>
                  <Image src={arrowIcon} alt="arrowIcon" />
                </div>
                <div className={cx("content4")}>
                  <ul>
                    <li>Propose the solutions for automation</li>
                    <li>Provide quotation</li>
                  </ul>
                </div>
              </div>
              <div className={cx("frame")}>
                <ul>
                  <li>Options</li>
                  <li>Benefits</li>
                  <li>Trial/Production</li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      ) : null}
    </div>
  );
};
export default RpaProcess;
