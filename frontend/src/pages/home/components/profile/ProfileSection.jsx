import React from "react";
import BoxCentered from "../../../../components/styled/BoxCentered";
import PaperBox from "../../../../components/styled/PaperBox";

import { Box, Divider, Link } from "@mui/material";

import ProfileSectionHeader from "./ProfileSectionHeader";
import ProfileSectionStats from "./ProfileSectionStats";
import ProfileSectionMenu from "./ProfileSectionMenu";
import PaperBoxUnspaced from "../../../../components/styled/PaperBoxUnspaced";

const ProfileSection = () => {
  return (
    <Box>
      <PaperBoxUnspaced elevation={1}>
        <ProfileSectionHeader />
        <ProfileSectionStats />
        <Divider />
        <ProfileSectionMenu />
        <Divider />
        <BoxCentered style={{ padding: "10px 0px" }}>
          <Link
            sx={{ "&:hover": { color: "primary.600" } }}
            underline="none"
            fontWeight={600}
            fontSize={14}
            href="#"
          >
            View Profile
          </Link>
        </BoxCentered>
      </PaperBoxUnspaced>
    </Box>
  );
};

export default ProfileSection;
