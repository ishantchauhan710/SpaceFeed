import React from "react";
import NavBar from "../../components/app/common/navbar/NavBar";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import ProfileSection from "./components/profile/ProfileSection";
import SuggestionSection from "./components/suggestion/SuggestionSection";
import PostSection from "./components/post/PostSection";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { setFollowers } from "../../states/homeSlice";
import { setLoading } from "../../states/other/loadingSlice";
import { showError } from "../../states/other/notificationSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.home.user);

  const getUserFollowers = async () => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`/api/user/followers/${user._id}`);
      const followersList = response.data.followers;
      dispatch(setFollowers(followersList));
      //console.log(JSON.stringify(followersList));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(showError(err.response.data.error));
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getUserFollowers();
  }, []);

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
