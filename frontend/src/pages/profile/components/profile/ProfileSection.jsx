import React from "react";
import { Box, Divider, Grid } from "@mui/material/";
import PaperBoxUnspaced from "../../../../components/styled/PaperBoxUnspaced";
import ProfileHeader from "./ProfileHeader";
import ProfileSubHeader from "./ProfileSubHeader";
import ProfileTabs from "./ProfileTabs";

const ProfileLeftSection = () => {
  return (
    <Box>
      <PaperBoxUnspaced>
        <ProfileHeader />
        <ProfileSubHeader />

        <ProfileTabs />
      </PaperBoxUnspaced>
    </Box>
  );
};

export default ProfileLeftSection;
