import React from "react";
import NavBar from "../../components/spacefeed/spacefeed/navbar/NavBar";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import ProfileSection from "./components/profile/ProfileSection";
import SuggestionSection from "./components/suggestion/SuggestionSection";
import PostSection from "./components/post/PostSection";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Box style={{ padding: "20px 10px" }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ProfileSection />
          </Grid>
          <Grid item xs={6}>
            <PostSection />
          </Grid>
          <Grid item xs={3}>
            <SuggestionSection />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
