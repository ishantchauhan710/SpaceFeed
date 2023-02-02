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
} from "@mui/material";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NavBarProfileMenu from "./NavBarProfileMenu";
import NavBarNotificationMenu from "./NavBarNotificationMenu";
import StyledTextField from "../../../styled/StyledTextField";
import { useSelector } from "react-redux";
import { PROFILE_PICTURE_PLACEHOLDER } from "../../../../other/constants";

const NavBar = () => {
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
  const [notificationMenuAnchor, setNotificationMenuAnchor] = useState(null);

  const showProfileMenu = (e) => {
    setProfileMenuAnchor(e.currentTarget);
  };

  const showNotificationMenu = (e) => {
    setNotificationMenuAnchor(e.currentTarget);
  };

  const user = useSelector((state) => state.user.user);

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

  const AutoCompleteOutputLayout = () => {
    return (
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText primary="Ishant" secondary="ishantchauhan@gmail.com" />
        </ListItemButton>
      </ListItem>
    );
  };

  const countries = [
    { code: "AD", label: "Andorra", phone: "376" },
    {
      code: "AE",
      label: "United Arab Emirates",
      phone: "971",
    },
  ];

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
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box>
                  <AutoCompleteOutputLayout />
                </Box>
              )}
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

            {/* <StyledTextField
              variant="outlined"
              placeholder="Search..."
              autoComplete="off"
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
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            /> */}
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
                <NotificationsIcon />
              </StyledIconButton>
            </Box>

            <Box onClick={showProfileMenu}>
              <StyledIconButton>
                <img
                  width={40}
                  height={40}
                  alt="Profile"
                  src={
                    (user && user.profilePictureURL)
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
      />
    </>
  );
};

export default NavBar;