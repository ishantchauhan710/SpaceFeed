import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PaperBox from "../../../../components/styled/PaperBox";
import { setUser } from "../../../../states/homeSlice";
import { setLoading } from "../../../../states/other/loadingSlice";
import { showError } from "../../../../states/other/notificationSlice";
import OnlineUsers from "../../../home/components/suggestion/OnlineUsers";

const CustomListItem = ({
  user,
  toggleUserFollow,
  isFollowing,
  openProfile,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={1}
      sx={{
        cursor: "pointer",
      }}
    >
      <Box
        style={{
          flex: "0.7",
          overflow: "hidden",
        }}
        onClick={() => openProfile(user._id)}
      >
        <ListItem disablePadding>
          <ListItemAvatar>
            <Avatar src={user.profilePictureURL} />
          </ListItemAvatar>
          <ListItemText
            primary={user.username}
            primaryTypographyProps={{
              fontWeight: 600,
              color: (theme) => theme.palette.grey[800],
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
            secondary={user.email}
            secondaryTypographyProps={{
              color: (theme) => theme.palette.grey[700],
              style: {
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              },
            }}
          />
        </ListItem>
      </Box>
      <Box style={{ flex: "0.3", paddingLeft: "10px" }}>
        <Button
          onClick={() => toggleUserFollow(user._id)}
          variant={isFollowing ? "outlined" : "contained"}
          disableElevation
        >
          {isFollowing === true ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Box>
  );
};

const SuggestionSection = () => {
  const dispatch = useDispatch();
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const navigate = useNavigate();

  const getSuggestedUsers = async () => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get("/api/user/suggested");
      const userList = response.data.suggestedUsers;
      setSuggestedUsers(userList);
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(showError(err.response.data.error));
      dispatch(setLoading(false));
    }
  };

  const toggleUserFollow = async (userId) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post("/api/user/follow", {
        userToFollow: userId,
      });

      // Update the user in store
      const newUser = response.data.user;
      dispatch(setUser(newUser));

      dispatch(setLoading(false));
    } catch (err) {
      dispatch(showError(err.response.data.error));
      dispatch(setLoading(false));
    }
  };

  const user = useSelector((state) => state.home.user);

  useEffect(() => {
    getSuggestedUsers();
  }, []);

  const openProfile = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <>
      <OnlineUsers />
      <PaperBox style={{ marginTop: "15px" }}>
        <Box padding={1} style={{ textAlign: "left" }}>
          <Typography variant="h2" fontSize={18} fontWeight={600}>
            Suggested People
          </Typography>
          <Box paddingTop={1}>
            <List>
              {suggestedUsers &&
                suggestedUsers.length > 0 &&
                suggestedUsers.map((suggestedUser) => (
                  <CustomListItem
                    user={suggestedUser}
                    key={suggestedUser._id}
                    toggleUserFollow={toggleUserFollow}
                    isFollowing={user.followings.includes(suggestedUser._id)}
                    openProfile={openProfile}
                  />
                ))}
            </List>
          </Box>
        </Box>
      </PaperBox>
    </>
  );
};

export default SuggestionSection;
