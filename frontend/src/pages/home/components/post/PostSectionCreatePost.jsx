import React from "react";
import {
  Box,
  TextField,
  Typography,
  Avatar,
} from "@mui/material";
import { FcCompactCamera, FcVideoCall, FcCalendar } from "react-icons/fc";
const POST_TYPE_LIST_ICON_SIZE = 21;

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
  },
  {
    label: "Event",
    icon: (
      <FcCalendar
        style={{
          width: POST_TYPE_LIST_ICON_SIZE,
          height: POST_TYPE_LIST_ICON_SIZE,
        }}
      />
    ),
  },
];

const PostTypeChip = ({ label, icon }) => {
  return (
    <Box
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
      {icon}
      <Typography
        color="grey.700"
        fontSize={13}
        variant="h3"
        style={{ marginLeft: "5px" }}
      >
        {label}
      </Typography>
    </Box>
  );
};

const PostSectionCreatePost = () => {
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
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        marginTop={2}
      >
        {postTypeList.map((postType,i) => (
          <PostTypeChip key={i} label={postType.label} icon={postType.icon} />
        ))}
      </Box>
    </Box>
  );
};

export default PostSectionCreatePost;
