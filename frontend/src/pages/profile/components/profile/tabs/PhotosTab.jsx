import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import { showImageModal } from "../../../../../states/other/imageModalSlice";

const PhotosTab = () => {
  const posts = useSelector((state) => state.profile.posts);
  const imagePosts = posts.filter((post) => post.mediaLink != "");

  useEffect(() => {
    console.log("Posts: " + JSON.stringify(posts));
    console.log("Image Posts: " + JSON.stringify(imagePosts));
  }, []);

  const dispatch = useDispatch();

  return (
    <Box paddingBottom={1}>
      <ImageList cols={3}>
        {imagePosts &&
          imagePosts.length > 0 &&
          imagePosts.map((item) => (
            <ImageListItem key={item._id}>
              <img
                src={`${item.mediaLink}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.mediaLink}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt="post item"
                loading="lazy"
                style={{ height: 200, cursor: "pointer" }}
                onClick={() => dispatch(showImageModal(item.mediaLink))}
              />
            </ImageListItem>
          ))}
      </ImageList>
    </Box>
  );
};

export default PhotosTab;
