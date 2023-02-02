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
import { showError } from "../../../../states/other/notificationSlice";
import CloseIcon from "@mui/icons-material/Close";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState } from "react";

const UploadPhotoModal = ({
  open,
  setOpen,
  postContent,
  setPostContent,
  uploadPost,
}) => {
  const [postPicture, setPostPicture] = useState(null);

  const dispatch = useDispatch();

  const handleClose = () => {
    setPostPicture();
    setOpen(false);
  };

  const handleUpload = () => {
    if (postPicture === null) {
      dispatch(showError("Please select an image"));
      return;
    }
    handleClose();
    uploadPost(postContent, setPostContent, postPicture);
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
            Upload photo
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
          <Box
            onClick={() => {
              document.getElementById("postImagePicker").click();
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              border: "2px dashed rgba(0,0,0,0.2)",
              borderRadius: 2,
              height: 300,
              cursor: "pointer",
            }}
          >
            <CameraAltIcon sx={{ width: 60, height: 60 }} />
            <Typography variant="h6" fontSize={15}>
              {postPicture ? "Image Selected" : "Click here to upload an image"}
            </Typography>
            <input
              type="file"
              hidden
              id="postImagePicker"
              accept="image/*"
              name="media"
              onChange={(e) => setPostPicture(e.target.files[0])}
            />
          </Box>
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
              onClick={() => {
                handleUpload();
              }}
              color="primary"
              variant="contained"
              disableElevation
            >
              Upload
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default UploadPhotoModal;
