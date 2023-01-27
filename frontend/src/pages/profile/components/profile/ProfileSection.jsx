import React from "react";
import { Box, Divider, Grid } from "@mui/material/";
import PaperBoxUnspaced from "../../../../components/styled/PaperBoxUnspaced";
import ProfileHeader from "./ProfileHeader";
import ProfileSubHeader from "./ProfileSubHeader";

const ProfileLeftSection = () => {
  return (
    <Box>
      <PaperBoxUnspaced>
        <ProfileHeader />
        <ProfileSubHeader />
        <Divider />
        <Box>
          Hi
        </Box>
      </PaperBoxUnspaced>
    </Box>
  );
};

export default ProfileLeftSection;
