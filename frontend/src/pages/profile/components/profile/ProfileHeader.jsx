import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import { Box, Fab, IconButton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import generateBanner from "../../../../other/generateBanner";
import {
  BASE_URL,
  PROFILE_PICTURE_PLACEHOLDER,
} from "../../../../other/constants";
import { useDispatch } from "react-redux";
import { showImageModal } from "../../../../states/other/imageModalSlice";
import { showInfo } from "../../../../states/other/notificationSlice";

import copyToClipboard from "../../../../other/copyToClipboard";
import EditIcon from "@mui/icons-material/Edit";

const ProfileHeader = () => {
  const user = useSelector((state) => state.profile.user);
  const dispatch = useDispatch();

  const copyProfile = (url) => {
    copyToClipboard(url);
    dispatch(showInfo("Profile link copied to clipboard"));
  };

  const [banner, setBanner] = useState(user.profileBanner);

  const changeBanner = () => {
    if (parseInt(banner) >= 5) {
      setBanner("1");
    } else {
      setBanner((parseInt(banner) + 1).toString());
    }
    //console.log(banner);
  };

  return (
    <Box>
      <Box style={{ position: "relative" }}>
        <img
          style={{
            width: "100%",
            height: 170,
            borderRadius: "5px 5px 0px 0px",
            objectFit: "cover",
          }}
          alt="banner"
          src={generateBanner(banner)}
        />
        {/* <IconButton
          onClick={() => changeBanner()}
          sx={{
            position: "absolute",
            marginTop: "20px",
            marginLeft: "-60px",
            backgroundColor: (theme) => theme.palette.primary[400],
            "&:hover": {
              backgroundColor: (theme) => theme.palette.primary[300],
            },
          }}
        >
          <EditIcon
            style={{
              width: "20px",
              height: "18px",
              color: "#ffffff",
            }}
          />
        </IconButton> */}
      </Box>
      <Box
        style={{ position: "relative" }}
        display="flex"
        flexDirection="column"
        paddingX={2}
      >
        <img
          style={{
            width: 120,
            height: 120,
            borderRadius: "100px",
            border: "3px solid #fff",
            marginTop: "-60px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
          alt="profile"
          src={
            user.profilePictureURL
              ? user.profilePictureURL
              : PROFILE_PICTURE_PLACEHOLDER
          }
          onClick={() => {
            dispatch(
              showImageModal(
                user.profilePictureURL
                  ? user.profilePictureURL
                  : PROFILE_PICTURE_PLACEHOLDER
              )
            );
          }}
        />
        <Box marginLeft={2} paddingY={1} textAlign="left">
          <Typography variant="h1" fontWeight={600} fontSize={21}>
            {user.username}
          </Typography>
          <Typography variant="h6" fontSize={15}>
            {user.email}
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            margin: "15px 20px",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Fab
            size="small"
            color="success"
            aria-label="add"
            onClick={() => copyProfile(`${BASE_URL}/profile/${user._id}`)}
          >
            <ShareIcon />
          </Fab>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
