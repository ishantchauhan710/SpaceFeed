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
        <Grid container spacing={{ xs: 0, md: 2 }}>
          <Grid
            item
            md={8}
            xs={12}
            sx={{ display: { xs: "block", md: "block" } }}
          >
            <ProfileSection />
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sx={{ display: { xs: "none", md: "block" } }}
          >
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
