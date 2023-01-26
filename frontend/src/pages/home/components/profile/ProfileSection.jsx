import React from "react";
import BoxCentered from "../../../../components/styled/BoxCentered";
import {
  Box,
  Paper,
  styled,
  Avatar,
  Badge,
  Typography,
  Divider,
  Grid,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Cloud from "@mui/icons-material/Cloud";
import {
  FcTemplate,
  FcSettings,
  FcCompactCamera,
  FcGlobe,
  FcAbout,
} from "react-icons/fc";
import ProfileSectionHeader from "./ProfileSectionHeader";
import ProfileSectionStats from "./ProfileSectionStats";
import ProfileSectionMenu from "./ProfileSectionMenu";

const ProfileSection = () => {
  const ProfileContainer = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.grey.secondary,
    padding: 0,
  }));

  return (
    <ProfileContainer elevation={1}>
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
    </ProfileContainer>
  );
};

export default ProfileSection;
