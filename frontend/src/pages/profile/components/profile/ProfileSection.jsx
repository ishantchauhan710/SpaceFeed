import React from "react";
import { Box, Divider, Grid } from "@mui/material/";
import PaperBoxUnspaced from "../../../../components/styled/PaperBoxUnspaced";
import ProfileHeader from "./ProfileHeader";
import ProfileSubHeader from "./ProfileSubHeader";
import ProfileTabs from "./ProfileTabs";
import Post from "../../../../components/app/common/post/Post";
import { useSelector } from "react-redux";

const ProfileLeftSection = () => {
  const posts = useSelector((state) => state.profile.posts);
  const user = useSelector((state) => state.home.user);

  return (
    <Box>
      <PaperBoxUnspaced>
        <ProfileHeader />
        <ProfileSubHeader />
        <ProfileTabs />
      </PaperBoxUnspaced>

      <Box marginTop={2}>
        {user &&
          posts &&
          posts.length > 0 &&
          posts.map((post) => <Post key={post._id} post={post} />)}
      </Box>
    </Box>
  );
};

export default ProfileLeftSection;
