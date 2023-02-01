import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import BoxCentered from "../../../../components/styled/BoxCentered";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { showError } from "../../../../states/slices/notificationSlice";

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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profileUser);
  const loggedInUser = useSelector((state) => state.user.user);

  const [stats, setStats] = useState({});

  const getUserStats = async () => {
    try {
      const response = await axios.get(`/api/user/stats/${user._id}`);
      const statsData = response.data.stats;
      setStats(statsData);
      console.log("Stats:" + JSON.stringify(response));
    } catch (err) {
      dispatch(showError(err.response.data.error));
    }
  };

  useEffect(() => {
    getUserStats();
  }, []);

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
          <ProfileSubHeaderItem
            label={`${stats && stats.posts} Posts`}
            icon={<FeedOutlinedIcon />}
          />
        </Box>
        <ProfileSubHeaderItem
          label={`${stats && stats.followers} Followers`}
          icon={<EmojiEventsOutlinedIcon />}
        />
        <ProfileSubHeaderItem
          label={`${stats && stats.followings} Followings`}
          icon={<HandshakeOutlinedIcon />}
        />
      </Box>
      {user._id !== loggedInUser._id && (
        <Box
          paddingX={4}
          marginBottom={2}
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
      )}
    </>
  );
};

export default ProfileSubHeader;
