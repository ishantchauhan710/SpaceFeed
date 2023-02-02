import { Avatar, Box, Typography, Link } from "@mui/material";
import React, { useEffect } from "react";
import { parsePostDate } from "../../../../util/dateUtil";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../../states/slices/loadingSlice";
import { showError } from "../../../../states/slices/notificationSlice";
import { useState } from "react";

const PostComment = ({ comment, user }) => {
  const dispatch = useDispatch();
  const [likeLoading, setLikeLoading] = useState(false);
  const [commentLiked, setCommentLiked] = useState();

  const checkIfCommentLiked = () => {
    const result = comment.likedBy.find((item) => item == user._id);
    setCommentLiked(result !== undefined);
    //console.log("Result: " + commentLiked);
  };

  useEffect(() => {
    checkIfCommentLiked();
  }, []);

  const likeComment = async () => {
    if (likeLoading === true) {
      return;
    }
    setCommentLiked(!commentLiked);
    if (commentLiked === true) {
      comment.likedBy.pop(user);
    } else {
      comment.likedBy.push(user);
    }
    try {
      setLikeLoading(true);
      await axios.post("/api/like/comment", { commentId: comment._id });
      setLikeLoading(false);
    } catch (err) {
      dispatch(showError(err.response.data.message));
      setCommentLiked(!commentLiked);
      setLikeLoading(false);
    }
  };

  return (
    <Box
      style={{ cursor: "pointer" }}
      paddingX={2}
      paddingTop={1}
      display="flex"
      alignItems="flex-start"
      marginBottom={1}
    >
      <Avatar
        style={{ width: 35, height: 35 }}
        src={comment.commentedBy.profilePictureURL}
      />
      <Box width="100%">
        <Box
          sx={{
            textAlign: "left",
            flex: 1,
            marginLeft: "10px",
            backgroundColor: "background.200",
            paddingX: 2,
            paddingTop: 2,
            paddingBottom: 1,
            borderRadius: "0px 10px 10px 10px",
          }}
        >
          <Box display="flex" alignItems="center">
            <Link
              sx={{
                color: "grey.900",
                "&:hover": { color: "primary.600" },
              }}
              underline="none"
              fontWeight={600}
              fontSize={14}
              href="#"
              flex={1}
            >
              {comment.commentedBy.username}
            </Link>{" "}
            <Typography
              style={{ marginTop: "5px" }}
              variant="h6"
              component="span"
              fontSize={13}
            >
              {parsePostDate(comment.createdAt)}
            </Typography>
          </Box>

          <Typography style={{ marginTop: "5px" }} variant="h6" fontSize={14}>
            {comment.content}
          </Typography>
          <Box marginTop={1} textAlign="right">
            <Link
              sx={{
                color: "grey.700",
                "&:hover": { color: "primary.600" },
              }}
              underline="none"
              fontWeight={400}
              fontSize={13}
              flex={1}
              onClick={() => likeComment()}
            >
              {commentLiked ? `Liked` : `Like`}{" "}
              {comment.likedBy.length == 0
                ? ""
                : "(" + comment.likedBy.length + ")"}
            </Link>

            <Typography component="span" marginX={1}>
              •
            </Typography>
            <Link
              sx={{
                color: "grey.700",
                "&:hover": { color: "primary.600" },
              }}
              underline="none"
              fontWeight={400}
              fontSize={13}
              href="#"
              flex={1}
            >
              Delete
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostComment;
