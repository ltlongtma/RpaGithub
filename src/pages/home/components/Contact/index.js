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
import EmailIcon from '@mui/icons-material/Email';
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Tooltip from "@mui/material/Tooltip";
import Divider from '@mui/material/Divider';


const cx = className.bind(styles);
const Contact = ({viewMobile}) => {
  return (
    <div className={cx("container")}>
      <div className={cx("contact")}>
        <div className={cx("triangle")}></div>
        <div className={cx(["content", "mask"])}>
          <h1>Find out how we can help you</h1>
          <div className={cx("content1")}>
            We&apos; d Love To Hear From You. Please indicate your interest in
            the form below. TMA will contact you shortly after receiving your
            request.
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
      </div>
      <div className={cx("footer", "maskFooter")}>
        <div className={cx("mainContent")}>
          <div className={cx("left")}>
            <div>Connect with us</div>
            <div className={cx("icons")}>
              <Link href="https://www.linkedin.com/company/tma-solutions/">
                <IconButton color="inherit">
                  <LinkedInIcon  />
                </IconButton>
              </Link>

              <Link href="mailto:sales@tma.com.vn">
                {/* <IconButton color="inherit">
                  <Image
                    src={emailIcon}
                    alt="emailIcon"
                  />
                </IconButton> */}
                <IconButton color="inherit">
                  <EmailIcon  />
                </IconButton>
              </Link>

              <Link href={`tel:${+84839978000}`}>
                <IconButton color="inherit">
                  <PhoneInTalkIcon  />
                </IconButton>
              </Link>
            </div>
          </div>
          <div className={cx("right")}>
            <div className= {viewMobile ?"m-auto":null}>
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
            </div>
            <div className= {viewMobile?"m-auto":null}>
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
        </div>
        <div className={cx("bottomText")}>
       { viewMobile? <Divider variant = "fullWidth" sx={{width:"80%", m:"2% auto"}}/> :null}
          TMA Solutions &copy;2022 All Rights Reserved{" "}
        </div>
      </div>
    </div>
  );
};
export default Contact;
