import React from "react";
import { Box, Grid, IconButton, Link } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import PostLikedUsersModal from "../modal/PostLikedUsersModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showError } from "../../../../states/other/notificationSlice";
import { setLoading } from "../../../../states/other/loadingSlice";
import { pushPost, popPost } from "../../../../states/profileSlice";
import axios from "axios";
import { useEffect } from "react";

const PostActionButton = ({
  label,
  icon,
  iconAction,
  labelAction,
  postLiked,
}) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <IconButton onClick={iconAction}>{icon}</IconButton>
      <Link
        marginLeft={1}
        sx={{
          cursor: "pointer",
          color: (theme) =>
            postLiked ? theme.palette.error.main : theme.palette.grey[600],
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
const PostActions = ({
  post,
  user,
  postLiked,
  setPostLiked,
  setShowCommentModal,
}) => {
  const [showLikesModal, setShowLikesModal] = useState(false);
  const dispatch = useDispatch();

  // A custom loading variable to prevent multiple API calls when liking a post
  const [likeLoading, setLikeLoading] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    setLikesCount(post.likedBy.length);
  }, []);

  const togglePostLike = async (postId) => {
    if (likeLoading === true) {
      return;
    }
    setPostLiked(!postLiked);
    if (postLiked === true) {
      //dispatch(popPost(user));
      setLikesCount(likesCount - 1);
    } else {
      //dispatch(pushPost(user));
      setLikesCount(likesCount + 1);
    }

    try {
      // No need to show loading bar during like/unlike operations
      //dispatch(setLoading(true));
      setLikeLoading(true);
      const response = await axios.post("/api/like", {
        postId: postId,
      });

      //dispatch(setLoading(false));
      setLikeLoading(false);
    } catch (err) {
      dispatch(showError(err.response.data.error));
      //dispatch(setLoading(false));
      // Undo like on error
      setPostLiked(!postLiked);
      setLikeLoading(false);
    }
  };

  return (
    <Box paddingX={2}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <PostActionButton
            label={
              (postLiked ? `Liked` : `Like`) +
              " " +
              (likesCount <= 0 ? "" : "(" + likesCount + ")")
            }
            icon={
              <FavoriteIcon
                sx={{
                  color: (theme) =>
                    postLiked
                      ? theme.palette.error.main
                      : theme.palette.grey[600],
                }}
              />
            }
            labelAction={() => {
              if (post.likedBy.length > 0) {
                setShowLikesModal(true);
              }
            }}
            iconAction={() => togglePostLike(post._id)}
            postLiked={postLiked}
          />
        </Grid>
        <Grid item>
          <PostActionButton
            label="Comment"
            icon={<CommentIcon />}
            iconAction={() => setShowCommentModal(true)}
            labelAction={() => setShowCommentModal(true)}
          />
        </Grid>
        <Grid item>
          <PostActionButton label="Share" icon={<ShareIcon />} />
        </Grid>
      </Grid>
      <PostLikedUsersModal
        open={showLikesModal}
        setOpen={setShowLikesModal}
        likedByList={post.likedBy}
      />
    </Box>
  );
};

export default PostActions;
