import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { showImageModal } from "../../../../states/other/imageModalSlice";

const PostBody = ({ post }) => {
  const dispatch = useDispatch();

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
              cursor: "pointer",
            }}
            src={post.mediaLink}
            onClick={() => {
              dispatch(showImageModal(post.mediaLink));
            }}
          />
        )}
      </Box>
      <Divider style={{ marginTop: "15px" }} />
    </Box>
  );
};

export default PostBody;
