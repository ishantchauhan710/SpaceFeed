import React, { useState } from "react";
import { Box, TextField, Typography, Avatar, Button } from "@mui/material";
import { FcCompactCamera, FcVideoCall, FcCalendar } from "react-icons/fc";
import UploadPhotoModal from "../../../../components/spacefeed/spacefeed/modal/UploadPhotoModal";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import UploadVideoModal from "../../../../components/spacefeed/spacefeed/modal/UploadVideoModal";

const POST_TYPE_LIST_ICON_SIZE = 21;

const PostTypeChip = ({ postType }) => {
  return (
    <Box
      onClick={postType.clickAction}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px 10px",
        borderRadius: "5px",
        cursor: "pointer",
        marginRight: "10px",
        backgroundColor: "rgba(0,0,0,0.06)",
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.12)",
        },
      }}
    >
      {postType.icon}
      <Typography
        color="grey.700"
        fontSize={13}
        variant="h3"
        style={{ marginLeft: "5px" }}
      >
        {postType.label}
      </Typography>
    </Box>
  );
};

const PostSectionCreatePost = () => {
  const [showUploadPhotoModal, setShowUploadPhotoModal] = useState(false);
  const [showUploadVideoModal, setShowUploadVideoModal] = useState(false);

  const postTypeList = [
    {
      label: "Photo",
      icon: (
        <FcCompactCamera
          style={{
            width: POST_TYPE_LIST_ICON_SIZE,
            height: POST_TYPE_LIST_ICON_SIZE,
          }}
        />
      ),
      clickAction: () => {
        setShowUploadPhotoModal(true);
      },
    },
    {
      label: "Video",
      icon: (
        <FcVideoCall
          style={{
            width: POST_TYPE_LIST_ICON_SIZE,
            height: POST_TYPE_LIST_ICON_SIZE,
          }}
        />
      ),
      clickAction: () => {
        setShowUploadVideoModal(true);
      },
    },
  ];

  return (
    <Box padding={1}>
      <Box display="flex" alignItems="flex-start">
        <Box style={{ padding: "0px 15px 0px 0px" }}>
          <Avatar
            src="https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png"
            style={{ width: 35, height: 35 }}
          />
        </Box>
        <Box>
          <TextField
            className="create-post-text-field"
            fullWidth
            placeholder="What's going on in your mind?"
            multiline
            minRows={4}
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Box>
      </Box>
      <Box
        marginTop={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" justifyContent="flex-start">
          {postTypeList.map((postType, i) => (
            <PostTypeChip key={i} postType={postType} />
          ))}
        </Box>
        <Box>
          <Button variant="contained" disableElevation>
            Post
          </Button>
        </Box>
      </Box>
      <UploadPhotoModal
        open={showUploadPhotoModal}
        setOpen={setShowUploadPhotoModal}
      />
      <UploadVideoModal
        open={showUploadVideoModal}
        setOpen={setShowUploadVideoModal}
      />
    </Box>
  );
};

export default PostSectionCreatePost;
