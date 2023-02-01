import React from "react";
import { Box } from "@mui/material";
import PostSectionCreatePost from "./PostSectionCreatePost";
import Post from "./post/Post";
import PaperBox from "../../../../components/styled/PaperBox";
import { useDispatch } from "react-redux";
import { showError } from "../../../../states/slices/notificationSlice";
import { setLoading } from "../../../../states/slices/loadingSlice";
import axios from "axios";
import { useState, useEffect } from "react";

const PostSection = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get("/api/posts/feed");
      const postList = response.data.posts;
      setPosts(postList);
      //console.log(JSON.stringify(postList));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(showError(err.response.data.error));
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Box>
      <PaperBox>
        <PostSectionCreatePost />
      </PaperBox>
      <Box marginTop={2}>
        {posts.map((post, i) => (
          <Post key={post._id} post={post} />
        ))}
      </Box>
    </Box>
  );
};

export default PostSection;
