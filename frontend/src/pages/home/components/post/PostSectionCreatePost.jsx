import React, { useState } from "react";
import { Box, TextField, Typography, Avatar, Button } from "@mui/material";
import { FcCompactCamera, FcVideoCall, FcCalendar } from "react-icons/fc";
import UploadPhotoModal from "../../../../components/app/common/modal/UploadPhotoModal";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../states/other/loadingSlice";
import {
  showError,
  showSuccess,
} from "../../../../states/other/notificationSlice";
import axios from "axios";

////////// USE BELOW COMMENTED CODE TO ADD MULTIPLE CHIP BUTTONS

// const POST_TYPE_LIST_ICON_SIZE = 21;

// const PostTypeChip = ({ postType }) => {
//   return (
//     <Box
//       onClick={postType.clickAction}
//       sx={{
//         display: "inline-flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "5px 10px",
//         borderRadius: "5px",
//         cursor: "pointer",
//         marginRight: "10px",
//         backgroundColor: "rgba(0,0,0,0.06)",
//         "&:hover": {
//           backgroundColor: "rgba(0,0,0,0.12)",
//         },
//       }}
//     >
//       {postType.icon}
//       <Typography
//         color="grey.700"
//         fontSize={13}
//         variant="h3"
//         style={{ marginLeft: "5px" }}
//       >
//         {postType.label}
//       </Typography>
//     </Box>
//   );
// };

// const postTypeList = [
//   {
//     label: "Photo",
//     icon: (
//       <FcCompactCamera
//         style={{
//           width: POST_TYPE_LIST_ICON_SIZE,
//           height: POST_TYPE_LIST_ICON_SIZE,
//         }}
//       />
//     ),
//     clickAction: () => {
//       setShowUploadPhotoModal(true);
//     },
//   },
// ];

const PostSectionCreatePost = ({posts,setPosts}) => {
  const [showUploadPhotoModal, setShowUploadPhotoModal] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.home.user);

  const [postContent, setPostContent] = useState("");

  const uploadPost = async (content, setContent, file) => {
    if ((!content || content.trim().length < 1) && !file) {
      dispatch(
        showError("Post should contain either some text or a media file")
      );
      return;
    }

    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        "/api/posts/create",
        { content: postContent, media: file },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setContent("");
      dispatch(setLoading(false));
      setPosts([response.data.post,...posts])
      dispatch(showSuccess("Post uploaded successfully"));
    } catch (err) {
      dispatch(showError(err.response.data.error));
      dispatch(setLoading(false));
    }
  };

  return (
    <Box padding={1}>
      <Box display="flex" alignItems="flex-start">
        <Box style={{ padding: "0px 15px 0px 0px" }}>
          <Avatar
            src={user.profilePictureURL}
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
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </Box>
      </Box>
      <Box
        marginTop={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          {/* {postTypeList.map((postType, i) => (
            <PostTypeChip key={i} postType={postType} />
          ))} */}

          <Box
            onClick={() => {
              setShowUploadPhotoModal(true);
            }}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px 10px",
              borderRadius: "5px",
              boxSizing: "content-box",
              height: "25px",
              cursor: "pointer",
              marginRight: "10px",
              backgroundColor: "rgba(0,0,0,0.06)",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.12)",
              },
            }}
          >
            <FcCompactCamera
              style={{
                width: 21,
                height: 21,
              }}
            />
            <Typography
              color="grey.700"
              fontSize={13}
              variant="h3"
              style={{ marginLeft: "5px" }}
            >
              Photo
            </Typography>
          </Box>

          <Button
            onClick={() => uploadPost(postContent, setPostContent)}
            variant="contained"
            disableElevation
          >
            Post
          </Button>
        </Box>
      </Box>
      <UploadPhotoModal
        open={showUploadPhotoModal}
        setOpen={setShowUploadPhotoModal}
        postContent={postContent}
        setPostContent={setPostContent}
        uploadPost={uploadPost}
      />
    </Box>
  );
};

export default PostSectionCreatePost;
