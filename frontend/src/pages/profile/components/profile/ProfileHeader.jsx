import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import { Box, Fab, Typography } from "@mui/material";
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

const ProfileHeader = () => {
  const user = useSelector((state) => state.profile.user);
  const dispatch = useDispatch();

  const copyProfile = (url) => {
    copyToClipboard(url);
    dispatch(showInfo("Profile link copied to clipboard"));
  };

  return (
    <Box>
      <Box>
        <img
          style={{
            width: "100%",
            height: 170,
            borderRadius: "5px 5px 0px 0px",
            objectFit: "cover",
          }}
          alt="banner"
          src={generateBanner(user.profileBanner)}
        />
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
