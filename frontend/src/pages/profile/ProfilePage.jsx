import React from "react";
import NavBar from "../../components/spacefeed/spacefeed/navbar/NavBar";
import { Box, Grid } from "@mui/material/";
import PaperBox from "../../components/styled/PaperBox";
import ProfileSection from "./components/profile/ProfileSection";

const ProfilePage = () => {
  return (
    <div>
      <NavBar />
      <Box style={{ padding: "20px 10px" }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <ProfileSection />
          </Grid>
          <Grid item xs={4}>
            <Box>
              <PaperBox>Hi</PaperBox>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ProfilePage;
