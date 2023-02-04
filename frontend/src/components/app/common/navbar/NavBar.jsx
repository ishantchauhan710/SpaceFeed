import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Autocomplete,
  TextField,
  Avatar,
  InputAdornment,
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  Badge,
} from "@mui/material";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NavBarProfileMenu from "./NavBarProfileMenu";
import NavBarNotificationMenu from "./NavBarNotificationMenu";
import StyledTextField from "../../../styled/StyledTextField";
import { useDispatch, useSelector } from "react-redux";
import { PROFILE_PICTURE_PLACEHOLDER } from "../../../../other/constants";
import axios from "axios";
import { useEffect } from "react";
import { showError } from "../../../../states/other/notificationSlice";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const NavBar = () => {
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
  const [notificationMenuAnchor, setNotificationMenuAnchor] = useState(null);

  const showProfileMenu = (e) => {
    setProfileMenuAnchor(e.currentTarget);
  };

  const showNotificationMenu = (e) => {
    setShowNotificationBadge(false);
    setNotificationMenuAnchor(e.currentTarget);
  };

  const user = useSelector((state) => state.home.user);
  const navigate = useNavigate();

  const StyledIconButton = styled("div")(({ theme }) => ({
    width: "40px",
    height: "40px",
    backgroundColor: theme.palette.background[200],
    color: theme.palette.grey[700],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    overflow: "hidden",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary[100], 0.3),
      color: theme.palette.primary[500],
      transition: "0.3s all ease",
    },
  }));

  const AutoCompleteOutputLayout = ({ data }) => {
    return (
      <ListItem onClick={() => navigate(`/profile/${data._id}`)} disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar src={data.profilePictureURL} />
          </ListItemAvatar>
          <ListItemText primary={data.username} secondary={data.email} />
        </ListItemButton>
      </ListItem>
    );
  };

  const [searchedUsers, setSearchedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotificationBadge, setShowNotificationBadge] = useState(false);
  const dispatch = useDispatch();

  const getNotificationsFromDb = async () => {
    try {
      const response = await axios.get(`/api/notifications/${user._id}`);
      const notificationsFromDb = response.data.notifications;
      setNotifications(notificationsFromDb);
    } catch (err) {
      dispatch(showError(err.response.data.error));
    }
  };

  useEffect(() => {
    if (searchQuery.length <= 2) {
      return;
    }
    const searchUsers = setTimeout(() => {
      try {
        axios.get(`/api/user-search?search=${searchQuery}`).then((response) => {
          setSearchedUsers(response.data.users);
          console.log("Called" + JSON.stringify(response.data.users));
        });
      } catch (err) {
        setSearchedUsers([]);
        dispatch(showError(err.response.data.error));
      }
    }, 1000);
    return () => clearTimeout(searchUsers);
  }, [searchQuery]);

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getNotificationsFromDb();

    const socket = io("http://localhost:5000");
    socket.on("connect", () => console.log(socket.id));
    socket.on("connect_error", () => {
      setTimeout(() => socket.connect(), 5000);
    });

    socket.emit("join", user);

    socket.on("data", (data) => {
      //alert("Notification recieved");
      setShowNotificationBadge(true);
      setNotifications([data, ...notifications]);
    });
    socket.on("disconnect", () => {});
  }, []);

  return (
    <>
      <AppBar
        elevation={0}
        position="sticky"
        sx={{ backgroundColor: "background.alt" }}
      >
        <Toolbar
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "60px",
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Avatar
              width={40}
              height={40}
              src="/icons/logo_spacefeed_square_dark.png"
              variant="squrae"
              style={{ margin: "0px", padding: "0px" }}
              sx={{
                borderRadius: 1,
                cursor: "pointer",
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            />

            <Typography
              fontSize={23}
              color="primary.main"
              fontWeight={600}
              sx={{
                marginRight: 2,
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            >
              SpaceFeed
            </Typography>

            <Autocomplete
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
              options={searchedUsers}
              autoHighlight
              getOptionLabel={(option) => option.username}
              renderOption={(props, option) => (
                <Box>
                  <AutoCompleteOutputLayout data={option} />
                </Box>
              )}
              onInputChange={(e) => setSearchQuery(e.target.value)}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <StyledTextField
                    variant="outlined"
                    placeholder="Search..."
                    autoComplete="off"
                    {...params.inputProps}
                    InputProps={{
                      style: {
                        height: 40,
                        marginLeft: 10,
                      },
                      sx: {
                        backgroundColor: "background.200",
                      },
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              )}
            />
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <StyledIconButton
              style={{
                marginRight: 10,
              }}
            >
              <ChatIcon />
            </StyledIconButton>

            <Box onClick={showNotificationMenu}>
              <StyledIconButton
                style={{
                  marginRight: 10,
                }}
              >
                <Badge
                  variant="dot"
                  color="error"
                  invisible={!showNotificationBadge}
                >
                  <NotificationsIcon />
                </Badge>
              </StyledIconButton>
            </Box>

            <Box onClick={showProfileMenu}>
              <StyledIconButton>
                <img
                  width={40}
                  height={40}
                  alt="Profile"
                  src={
                    user && user.profilePictureURL
                      ? user.profilePictureURL
                      : PROFILE_PICTURE_PLACEHOLDER
                  }
                />
              </StyledIconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <NavBarProfileMenu
        user={user}
        anchorEl={profileMenuAnchor}
        setAnchorEl={setProfileMenuAnchor}
      />

      <NavBarNotificationMenu
        anchorEl={notificationMenuAnchor}
        setAnchorEl={setNotificationMenuAnchor}
        notifications={notifications}
      />
    </>
  );
};

export default NavBar;
