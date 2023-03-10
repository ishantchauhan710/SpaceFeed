import React from "react";
import { Box, Skeleton } from "@mui/material";
import PostSectionCreatePost from "./PostSectionCreatePost";
import Post from "../../../../components/app/common/post/Post";
import PaperBox from "../../../../components/styled/PaperBox";
import { useDispatch, useSelector } from "react-redux";
import { showError } from "../../../../states/other/notificationSlice";
import { setLoading } from "../../../../states/other/loadingSlice";
import axios from "axios";
import { useState, useEffect } from "react";
import { setPosts } from "../../../../states/homeSlice";
import PostLoading from "../../../../components/loading/PostLoading";

const PostSection = () => {
  const [postsList, setPostsList] = useState([]);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.home.user);

  const [postsLoading, setPostsLoading] = useState(false);

  // Here I am using 2 states for posts, one is a redux state and another is react state. Redux state is to display posts in other pages where as use state is used as it is mutable and can be updated instantly on new post creation
  const getUserPosts = async () => {
    try {
      //dispatch(setLoading(true));
      setPostsLoading(true);
      const response = await axios.get(`/api/posts/feed`);
      const list = response.data.posts;
      dispatch(setPosts(list));
      setPostsList(list);
      //console.log(JSON.stringify(postList));
      //dispatch(setLoading(false));
      setPostsLoading(false);
    } catch (err) {
      dispatch(showError(err.response.data.error));
      //dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <Box>
      <PaperBox>
        <PostSectionCreatePost posts={postsList} setPosts={setPostsList} />
      </PaperBox>
      <Box marginTop={2}>
        {postsLoading ? (
          <PostLoading />
        ) : (
          postsList &&
          postsList.length > 0 &&
          postsList.slice(0).reverse().map((post, i) => (
            <Post key={post._id} post={post} setPosts={setPostsList} />
          ))
        )}

        {/* {postsList &&
          postsList.length > 0 &&
          postsList.map((post, i) => (
            <Post key={post._id} post={post} setPosts={setPostsList} />
          ))} */}
      </Box>
    </Box>
  );
};

export default PostSection;
