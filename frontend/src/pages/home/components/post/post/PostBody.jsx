import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const PostBody = ({ post }) => {
  return (
    <Box paddingBottom={1} style={{ textAlign: "left" }}>
      <Box paddingX={2}>
        {post.content && (
          <Typography
            paddingTop={2}
            variant="h3"
            fontWeight={400}
            fontSize={18}
          >
            {post.content}
          </Typography>
        )}
        {post.mediaLink && (
          <img
            alt="post"
            style={{
              width: "100%",
              maxHeight: "800px",
              marginTop: "15px",
              borderRadius: "5px",
              marginBottom: "15px",
            }}
            src={post.mediaLink}
          />
        )}
      </Box>
      <Divider />
    </Box>
  );
};

export default PostBody;
