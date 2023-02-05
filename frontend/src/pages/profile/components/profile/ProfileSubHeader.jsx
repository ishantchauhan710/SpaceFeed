import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import BoxCentered from "../../../../components/styled/BoxCentered";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { showError } from "../../../../states/other/notificationSlice";
import { setLoading } from "../../../../states/other/loadingSlice";
import { setUser } from "../../../../states/profileSlice";

import UserListModal from "../../../../components/app/common/modal/UserListModal";
import { useLocation, useParams } from "react-router-dom";

const ProfileSubHeaderItem = ({ label, icon, clickAction }) => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        color: (theme) => theme.palette.grey[800],
        "&:hover": { color: (theme) => theme.palette.primary[600] },
      }}
      display="flex"
      alignItems="center"
      marginRight={2}
      onClick={() => clickAction()}
    >
      <BoxCentered>{icon}</BoxCentered>
      <BoxCentered>
        <Typography fontSize={15} marginLeft={1}>
          {label}
        </Typography>
      </BoxCentered>
    </Box>
  );
};

const ProfileSubHeader = () => {
  const user = useSelector((state) => state.profile.user);
  const loggedInUser = useSelector((state) => state.home.user);

  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [showFollowingsModal, setShowFollowingsModal] = useState(false);

  const dispatch = useDispatch();

  const [
    isLoggedInUserFollowingProfileUser,
    setIsLoggedInUserFollowingProfileUser,
  ] = useState();

  useEffect(() => {
    const following = (loggedInUser && loggedInUser.followings)
      ? loggedInUser.followings.find((item) => item._id == user._id)
      : false;

    const followResult = following !== undefined;

    setIsLoggedInUserFollowingProfileUser(followResult);
  }, [user]);

  const toggleUserFollow = async (userId) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post("/api/user/follow", {
        userToFollow: userId,
      });

      dispatch(setLoading(false));
      setIsLoggedInUserFollowingProfileUser(
        !isLoggedInUserFollowingProfileUser
      );
    } catch (err) {
      dispatch(showError(err.response.data.error));
      dispatch(setLoading(false));
      setIsLoggedInUserFollowingProfileUser(
        !isLoggedInUserFollowingProfileUser
      );
    }
  };

  const followers = useSelector((state) => state.profile.followers);
  const followings = useSelector((state) => state.profile.user.followings);
  const posts = useSelector((state) => state.profile.posts);

  const showFollowers = () => {
    if (followers && followers.length <= 0) {
      return;
    }
    setShowFollowersModal(true);
  };

  const showFollowings = () => {
    if (followings && followings.length <= 0) {
      return;
    }
    setShowFollowingsModal(true);
  };

  return (
    <>
      <Box
        paddingX={4}
        paddingBottom={2}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          <ProfileSubHeaderItem
            label={`${posts ? posts.length : "0"} Posts`}
            icon={<FeedOutlinedIcon />}
          />
        </Box>
        <ProfileSubHeaderItem
          label={`${followers ? followers.length : 0} Followers`}
          icon={<EmojiEventsOutlinedIcon />}
          clickAction={showFollowers}
        />
        <ProfileSubHeaderItem
          label={`${followings ? followings.length : 0} Followings`}
          icon={<HandshakeOutlinedIcon />}
          clickAction={showFollowings}
        />
      </Box>

      {followers && followers.length > 0 && (
        <UserListModal
          label="Followers"
          open={showFollowersModal}
          setOpen={setShowFollowersModal}
          userList={followers}
        />
      )}
      {followings && followings.length > 0 && (
        <UserListModal
          label="Followings"
          open={showFollowingsModal}
          setOpen={setShowFollowingsModal}
          userList={followings}
        />
      )}

      {user && loggedInUser && user._id !== loggedInUser._id && (
        <Box
          paddingX={4}
          marginBottom={2}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Button
            style={{ marginRight: "10px" }}
            variant={
              isLoggedInUserFollowingProfileUser ? "outlined" : "contained"
            }
            disableElevation
            onClick={() => toggleUserFollow(user._id)}
          >
            {isLoggedInUserFollowingProfileUser === true
              ? "Unfollow"
              : "Follow"}
          </Button>
          <Button variant="outlined" disableElevation>
            Message
          </Button>
        </Box>
      )}
    </>
  );
};

export default ProfileSubHeader;
