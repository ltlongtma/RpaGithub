import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import className from "classnames/bind";
import styles from "./casetudy.module.scss";
import Icon_Overview from "../../../../../public/Icon_Overview.png";
import tab1 from "../../../../../public/CaseStudy/tab1.png";
import tab2 from "../../../../../public/CaseStudy/tab2.png";
import tab3 from "../../../../../public/CaseStudy/tab3.png";
import tab4 from "../../../../../public/CaseStudy/tab4.png";
import tab5 from "../../../../../public/CaseStudy/tab5.png";
import Image from "next/image";
import Case1 from "./Case1";
import Case2 from "./Case2";
import Case3 from "./Case3";
import Case4 from "./Case4";
import Case5 from "./Case5";
import { Collapse } from "react-bootstrap";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const cx = className.bind(styles);

export default function CaseStudy({ viewMobile }) {
  const [value, setValue] = React.useState("1");
  const [openCase1, setOpenCase1] = React.useState(false);
  const [openCase2, setOpenCase2] = React.useState(false);
  const [openCase3, setOpenCase3] = React.useState(false);
  const [openCase4, setOpenCase4] = React.useState(false);
  const [openCase5, setOpenCase5] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <Image src={Icon_Overview} alt="Icon_Overview" />
        <h1>Sample Case Studies</h1>
      </div>
      {/* View desktop */}
      <div className={cx("body")} style={{ display: viewMobile ? "none" : "block" }}>
        <Box sx={{ width: "100%" }}>
          <TabContext value={value}>
            <fieldset className={cx("tabs")}>
              <TabList
                onChange={handleChange}
                TabIndicatorProps={{
                  children: <span />,
                }}
                sx={{
                  "& .MuiTabs-indicator": {
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                    "& > span": {
                      maxWidth: "50%",
                      width: "100%",
                      backgroundColor: "#0094ff",
                      height: "3px",
                    },
                  },
                }}
                className={cx("tabLists")}
              >
                <Tab
                  label="Automatic CV input"
                  value="1"
                  icon={<Image src={tab1} alt="imgTab1" />}
                  iconPosition="start"
                  className={value == 1 ? cx("tabClassDynamic") : cx("tabClassStatic")}
                  disableRipple
                />

                <Tab
                  label="COD Status update"
                  value="2"
                  className={value == 2 ? cx("tabClassDynamic") : cx("tabClassStatic")}
                  icon={<Image src={tab2} alt="imgTab2" />}
                  disableRipple
                  iconPosition="start"
                />
                <Tab
                  label="Logistics data process"
                  value="3"
                  className={value == 3 ? cx("tabClassDynamic") : cx("tabClassStatic")}
                  icon={<Image src={tab3} alt="imgTab3" />}
                  iconPosition="start"
                  disableRipple
                />

                <Tab
                  label="Automatic debt reminder"
                  value="4"
                  className={value == 4 ? cx("tabClassDynamic") : cx("tabClassStatic")}
                  icon={<Image src={tab4} alt="imgTab4" />}
                  iconPosition="start"
                  disableRipple
                />
                <Tab
                  label="Inventory alerts"
                  value="5"
                  className={value == 5 ? cx("tabClassDynamic") : cx("tabClassStatic")}
                  icon={<Image src={tab5} alt="imgTab5" />}
                  iconPosition="start"
                  disableRipple
                />
              </TabList>
            </fieldset>
            <TabPanel value="1" className={cx("row", "tabPanel")}>
              <Case1 />
            </TabPanel>
            <TabPanel value="2" className={cx("row", "tabPanel")}>
              <Case2 />
            </TabPanel>
            <TabPanel value="3" className={cx("row", "tabPanel")}>
              <Case3 />
            </TabPanel>
            <TabPanel value="4" className={cx("row", "tabPanel")}>
              <Case4 />
            </TabPanel>
            <TabPanel value="5" className={cx("row", "tabPanel")}>
              <Case5 />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
      {/* View mobile */}
      <div className={cx("body")} style={{ display: viewMobile ? "block" : "none" }}>
        <div>
          <Button
            startIcon={<Image src={tab1} alt="imgTab1" />}
            endIcon={openCase1 ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            onClick={() => setOpenCase1(!openCase1)}
            className={cx("button")}
          >
            Automatic CV input
          </Button>
          <Collapse in={openCase1}>
            <div>
              <Case1 viewMobile={viewMobile} />
            </div>
          </Collapse>

          <Button
            startIcon={<Image src={tab2} alt="imgTab2" />}
            endIcon={openCase2 ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            onClick={() => setOpenCase2(!openCase2)}
            className={cx("button")}
          >
            COD Status update
          </Button>
          <Collapse in={openCase2}>
            <div>
              <Case2 viewMobile={viewMobile} />
            </div>
          </Collapse>
          <Button
            startIcon={<Image src={tab3} alt="imgTab3" />}
            endIcon={openCase3 ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            onClick={() => setOpenCase3(!openCase3)}
            className={cx("button")}
          >
            Logistics data process
          </Button>
          <Collapse in={openCase3}>
            <div>
              <Case3 viewMobile={viewMobile} />
            </div>
          </Collapse>
          <Button
            startIcon={<Image src={tab4} alt="imgTab4" />}
            endIcon={openCase4 ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            onClick={() => setOpenCase4(!openCase4)}
            className={cx("button")}
          >
            Automatic debt reminder
          </Button>
          <Collapse in={openCase4}>
            <div>
              <Case4 viewMobile={viewMobile} />
            </div>
          </Collapse>
          <Button
            startIcon={<Image src={tab5} alt="imgTab5" />}
            endIcon={openCase5 ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            onClick={() => setOpenCase5(!openCase5)}
            className={cx("button")}
          >
            Inventory alerts
          </Button>
          <Collapse in={openCase5}>
            <div>
              <Case5 viewMobile={viewMobile} />
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}
