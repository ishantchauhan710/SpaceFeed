import React from "react";
import { Box, Grid, IconButton, Link } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import PostLikedUsersModal from "../../../../../components/spacefeed/spacefeed/modal/PostLikedUsersModal";
import { useState } from "react";

const PostActionButton = ({ label, icon, labelAction }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <IconButton>{icon}</IconButton>
      <Link
        marginLeft={1}
        color="grey.800"
        sx={{
          cursor: "pointer",
          "&:hover": {
            color: (theme) => theme.palette.primary[900],
          },
        }}
        underline="none"
        fontSize={15}
        onClick={labelAction}
      >
        {label}
      </Link>
    </Box>
  );
};
const PostActions = () => {
  const [showLikesModal, setShowLikesModal] = useState(false);

  return (
    <Box paddingX={2}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <PostActionButton
            label="Like"
            icon={<FavoriteIcon />}
            labelAction={() => setShowLikesModal(true)}
          />
        </Grid>
        <Grid item>
          <PostActionButton label="Comment" icon={<CommentIcon />} />
        </Grid>
        <Grid item>
          <PostActionButton label="Share" icon={<ShareIcon />} />
        </Grid>
      </Grid>
      <PostLikedUsersModal open={showLikesModal} setOpen={setShowLikesModal} />
    </Box>
  );
};

export default PostActions;
