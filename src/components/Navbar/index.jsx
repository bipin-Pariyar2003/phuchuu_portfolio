import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#e0f7fa",
        alignItems: "center",
        mx: "auto",
        px: 0,
      }}
    >
      <Box
        sx={{
          // borderBottom: 1,
          // borderColor: "divider",

          backgroundColor: "#FFB5E8",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            height: "100px",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Tab label="Home" sx={{ color: "#5E5E5E" }} {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} />
          <Tab label="Contact" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <Box sx={{ backgroundColor: "#FFF8F0", minHeight: "100vh" }}>
        <CustomTabPanel value={value} index={0}>
          <Home />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <About />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Contact />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
