import React from "react";
import { Box, Divider, Grid } from "@mui/material/";
import PaperBoxUnspaced from "../../../../components/styled/PaperBoxUnspaced";
import ProfileHeader from "./ProfileHeader";
import ProfileSubHeader from "./ProfileSubHeader";
import ProfileTabs from "./ProfileTabs";
import Post from "../../../home/components/post/post/Post";
import { useDispatch, useSelector } from "react-redux";
import { showError } from "../../../../states/slices/notificationSlice";
import { setLoading } from "../../../../states/slices/loadingSlice";
import axios from "axios";
import { useState, useEffect } from "react";

const ProfileLeftSection = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.user.user);

  const getUserPosts = async () => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`/api/posts/${user._id}`);
      const postList = response.data.posts;
      setPosts(postList);
      console.log(JSON.stringify(postList));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(showError(err.response.data.error));
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <Box>
      <PaperBoxUnspaced>
        <ProfileHeader />
        <ProfileSubHeader />
        <ProfileTabs />
      </PaperBoxUnspaced>

      <Box marginTop={2}>
        {posts &&
          posts.length > 0 &&
          posts.map((post) => <Post key={post._id} post={post} />)}
      </Box>
    </Box>
  );
};

export default ProfileLeftSection;
