import React, { useState } from "react";
import NavBar from "../../components/app/common/navbar/NavBar";
import { Box, Grid } from "@mui/material/";
import ProfileSection from "./components/profile/ProfileSection";
import SuggestionSection from "./components/suggestion/SuggestionSection";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../states/other/loadingSlice";
import { showError } from "../../states/other/notificationSlice";
import { setUser, setPosts, setFollowers } from "../../states/profileSlice";
import { useEffect } from "react";

const ProfilePage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const profileUser = useSelector((state) => state.profile.user);

  const [postsLoading, setPostsLoading] = useState(false);

  const getUserDetails = async () => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`/api/user/${id}`);
      const user = response.data.user;
      dispatch(setUser(user));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(showError(err.response.data.error));
    }
  };

  const getUserPosts = async () => {
    try {
      setPostsLoading(true);
      const response = await axios.get(`/api/posts/user/${id}`);
      const postList = response.data.posts;
      dispatch(setPosts(postList));
      //console.log(JSON.stringify(postList));
      setPostsLoading(false);
    } catch (err) {
      dispatch(showError(err.response.data.error));
      setPostsLoading(false);
    }
  };

  const getUserFollowers = async () => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`/api/user/followers/${id}`);
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
    getUserDetails();
    getUserPosts();
    getUserFollowers();
  }, [id]);

  return (
    profileUser && (
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
              <ProfileSection postsLoading={postsLoading} />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Box>
                <SuggestionSection />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    )
  );
};

export default ProfilePage;
