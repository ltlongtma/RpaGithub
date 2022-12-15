import Image from "next/image";
import logoTma from "../../../../../public/logoTma.svg";
import logoTmaV2 from "../../../../../public/logoTmaV2.svg";
import TmaLogo from "../../../../../public/TmaLogo.svg";
import arrowAfterIconRpa from "../../../../../public/HighlightArrow.svg";
import energyControlIcon from "../../../../../public/energyControlIcon.svg";
import clockIcon from "../../../../../public/clockIcon.svg";
import saveMoneyicon from "../../../../../public/saveMoneyicon.svg";
import cogWheel from "../../../../../public/cogWheel.svg";
import Link from "next/link";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import className from "classnames/bind";
import styles from "./highLight.module.scss";
import ver5_1 from "../../../../../public/ver5_1.gif";

const cx = className.bind(styles);
const HighLight = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("row", "menuBar")}>
        <div className={cx("col-lg-1 ")}>
          <Image
            src={logoTmaV2}
            alt="tma-logo"
            priority={true}
            onClick={() => location.reload()}
          />
        </div>
        <div className={cx("navigate", "col-lg-10")}>
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
            <KeyboardArrowDownIcon />
          </Button>
          <Button>
            <Link href="https://www.tmasolutions.com/technology">
              <a>Technologies</a>
            </Link>
            <KeyboardArrowDownIcon />
          </Button>
          <Button>
            <Link href="https://www.tmasolutions.com/news-events">
              <a>News</a>
            </Link>
          </Button>
          <Button>
            <Link href="https://www.tma.vn/Why-TMA/Hoat-dong-ngoai-khoa-phong-phu">
              <a>Others</a>
            </Link>
          </Button>
        </div>
        <div className={cx("buttonContact", "col-lg-1")}>
          <Button variant="contained">
            <Link href="https://www.tmasolutions.com/contact">
              <a>Contact us</a>
            </Link>
          </Button>
        </div>
      </div>
      <div className={cx("row", "content")}>
        <div className={cx("col-lg-5", "left")}>
          <div className={cx("mainIcon")}>
            <h1>RPA</h1>
            <Image
              className={cx("img")}
              src={ver5_1}
              alt="iconRpa"
              priority={true}
            ></Image>
          </div>
        </div>
        <div className={cx("col-lg-7", "right")}>
          <div className={cx("mainContent")}>
            <div className={cx("title")}>
              <h1>TMA RPA Center</h1>
              <h2>Now your business processes can be automated</h2>
            </div>

            <div className={cx("body")}>
              <div className={cx("line")}></div>
              <div className={cx("line")}>
                <div className={cx("arrow1")}>
                  <Image
                    src={arrowAfterIconRpa}
                    alt="arrowAfterIconRpa"
                    priority={true}
                  />
                </div>
                <p>Arm all of your employees with virtual assistant</p>
              </div>
              <div className={cx("line")}>
                <div className={cx("arrow2")}>
                  <Image
                    src={arrowAfterIconRpa}
                    alt="arrowAfterIconRpa"
                    priority={true}
                  />
                </div>
                <p>Propelling digital transformation forward</p>
              </div>
              <div className={cx("line")}>
                <div className={cx("arrow3")}>
                  <Image
                    src={arrowAfterIconRpa}
                    alt="arrowAfterIconRpa"
                    priority={true}
                  />
                </div>
                <p>Your processes are now more intelligent with AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("row", "card")}>
        <div className={cx("cardItem", "col-lg-3")}>
          <div className={cx("cardTitle")}>Insurance</div>
          <div className={cx("cardContent")}>
            <div className={cx("icon")}>
              <Image src={energyControlIcon} alt="energyControlIcon" />
            </div>
            <div className={cx("content")}>
              <h1>83%</h1>
              <p>Effiency Gain</p>
            </div>
          </div>
        </div>
        <div className={cx("cardItem", "col-lg-3")}>
          <div className={cx("cardTitle")}>Banking</div>
          <div className={cx("cardContent")}>
            <div className={cx("icon")}>
              <Image src={clockIcon} alt="clockIcon" />
            </div>
            <div className={cx("content")}>
              <h1>90%</h1>
              <p>Processing Time Reduction</p>
            </div>
          </div>
        </div>
        <div className={cx("cardItem", "col-lg-3")}>
          <div className={cx("cardTitle")}>Healthcare</div>
          <div className={cx("cardContent")}>
            <div className={cx("icon")}>
              <Image src={saveMoneyicon} alt="saveMoneyicon" />
            </div>
            <div className={cx("content")}>
              <h1>80%</h1>
              <p>Operating Cost Saving</p>
            </div>
          </div>
        </div>
        <div className={cx("cardItem", "col-lg-3")}>
          <div className={cx("cardTitle")}>BFSI</div>
          <div className={cx("cardContent")}>
            <div className={cx("icon")}>
              <Image src={cogWheel} alt="cogWheel" />
            </div>
            <div className={cx("content")}>
              <h1>95%</h1>
              <p>Manual Effort Reduction</p>
            </div>
          </div>
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
