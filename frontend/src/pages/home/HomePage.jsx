import React from "react";
import NavBar from "../../components/spacefeed/spacefeed/navbar/NavBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ProfileSection from "./components/profile/ProfileSection";
import SuggestionSection from "./components/suggestion/SuggestionSection";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
            <Item>Posts</Item>
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
