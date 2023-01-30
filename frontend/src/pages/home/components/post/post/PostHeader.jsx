import React from "react";
import { Box, Typography, Avatar, IconButton, Link } from "@mui/material";
import { parsePostDate } from "../../../../../util/dateUtil";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PostMenu from "./PostMenu";

const PostHeader = ({ post }) => {
  const [postAnchorEl, setPostAnchorEl] = React.useState(null);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="stretch"
      padding={1}
    >
      <Box style={{ cursor: "pointer" }}>
        <Avatar src={post.createdBy.profilePictureURL} />
      </Box>
      <Box
        flex={1}
        marginLeft={2}
        marginRight={2}
        style={{ textAlign: "left", cursor: "pointer" }}
      >
        <Link
          sx={{
            color: "grey.900",
            "&:hover": { color: "primary.600" },
          }}
          underline="none"
          fontWeight={600}
          fontSize={14}
          href="#"
        >
          {post.createdBy.username}
        </Link>

        <Typography variant="h6" fontSize={13}>
          {parsePostDate(post.createdAt)}
        </Typography>
      </Box>
      <Box>
        <IconButton onClick={(e) => setPostAnchorEl(e.currentTarget)}>
          <MoreVertIcon style={{ width: 21, height: 21 }} />
        </IconButton>
      </Box>
      <PostMenu anchorEl={postAnchorEl} setAnchorEl={setPostAnchorEl} />
    </Box>
  );
};

export default PostHeader;
