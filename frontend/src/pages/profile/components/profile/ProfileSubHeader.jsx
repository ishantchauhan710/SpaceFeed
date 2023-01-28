import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import BoxCentered from "../../../../components/styled/BoxCentered";

const ProfileSubHeaderItem = ({ label, icon }) => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        color: (theme) => theme.palette.grey[800],
        "&:hover": { color: (theme) => theme.palette.primary[600] },
      }}
      display="flex"
      alignItems="center"
      marginRight={2}
    >
      <BoxCentered>{icon}</BoxCentered>
      <BoxCentered>
        <Typography fontSize={15} marginLeft={1}>
          {label}
        </Typography>
      </BoxCentered>
    </Box>
  );
};

const ProfileSubHeader = () => {
  return (
    <>
      <Box
        paddingX={4}
        paddingBottom={2}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          <ProfileSubHeaderItem label="97 Posts" icon={<FeedOutlinedIcon />} />
        </Box>
        <ProfileSubHeaderItem
          label="28 Followers"
          icon={<EmojiEventsOutlinedIcon />}
        />
        <ProfileSubHeaderItem
          label="29 Following"
          icon={<HandshakeOutlinedIcon />}
        />
      </Box>
      <Box
        paddingX={4}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Button
          style={{ marginRight: "10px" }}
          variant="contained"
          disableElevation
        >
          Follow
        </Button>
        <Button variant="outlined" disableElevation>
          Message
        </Button>
      </Box>
    </>
  );
};

export default ProfileSubHeader;
