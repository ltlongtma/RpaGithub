import Image from "next/image";
import TmaLogo from "../../../../../public/TmaLogo.svg";
import iconRpa from "../../../../../public/iconRpa.svg";
import arrowAfterIconRpa from "../../../../../public/arrowAfterIconRpa.svg";
import energyControlIcon from "../../../../../public/energyControlIcon.png";
import clockIcon from "../../../../../public/clockIcon.png";
import saveMoneyicon from "../../../../../public/saveMoneyicon.png";
import cogWheel from "../../../../../public/cogWheel.png";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import className from "classnames/bind";
import styles from "./HighLight.module.scss";
import { useEffect } from "react";
import gsap from "gsap";

const cx = className.bind(styles);
const HighLight = () => {

  useEffect(() => {
    gsap.to(".img", { duration: 15, rotation: 360, ease: Power0.easeNone, repeat: -1 });
  }, []);

  return (
    <div className={cx("container")}>
      <div className={cx("card")}>
        <div className={cx("cardItem", "cardItem1")}>
          <div className={cx("cardIcon")}>
            <Image src={energyControlIcon} alt="energyControlIcon" />
          </div>
          <div className={cx("cardContent")}>
            <h1>85%</h1>
            <p>Effiency gain</p>
          </div>
        </div>
        <div className={cx("cardItem", "cardItem2")}>
          <div className={cx("cardIcon")}>
            <Image src={clockIcon} alt="clockIcon" />
          </div>
          <div className={cx("cardContent")}>
            <h1>90%</h1>
            <p>
              Reduce of
              <br /> processing time
            </p>
          </div>
        </div>
        <div className={cx("cardItem")}>
          <div className={cx("cardIcon")}>
            <Image src={saveMoneyicon} alt="saveMoneyicon" />
          </div>
          <div className={cx("cardContent")}>
            <h1>60%</h1>
            <p>Save operating cost</p>
          </div>
        </div>
        <div className={cx("cardItem")}>
          <div className={cx("cardIcon")}>
            <Image src={cogWheel} alt="cogWheel" />
          </div>
          <div className={cx("cardContent")}>
            <h1>70%</h1>
            <p>Reduce human effort</p>
          </div>
        </div>
      </div>

      <div className={cx("content")}>
        <div className={cx("left")}>
          <h1>RPA</h1>
          <div className={cx("mainIcon")}>
            <Image className={cx("img")} src={iconRpa} alt="iconRpa" priority={true}></Image>
          </div>
          <div className={cx("arrowAfterIconRpa")}>
            <Image src={arrowAfterIconRpa} alt="arrowAfterIconRpa" priority={true} />
          </div>
        </div>
        <div className={cx("right")}>
          <h1 className={cx("title")}>TMA RPA Center</h1>
          <div className={cx("body")}>
            <p>Everything can be automated</p>
            <p>Arm all of your employees with virtual assistant</p>
            <p>Propelling digital transformation forward</p>
            <p>Your processes are now more intelligent with AI</p>
          </div>
        </div>
      </div>
      <div className={cx("menuBar")}>
        <Image src={TmaLogo} alt="tma-logo" priority={true} />
        <div className={cx("navigate")}>
          <Button>Home</Button>
          <Button>About TMA</Button>
          <Button>
            Solutions
            <KeyboardArrowUpIcon />
          </Button>
          <Button>
            Industries
            <KeyboardArrowDownIcon />
          </Button>
          <Button>
            Technologies
            <KeyboardArrowDownIcon />
          </Button>
          <Button>News</Button>
          <Button>Others</Button>
        </div>
        <div className={cx("buttonContact")}>
          <Button variant="contained">Contact Us</Button>
        </div>
      </div>
      <div className={cx("triangle")}>
        <div className={cx("triangleLeft")}></div>
        <div className={cx("triangleBottom")}></div>
        <div className={cx("triangleRight")}></div>
      </div>
    </div>
  );
};
export default HighLight;
