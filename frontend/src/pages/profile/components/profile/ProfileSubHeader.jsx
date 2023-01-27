import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";

const ProfileSubHeaderItem = ({ label, icon }) => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        "&:hover": { color: (theme) => theme.palette.primary.main },
      }}
      display="flex"
      alignItems="center"
      marginRight={2}
    >
      {icon}
      <Typography fontSize={15} marginLeft={1}>
        {label}
      </Typography>
    </Box>
  );
};

const ProfileSubHeader = () => {
  return (
    <Box
      paddingX={4}
      paddingY={2}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
    >
      <ProfileSubHeaderItem label="97 Posts" icon={<FeedOutlinedIcon />} />
      <ProfileSubHeaderItem
        label="28 Followers"
        icon={<EmojiEventsOutlinedIcon />}
      />
      <ProfileSubHeaderItem
        label="29 Following"
        icon={<HandshakeOutlinedIcon />}
      />
    </Box>
  );
};

export default ProfileSubHeader;
