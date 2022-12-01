import React, { useEffect } from "react";
import className from "classnames/bind";
import styles from "./contact.module.scss";
import Image from "next/image";
import downloadIcon from "../../../../../public/downloadIcon.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailIcon from "../../../../../public/emailIcon.png";
import Link from "next/link";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Tooltip from "@mui/material/Tooltip";

const cx = className.bind(styles);
const Contact = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("contact")}>
        <div className={cx("triangle")}></div>
        <div className={cx(["content", "mask"])}>
          <h1>Find out how we can help you</h1>
          <div className={cx("content1")}>
            We&apos; d Love To Hear From You. Please indicate your interest in the form below. TMA
            will contact you shortly after receiving your request.
          </div>
          <div className={cx("content2")}>
            <Image src={downloadIcon} alt="downloadIcon" />{" "}
            <Link href="/">
              <a>TMA RPA Brochure</a>
            </Link>
          </div>
          <div className={cx("buttonContact")}>
            <Button variant="contained">
              <Link href="https://www.tmasolutions.com/contact">
                <a>Contact us</a>
              </Link>
            </Button>
          </div>
        </div>

        {/* <div className={cx("iconJumpUp")}>
          <Link href="/">
            <Tooltip title="Back to top" placement="bottom">
              <IconButton color="primary">
                <KeyboardDoubleArrowUpIcon sx={{ width: 32, height: 32 }} />
              </IconButton>
            </Tooltip>
          </Link>
        </div> */}
      </div>
      <div className={cx("footer", "maskFooter")}>
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
            <Button>
              <Link href="https://www.tmasolutions.com/">
                <a>Home</a>
              </Link>
            </Button>
            <Button>
              <Link href="https://www.tmasolutions.com/about-us">
                <a>About TMA</a>
              </Link>
            </Button>
            <Button>
              <Link href="https://www.tmasolutions.com/services">
                <a>Solutions</a>
              </Link>
            </Button>
            <Button>
              <Link href="https://www.tmasolutions.com/industries">
                <a>Industries</a>
              </Link>
            </Button>
            <Button>
              <Link href="https://www.tmasolutions.com/technology">
                <a>Technologies</a>
              </Link>
            </Button>
            <Button>
              <Link href="https://www.tmasolutions.com/news-events">
                <a>News</a>
              </Link>
            </Button>
            <Button>
              <Link href="https://www.tmasolutions.com/contact">
                <a>Contact</a>
              </Link>
            </Button>
            <Button>
              <Link href="https://www.tma.vn/Why-TMA/Hoat-dong-ngoai-khoa-phong-phu">
                <a>Others</a>
              </Link>
            </Button>
          </div>
        </div>
        <div className={cx("bottomText")}>TMA Solutions &copy;2022 All Rights Reserved </div>
      </div>
    </div>
  );
};
export default Contact;
