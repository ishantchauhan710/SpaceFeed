import React from "react";
import Button from "@mui/material/Button";
import {
  Dialog,
  Box,
  Typography,
  IconButton,
  Divider,
  TextField,
  Avatar,
} from "@mui/material/";
import { useDispatch } from "react-redux";
import {
  showError,
  showSuccess,
} from "../../../../states/other/notificationSlice";
import CloseIcon from "@mui/icons-material/Close";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState } from "react";
import StyledTextField from "../../../styled/StyledTextField";
import axios from "axios";
import { setLoading } from "../../../../states/other/loadingSlice";

const CommentModal = ({ post, open, setOpen, comments, setComments }) => {
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const postComment = async () => {
    handleClose();
    if (!comment || comment.trim().length === 0) {
      dispatch(showError("Comment cannot be blank"));
      return;
    }

    try {
      dispatch(setLoading(true));
      const response = await axios.post("/api/comment", {
        postId: post._id,
        content: comment,
      });
      //console.log("Response: " + JSON.stringify(response));
      const newComment = response.data.comment;
      setComment("");
      setComments([newComment, ...comments]);
      dispatch(showSuccess("Comment successful!"));
      dispatch(setLoading(false));
    } catch (err) {
      // dispatch(showError(err.response.data.error));
      dispatch(showError(err.message));
      dispatch(setLoading(false));
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
    >
      <Box>
        <Box
          paddingX={2}
          paddingY={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h1" fontSize={20} fontWeight={600}>
            Comment
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box padding={2}>
          <StyledTextField
            fullWidth
            multiline
            rows={8}
            placeholder="Write your comment here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <Box
            paddingTop={2}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Button
              style={{ marginRight: "10px" }}
              color="error"
              variant="outlined"
              disableElevation
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              onClick={() => postComment()}
              color="primary"
              variant="contained"
              disableElevation
            >
              Comment
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default CommentModal;
