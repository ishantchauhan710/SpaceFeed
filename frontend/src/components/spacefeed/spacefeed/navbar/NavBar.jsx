import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  TextField,
  InputProps,
  InputAdornment,
  Avatar,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";

import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NavBarProfileMenu from "./NavBarProfileMenu";

const NavBar = () => {
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);

  const showProfileMenu = (e) => {
    setProfileMenuAnchor(e.currentTarget);
  };

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

  const StyledTextField = styled(TextField)(({ theme }) => ({
    [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
      {
        borderColor: theme.palette.grey[400],
      },
    [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
      {
        borderColor: theme.palette.grey[400],
      },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
      {
        borderColor: theme.palette.primary[400],
        borderWidth: 1,
      },
    [`& .${outlinedInputClasses.input}`]: {
      color: theme.palette.grey[900],
    },
    [`&:hover .${outlinedInputClasses.input}`]: {
      color: theme.palette.grey[900],
    },
  }));

  return (
    <>
      <AppBar
        elevation={0}
        position="static"
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

            <StyledTextField
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

            <StyledIconButton
              style={{
                marginRight: 10,
              }}
            >
              <NotificationsIcon />
            </StyledIconButton>

            <Box onClick={showProfileMenu}>
              <StyledIconButton>
                <img
                  width={40}
                  height={40}
                  src="https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png"
                />
              </StyledIconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <NavBarProfileMenu
        anchorEl={profileMenuAnchor}
        setAnchorEl={setProfileMenuAnchor}
      />
    </>
  );
};

export default NavBar;
