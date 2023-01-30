import React from "react";
import { Box } from "@mui/material";
import PostSectionCreatePost from "./PostSectionCreatePost";
import Post from "./post/Post";
import PaperBox from "../../../../components/styled/PaperBox";

const postList = [];

const PostSection = () => {
  return (
    <Box>
      <PaperBox>
        <PostSectionCreatePost />
      </PaperBox>
      <Box marginTop={2}>
        {postList.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </Box>
    </Box>
  );
};

export default PostSection;
