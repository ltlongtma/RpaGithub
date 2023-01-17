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
import { Carousel, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const cx = className.bind(styles);

const HighLight = ({ viewMobile }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={cx("container")}>
      {/* NavBar */}
      <Navbar expand="lg" className={cx("menuBar")}>
        <div
          className={
            viewMobile
              ? cx("menuBar-mobile-header")
              : cx("menuBar-desktop-header")
          }
        >
          <Navbar.Brand href="/" className={cx("brand")}>
            <Image src={logoTmaV2} alt="tma-logo" priority={true} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-dark"
            as={() => {
              return (
                <IconButton
                  size="large"
                  sx={{
                    color: "white",
                    display: viewMobile ? "block" : "none",
                  }}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {showMenu ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              );
            }}
          />
        </div>

        <Navbar.Collapse
          id="basic-navbar-nav "
          // className="justify-content-around -lg"
          className={
            viewMobile ? cx("menuBar-mobile-body") : cx("menuBar-desktop-body")
          }
          style={{ display: showMenu ? "block" : "none" }}
        >
          <div>
            <Nav className={cx("navigate")}>
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
            </Nav>
          </div>
          <div className={cx("buttonContact")}>
            <Button variant="contained">
              <Link href="https://www.tmasolutions.com/contact">
                <a>Contact us</a>
              </Link>
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
      {/* Content */}
      <div style={{ display: showMenu ? "none" : "flex" }} className="h-100 flex-column justify-content-between">
        {/* Main content */}
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
                  <p>
                    Propelling digital transformation forward
                    <span style={{ visibility: "hidden" }}>
                      Draft text for css
                    </span>
                  </p>
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
        {/* Sub content on screen > 992px */}
        <div
          className={cx("row", "card")}
          style={{ display: viewMobile ? "none" : "flex" }}
        >
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
        {/* Sub content on screen <992 */}
        <div style={{ display: viewMobile ? "block" : "none", marginBottom:"28%"}}  >
          <Swiper
            slidesPerView={1.5}
            spaceBetween={30}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            modules={[Pagination]}
            className={cx("row", "card")}
          >
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
          </Swiper>
        </div>
        {/* CSS triangle */}
        <div className={cx("triangle")}>
          <div className={cx("triangleLeft")}></div>
          <div className={cx("triangleBottom")}></div>
          <div className={cx("triangleRight")}></div>
        </div>
      </div>
    </div>
  );
};
export default HighLight;
