import React from "react";
import { Box, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const ProfileSubHeaderItem = ({ label, icon }) => {
  return (
    <Box display="flex" alignItems="center" marginRight={2}>
      {icon}
      <Typography color="grey.700" fontSize={15} marginLeft={1}>
        {label}
      </Typography>
    </Box>
  );
};

const ProfileSubHeader = () => {
  return (
    <Box
      paddingX={3}
      paddingY={2}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
    >
      <ProfileSubHeaderItem label="India" icon={<LocationOnOutlinedIcon />} />
      <ProfileSubHeaderItem label="Joined on 7 October" icon={<CalendarMonthOutlinedIcon />} />
    </Box>
  );
};

export default ProfileSubHeader;
