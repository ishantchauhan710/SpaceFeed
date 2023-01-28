import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AboutTab from "./tabs/AboutTab";
import OverviewTab from "./tabs/OverviewTab";
import PhotosTab from "./tabs/PhotosTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
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

const ProfileTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box paddingX={2} marginTop={2} sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab
            sx={{ fontSize: 16, textTransform: "none" }}
            label="Overview"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ fontSize: 16, textTransform: "none" }}
            label="Photos"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ fontSize: 16, textTransform: "none" }}
            label="About"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <OverviewTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PhotosTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AboutTab />
      </TabPanel>
    </Box>
  );
};

export default ProfileTabs;
