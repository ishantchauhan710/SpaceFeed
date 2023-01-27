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

const PostLikedUsersModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const likedByList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

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
              {likedByList.map((item, i) => (
                <ListItem key={i} disablePadding>
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Ishant Chauhan"
                      secondary="ishantchauhan@spacefeed.com"
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
