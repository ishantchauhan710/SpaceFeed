import React from "react";
import {
  Box,
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  FcHome,
  FcCompactCamera,
  FcGlobe,
  FcCalendar,
  FcSettings,
  FcInfo,
} from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { showInfo } from "../../../../states/other/notificationSlice";

const ProfileSectionMenu = () => {
  const PROFILE_MENU_ITEM_ICON_SIZE = 22;

  const navigate = useNavigate();
  const user = useSelector((state) => state.home.user);
  const dispatch = useDispatch();

  const profileMenuList = [
    {
      label: "Feed",
      iconComponent: (
        <FcHome
          style={{
            width: PROFILE_MENU_ITEM_ICON_SIZE,
            height: PROFILE_MENU_ITEM_ICON_SIZE,
          }}
        />
      ),
      clickListener: () => {
        navigate(`/profile/${user._id}`);
      },
    },
    {
      label: "Photos",
      iconComponent: (
        <FcCompactCamera
          style={{
            width: PROFILE_MENU_ITEM_ICON_SIZE,
            height: PROFILE_MENU_ITEM_ICON_SIZE,
          }}
        />
      ),
      clickListener: () => {
        navigate(`/profile/${user._id}`);
      },
    },
    {
      label: "News",
      iconComponent: (
        <FcGlobe
          style={{
            width: PROFILE_MENU_ITEM_ICON_SIZE,
            height: PROFILE_MENU_ITEM_ICON_SIZE,
          }}
        />
      ),
      clickListener: () => {
        dispatch(showInfo("This menu item is for display purposes"));
      },
    },
    {
      label: "Events",
      iconComponent: (
        <FcCalendar
          style={{
            width: PROFILE_MENU_ITEM_ICON_SIZE,
            height: PROFILE_MENU_ITEM_ICON_SIZE,
          }}
        />
      ),
      clickListener: () => {
        dispatch(showInfo("This menu item is for display purposes"));
      },
    },
    {
      label: "Settings",
      iconComponent: (
        <FcSettings
          style={{
            width: PROFILE_MENU_ITEM_ICON_SIZE,
            height: PROFILE_MENU_ITEM_ICON_SIZE,
          }}
        />
      ),
      clickListener: () => {
        dispatch(showInfo("This menu item is for display purposes"));
      },
    },
    {
      label: "About",
      iconComponent: (
        <FcInfo
          style={{
            width: PROFILE_MENU_ITEM_ICON_SIZE,
            height: PROFILE_MENU_ITEM_ICON_SIZE,
          }}
        />
      ),
      clickListener: () => {
        window.location.href = "https://github.com/ishantchauhan710/SpaceFeed";
      },
    },
  ];

  return (
    <Box style={{ textAlign: "left" }}>
      <MenuList>
        {profileMenuList.map((menuItem, i) => (
          <MenuItem onClick={() => menuItem.clickListener()} key={i}>
            <ListItemIcon>{menuItem.iconComponent}</ListItemIcon>
            <ListItemText>
              <Typography variant="h3" fontSize={14} fontWeight={600}>
                {menuItem.label}
              </Typography>
            </ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  );
};

export default ProfileSectionMenu;
