import React from "react";
import {
  Paper,
  Box,
  styled,
  TextField,
  Chip,
  Typography,
  Avatar,
  Grid,
  IconButton,
  Link,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

const PostActionButton = ({ label, icon }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <IconButton>{icon}</IconButton>
      <Link color="grey.800" href="#" underline="none" fontSize={13}>
        {label}
      </Link>
    </Box>
  );
};
const PostActions = () => {
  return (
    <Box paddingX={2}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <PostActionButton label="Like" icon={<FavoriteIcon />} />
        </Grid>
        <Grid item>
          <PostActionButton label="Comment" icon={<CommentIcon />} />
        </Grid>
        <Grid item>
          <PostActionButton label="Share" icon={<ShareIcon />} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PostActions;
