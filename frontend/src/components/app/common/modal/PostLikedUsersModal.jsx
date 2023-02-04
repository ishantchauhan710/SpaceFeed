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
  Menu,
  ListItemButton,
} from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ImageIcon from "@mui/icons-material/Image";
import { useNavigate } from "react-router-dom";

const PostLikedUsersModal = ({ open, setOpen, likedByList }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
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
            Likes
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
        <Box>
          <Box
            sx={{
              height: 400,
              overflowY: "auto",
            }}
          >
            <List sx={{ bgcolor: "background.paper" }}>
              {likedByList.map((likedUser) => (
                <ListItem
                  onClick={() => {
                    handleClose();
                    navigate(`/profile/${likedUser._id}`);
                  }}
                  key={likedUser._id}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar src={likedUser.profilePictureURL} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={likedUser.username}
                      secondary={likedUser.email}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            padding={2}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Button
              color="primary"
              variant="outlined"
              disableElevation
              onClick={() => handleClose()}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default PostLikedUsersModal;
