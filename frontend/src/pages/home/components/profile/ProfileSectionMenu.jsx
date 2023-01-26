import React from "react";
import {
  Box,
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText,
  styled,
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

const ProfileSectionMenu = () => {
  const PROFILE_MENU_ITEM_ICON_SIZE = 22;

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
      clickListener: () => {},
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
      clickListener: () => {},
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
      clickListener: () => {},
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
      clickListener: () => {},
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
      clickListener: () => {},
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
      clickListener: () => {},
    },
  ];

  return (
    <Box style={{ textAlign: "left" }}>
      <MenuList>
        {profileMenuList.map((menuItem) => (
          <MenuItem>
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
