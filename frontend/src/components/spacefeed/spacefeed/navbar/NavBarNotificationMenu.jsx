import * as React from "react";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import {
  Menu,
  Popover,
  Box,
  Typography,
  Link,
  Button,
  styled,
} from "@mui/material/";
import BoxCentered from "../../../styled/BoxCentered";

const NavBarNotificationMenu = ({ anchorEl, setAnchorEl }) => {
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const NotificationItemContainer = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background[800],
    padding: "0px 10px",
  }));

  const NotificationItem = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background[800],
    padding: "10px",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.background[200],
      color: theme.palette.primary[500],
      transition: "0.3s all ease",
    },
  }));

  const notificationData = [
    {
      image: "https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png",
      sender: "Ishant Chauhan",
      content: "started following you",
      time: "3h ago",
    },
    {
      image: "https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png",
      sender: "Ishant Chauhan",
      content: "started following you",
      time: "3h ago",
    },
    {
      image: "https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png",
      sender: "Ishant Chauhan",
      content: "started following you",
      time: "3h ago",
    },
    {
      image: "https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png",
      sender: "Ishant Chauhan",
      content: "started following you",
      time: "3h ago",
    },
    {
      image: "https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png",
      sender: "Ishant Chauhan",
      content: "started following you",
      time: "3h ago",
    },
    {
      image: "https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png",
      sender: "Ishant Chauhan",
      content: "started following you",
      time: "3h ago",
    },
    {
      image: "https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png",
      sender: "Ishant Chauhan",
      content: "started following you",
      time: "3h ago",
    },
    {
      image: "https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png",
      sender: "Ishant Chauhan",
      content: "started following you",
      time: "3h ago",
    },
  ];

  return (
    <Popover
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          color: "grey.900",
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 22,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Box
        sx={{
          width: {
            xs: "250px",
            sm: "350px",
          },
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px",
          }}
        >
          <Typography variant="h5" color="grey.900" fontWeight={500}>
            Notifications
          </Typography>
          <Link underline="hover" fontSize={13} href="#">
            Clear all
          </Link>
        </Box>
        <Divider />
        <Box
          style={{ padding: "10px 0px", height: "300px", overflowY: "auto" }}
        >
          {notificationData.slice(0, 5).map((notification) => (
            <NotificationItemContainer>
              <NotificationItem>
                <Box style={{ flex: "0.1" }}>
                  <img
                    style={{ borderRadius: "50px" }}
                    width={45}
                    height={45}
                    src={notification.image}
                  />
                </Box>
                <Typography
                  style={{ flex: "0.7" }}
                  variant="h6"
                  marginLeft={2}
                  fontSize={14}
                >
                  <Typography fontWeight={600}>
                    {notification.sender}
                  </Typography>{" "}
                  {notification.content}
                </Typography>
                <Box style={{ flex: "0.2", textAlign: "right" }}>
                  <Typography variant="h6" marginLeft={1} fontSize={11}>
                    {notification.time}
                  </Typography>
                </Box>
              </NotificationItem>
            </NotificationItemContainer>
          ))}
        </Box>
        <Divider />
        <BoxCentered style={{ padding: "7px 0px" }}>
          <Link
            sx={{ "&:hover": { color: "primary.600" } }}
            underline="none"
            fontWeight={600}
            fontSize={14}
            href="#"
          >
            View All
          </Link>
        </BoxCentered>
      </Box>
    </Popover>
  );
};

export default NavBarNotificationMenu;