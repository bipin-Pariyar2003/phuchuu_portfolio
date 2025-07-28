import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import MyProjects from "../MyProjects";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// === Only show when scrolled past threshold ===
function ShowOnScroll({ children, threshold = 50 }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold,
  });

  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <>
      {/* Fixed navbar that appears only after you scroll */}
      <ShowOnScroll threshold={50}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1200,
            backgroundColor: "#FFB5E8",
            opacity: 0.8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ height: 100, display: "flex", alignItems: "center" }}
          >
            <Tab label="Home" sx={{ color: "#5E5E5E" }} />
            <Tab label="My Projects" />
            <Tab label="Contact" />
          </Tabs>
        </Box>
      </ShowOnScroll>

      {/* Push the content down so it doesn't go under the fixed navbar */}
      <Box sx={{ backgroundColor: "#FFF8F0", minHeight: "100vh" }}>
        <CustomTabPanel value={value} index={0}>
          <Home />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <MyProjects />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Contact />
        </CustomTabPanel>
      </Box>
    </>
  );
}
