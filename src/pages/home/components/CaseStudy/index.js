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
import Case1_2 from "./Case1_2";
import Case2 from "./Case2";
import Case3 from "./Case3";
import Case4 from "./Case4";
import Case5 from "./Case5";
import Case2_2 from "./Case2_2";
const cx = className.bind(styles);

export default function CaseStudy() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <Image src={Icon_Overview} alt="Icon_Overview" />
        <h1>Sample Case Study</h1>
      </div>
      <div className={cx("body")}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ marginTop: "6%" }} className={cx("tabs")}>
              <TabList
                onChange={handleChange}
                aria-label="tab"
                TabIndicatorProps={{ style: { backgroundColor: "white" } }}
                className={cx("tabLists")}
              >
                <Tab
                  label="Automatic CV input"
                  value="1"
                  icon={<Image src={tab1} alt="imgTab1" />}
                  iconPosition="start"
                  className={value == 1 ? cx("tabClassDynamic") : cx("tabClassStatic")}
                />
                <Tab
                  label="Automatic CV input"
                  value="2"
                  icon={<Image src={tab1} alt="imgTab1" />}
                  iconPosition="start"
                  className={value == 2 ? cx("tabClassDynamic") : cx("tabClassStatic")}
                />
                <Tab
                  label="COD Status update"
                  value="3"
                  className={value == 3 ? cx("tabClassDynamic") : cx("tabClassStatic")}
                  icon={<Image src={tab2} alt="imgTab2" />}
                  iconPosition="start"
                />
                <Tab
                  label="COD Status update"
                  value="4"
                  className={value == 4 ? cx("tabClassDynamic") : cx("tabClassStatic")}
                  icon={<Image src={tab2} alt="imgTab2" />}
                  iconPosition="start"
                />
                <Tab
                  label="Logistics data process"
                  value="5"
                  className={value == 5 ? cx("tabClassDynamic") : cx("tabClassStatic")}
                  icon={<Image src={tab3} alt="imgTab3" />}
                  iconPosition="start"
                />
                {/* <Tab
                  label="Automatic debt reminder"
                  value="5"
                  className={
                    value == 5 ? cx("tabClassDynamic") : cx("tabClassStatic")
                  }
                  icon={<Image src={tab4} alt="imgTab4" />}
                  iconPosition="start"
                /> */}
                {/* <Tab
                  label="Inventory alerts"
                  value="5"
                  className={
                    value == 5 ? cx("tabClassDynamic") : cx("tabClassStatic")
                  }
                  icon={<Image src={tab5} alt="imgTab5" />}
                  iconPosition="start"
                /> */}
              </TabList>
            </Box>
            <TabPanel value="1" className={cx("tabPanel")}>
              <Case1 />
            </TabPanel>
            <TabPanel value="2" className={cx("tabPanel")}>
              <Case1_2 />
            </TabPanel>
            <TabPanel value="3" className={cx("tabPanel")}>
              <Case2 />
            </TabPanel>
            <TabPanel value="4" className={cx("tabPanel")}>
              <Case2_2 />
            </TabPanel>
            <TabPanel value="5" className={cx("tabPanel")}>
              <Case3 />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
