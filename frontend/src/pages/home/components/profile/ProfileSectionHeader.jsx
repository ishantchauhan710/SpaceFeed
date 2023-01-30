import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { PROFILE_PICTURE_PLACEHOLDER } from "../../../../other/constants";
import generateBanner from "../../../../other/generateBanner";
const ProfileSectionHeader = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <div>
        <img
          width="100%"
          height="100px"
          style={{ borderRadius: 2 }}
          alt="cover"
          src={generateBanner(user.profileBanner)}
        />
        <div>
          <img
            style={{
              marginTop: "-50px",
              border: "3px solid #ffffff",
              borderRadius: "50px",
              cursor: "pointer",
            }}
            alt="profile"
            width="90px"
            height="90px"
            src={
              user.profilePictureURL
                ? user.profilePictureURL
                : PROFILE_PICTURE_PLACEHOLDER
            }
          />
        </div>
      </div>
      <Box style={{ padding: "0px 10px 10px 10px" }}>
        <Typography variant="h2" marginTop={1} fontSize={20} fontWeight={600}>
          Ishant Chauhan
        </Typography>
        <Typography variant="h6" marginTop={1} fontSize={13}>
          Hello! I am the developer of SpaceFeed! Do checkout the github
          repository of this project!
        </Typography>
      </Box>
    </div>
  );
};

export default ProfileSectionHeader;
