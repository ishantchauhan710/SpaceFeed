import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { showError } from "../../../../states/other/notificationSlice";

const ProfileSectionStats = () => {
  const user = useSelector((state) => state.home.user);
  const followers = useSelector((state) => state.home.followers);
  const followings = useSelector((state) => state.home.user.followings);
  const [posts, setPosts] = useState(0);
  const dispatch = useDispatch();


  const getLoggedInUserPosts = async () => {
    try {
      const response = await axios.get(`/api/posts/user/${user._id}`);
      const postCount = response.data.posts.length;
      console.log("Posts: " + postCount)
      setPosts(postCount);
    } catch (err) {
      dispatch(showError(err.response.data.error));
      setPosts(0);
    }
  };

  useEffect(() => {
    getLoggedInUserPosts();
  }, []);

  const StatItem = ({ label, value, hideBorder }) => {
    return (
      <Box
        style={{
          borderRight: `1px solid ${
            hideBorder ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.2)"
          }`,
          marginBottom: "10px",
        }}
      >
        <Typography variant="h1" fontSize={15} fontWeight={600}>
          {value}
        </Typography>
        <Typography variant="h6" fontSize={13}>
          {label}
        </Typography>
      </Box>
    );
  };

  return (
    <Box style={{ padding: "5px 10px" }}>
      <Grid container>
        <Grid item xs={3}>
          <StatItem label="Post" value={posts ? posts : 0} />
        </Grid>
        <Grid item xs={5}>
          <StatItem
            label="Followers"
            value={followers ? followers.length : 0}
          />
        </Grid>
        <Grid item xs={4}>
          <StatItem
            hideBorder={true}
            label="Following"
            value={followings ? followings.length : 0}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileSectionStats;
