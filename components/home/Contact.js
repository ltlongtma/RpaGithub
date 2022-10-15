import React from "react";
import className from "classnames/bind";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import footerImage from "../../public/footerImage.png";
import downloadIcon from "../../public/downloadIcon.png";
import footerBackground from "../../public/footerBackground.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailIcon from "../../public/emailIcon.png";
import Link from "next/link";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Button from "@mui/material/Button";

const cx = className.bind(styles);
export const Contact = () => {
  return (
    <div className={cx("container-fluid")}>
      <div className={cx("footer")}>
        <Image
          src={footerBackground}
          alt="footerBackground"
          layout="responsive"
        />
        <div className={cx("mainContent")}>
          <div className={cx("left")}>
            <div>Connect with us</div>
            <div className={cx("icons")}>
              <TwitterIcon sx={{ width: 32, height: 32 }} />
              <LinkedInIcon sx={{ width: 32, height: 32 }} />
              <Image src={emailIcon} alt="emailIcon" />
              <PhoneInTalkIcon sx={{ width: 32, height: 32 }} />
            </div>
          </div>
          <div className={cx("right")}>
            <div>Home</div>
            <div>About TMA</div>
            <div>Solutions</div>
            <div>Industries</div>
            <div>Technologies</div>
            <div>News</div>
            <div>Contact</div>
            <div>Others</div>
          </div>
        </div>
        <div className={cx("bottomText")}>
          TMA Solutions &copy;2022 All Rights Reserved{" "}
        </div>
        <div className={cx("contact")}>
          <Image src={footerImage} alt="footerImage" layout="responsive" />
          <div className={cx("content")}>
            <h1>Find out how we can help you</h1>
            <div className={cx("content1")}>
              We&apos; d Love To Hear From You. Please indicate your interest in
              the form below. TMA will contact you shortly after receiving your
              request.
            </div>
            <div className ={cx("content2")}>
                <Image src={downloadIcon} alt="downloadIcon" />{" "}
                <Link href="/">
                  <a>TMA RPA brochure</a>
                </Link>
            </div>
            <div className={cx("buttonContact")}>
              <Button variant="contained">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
