import React from "react";
import BoxCentered from "../../../../components/styled/BoxCentered";
import PaperBox from "../../../../components/styled/PaperBox";

import { Box, Divider, Link } from "@mui/material";

import ProfileSectionHeader from "./ProfileSectionHeader";
import ProfileSectionStats from "./ProfileSectionStats";
import ProfileSectionMenu from "./ProfileSectionMenu";
import PaperBoxUnspaced from "../../../../components/styled/PaperBoxUnspaced";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileSection = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.home.user);
  return (
    <Box sx={{ width: "100%" }}>
      <PaperBoxUnspaced elevation={1}>
        <ProfileSectionHeader />
        <ProfileSectionStats />
        <Divider />
        <ProfileSectionMenu />
        <Divider />
        <BoxCentered style={{ padding: "10px 0px" }}>
          <Link
            sx={{ cursor: "pointer", "&:hover": { color: "primary.600" } }}
            underline="none"
            fontWeight={600}
            fontSize={14}
            onClick={() => navigate(`/profile/${user._id}`)}
          >
            View Profile
          </Link>
        </BoxCentered>
      </PaperBoxUnspaced>
    </Box>
  );
};

export default ProfileSection;
