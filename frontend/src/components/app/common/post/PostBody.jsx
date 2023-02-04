import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showImageModal } from "../../../../states/other/imageModalSlice";

const PostBody = ({ post }) => {
  const dispatch = useDispatch();
  const [imageBroken, setImageBroken] = useState(false);
  return (
    <Box paddingBottom={1} style={{ textAlign: "left" }}>
      <Box paddingX={2}>
        {post.content && (
          <Typography
            paddingTop={2}
            variant="h4"
            fontWeight={400}
            fontSize={16}
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
              display: imageBroken ? "none" : "inline",
            }}
            onError={() => setImageBroken(true)}
            src={post.mediaLink}
            onClick={() => {
              dispatch(showImageModal(post.mediaLink));
            }}
          />
        )}
      </Box>
      <Divider style={{ marginTop: "20px" }} />
    </Box>
  );
};

export default PostBody;
