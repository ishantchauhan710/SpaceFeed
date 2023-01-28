import React from "react";
import { Box, Divider, Grid } from "@mui/material/";
import PaperBoxUnspaced from "../../../../components/styled/PaperBoxUnspaced";
import ProfileHeader from "./ProfileHeader";
import ProfileSubHeader from "./ProfileSubHeader";
import ProfileTabs from "./ProfileTabs";
import Post from "../../../home/components/post/post/Post";

const postList = [
  {
    id: 1,
    title: "Post Title",
    data: "Post Data",
  },
  {
    id: 2,
    title: "Post Title",
    data: "Post Data",
  },
  {
    id: 3,
    title: "Post Title",
    data: "Post Data",
  },
  {
    id: 4,
    title: "Post Title",
    data: "Post Data",
  },
  {
    id: 5,
    title: "Post Title",
    data: "Post Data",
  },
];

const ProfileLeftSection = () => {
  return (
    <Box>
      <PaperBoxUnspaced>
        <ProfileHeader />
        <ProfileSubHeader />
        <ProfileTabs />
      </PaperBoxUnspaced>

      <Box marginTop={2}>
        {postList.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </Box>
    </Box>
  );
};

export default ProfileLeftSection;
