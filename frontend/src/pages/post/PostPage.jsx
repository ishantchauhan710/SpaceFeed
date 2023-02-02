import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../../components/app/common/navbar/NavBar";
import Post from "../../components/app/common/post/Post";
import { setLoading } from "../../states/other/loadingSlice";
import { showError } from "../../states/other/notificationSlice";

const PostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [post, setPost] = useState();

  // Logic to display post is same like other pages, posts will be treated like array but it will have only one element
  const getPost = async () => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`/api/posts/post/${id}`);
      setPost(response.data.post);
      console.log(response.data.post);
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(showError(err.response.data.error));
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <>
      <NavBar />

      <Grid container spacing={2}>
        <Grid
          item
          md={2}
          xs={12}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        ></Grid>
        <Grid item md={8} xs={12}>
          <Box>{post && <Post key={post._id} post={post} />}</Box>
        </Grid>
        <Grid
          item
          md={2}
          xs={12}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        ></Grid>
      </Grid>
    </>
  );
};

export default PostPage;
