import React from "react";
import NavBar from "../../components/spacefeed/spacefeed/navbar/NavBar";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import ProfileSection from "./components/profile/ProfileSection";
import SuggestionSection from "./components/suggestion/SuggestionSection";
import PostSection from "./components/post/PostSection";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Box style={{ padding: "20px 10px" }}>
        <Grid container spacing={2}>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <ProfileSection />
          </Grid>
          <Grid item md={6} xs={12}>
            <PostSection />
          </Grid>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <SuggestionSection />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
