import React from "react";
import { Paper, Box, styled, TextField, Chip, Typography, Avatar } from "@mui/material";
import { FcCompactCamera, FcVideoCall, FcCalendar } from "react-icons/fc";

const PostContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
        backgroundColor: "rgba(0,0,0,0.1)",
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

const PostSection = () => {
  return (
    <PostContainer>
      <Box padding={1}>
        <Box display="flex" alignItems="flex-start">
          <Box style={{padding: "0px 15px 0px 0px"}}>
            <Avatar src="https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png" style={{width: 35, height: 35}} />
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
          {postTypeList.map((postType) => (
            <PostTypeChip label={postType.label} icon={postType.icon} />
          ))}
        </Box>
      </Box>
    </PostContainer>
  );
};

export default PostSection;
