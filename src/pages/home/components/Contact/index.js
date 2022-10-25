import React from "react";
import className from "classnames/bind";
import styles from "./contact.module.scss";
import Image from "next/image";
import footerImage from "../../../../../public/footerImage.svg";
import downloadIcon from "../../../../../public/downloadIcon.svg";
import footerBackground from "../../../../../public/footerBackground.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailIcon from "../../../../../public/emailIcon.png";
import Link from "next/link";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
const cx = className.bind(styles);
const Contact = () => {
  return (
    <div className={cx("container")}>
      <Image src={footerBackground} alt="footerBackground" layout="responsive" />
      <div className={cx("mainContent")}>
        <div className={cx("left")}>
          <div>Connect with us</div>
          <div className={cx("icons")}>
            <IconButton color="inherit">
              <TwitterIcon sx={{ width: 32, height: 32 }} />
            </IconButton>
            <IconButton color="inherit">
              <LinkedInIcon sx={{ width: 32, height: 32 }} />
            </IconButton>

            <IconButton color="inherit">
              <Image src={emailIcon} alt="emailIcon" sx={{ width: 32, height: 32 }} />
            </IconButton>
            <IconButton color="inherit">
              <PhoneInTalkIcon sx={{ width: 32, height: 32 }} />
            </IconButton>
          </div>
        </div>
        <div className={cx("right")}>
          <Button>Home</Button>
          <Button>About TMA</Button>
          <Button>Solutions</Button>
          <Button>Industries</Button>
          <Button>Technologies</Button>
          <Button>News</Button>
          <Button>Contact</Button>
          <Button>Others</Button>
        </div>
      </div>
      <div className={cx("bottomText")}>TMA Solutions &copy;2022 All Rights Reserved </div>
      <div className={cx("contact")}>
        <Image src={footerImage} alt="footerImage" layout="responsive" />
        <div className={cx("content")}>
          <h1>Find out how we can help you</h1>
          <div className={cx("content1")}>
            We&apos; d Love To Hear From You. Please indicate your interest in the form below. TMA
            will contact you shortly after receiving your request.
          </div>
          <div className={cx("content2")}>
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
  );
};
export default Contact;
