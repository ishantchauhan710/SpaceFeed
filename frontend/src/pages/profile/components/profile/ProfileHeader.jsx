import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import { Box, Fab, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import generateBanner from "../../../../other/generateBanner";
import { PROFILE_PICTURE_PLACEHOLDER } from "../../../../other/constants";

const ProfileHeader = () => {
  const user = useSelector((state) => state.user.profileUser);

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
          }}
          src={
            user.profilePictureURL
              ? user.profilePictureURL
              : PROFILE_PICTURE_PLACEHOLDER
          }
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
          <Fab size="small" color="success" aria-label="add">
            <ShareIcon />
          </Fab>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
