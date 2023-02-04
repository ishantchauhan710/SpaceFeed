import * as React from "react";
import Divider from "@mui/material/Divider";
import { Popover, Box, Typography, Link, styled } from "@mui/material/";
import BoxCentered from "../../../styled/BoxCentered";
import { PROFILE_PICTURE_PLACEHOLDER } from "../../../../other/constants";
import { parsePostDate } from "../../../../util/dateUtil";
import parseNotification from "../../../../other/parseNotification";
import { useDispatch } from "react-redux";
import {
  showError,
  showInfo,
} from "../../../../states/other/notificationSlice";
import { useNavigate } from "react-router-dom";

const NavBarNotificationMenu = ({ anchorEl, setAnchorEl, notifications }) => {
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();

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
    flexDirection: "column",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.background[200],
      color: theme.palette.primary[500],
      transition: "0.3s all ease",
    },
  }));

  const navigate = useNavigate();

  const handleNotificationItemClick = (item) => {
    handleClose();
    if (item.type === "comment") {
      navigate(`/post/${item.dataRef}`);
    } else if (item.type === "like") {
      navigate(`/post/${item.dataRef}`);
    } else if (item.type === "commentlike") {
      navigate(`/post/${item.dataRef}`);
    } else if (item.type === "follow") {
      navigate(`/profile/${item.dataRef}`);
    } else {
      dispatch(showError("Unable to parse notification"));
    }
  };

  return (
    <Popover
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
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
            xs: "300px",
            sm: "300px",
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
          {/* <Link underline="hover" fontSize={13} href="#">
            Clear all
          </Link> */}
        </Box>
        <Divider />
        <Box
          style={{ padding: "10px 0px", maxHeight: "300px", overflowY: "auto" }}
        >
          {notifications && notifications.length>0 ? notifications.map((notification) => (
            <NotificationItemContainer
              key={notification._id}
              onClick={() => handleNotificationItemClick(notification)}
            >
              <NotificationItem>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    textAlign: "left",
                  }}
                >
                  <Box
                    style={{
                      flex: "0.2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      paddingRight: "15px",
                    }}
                  >
                    <img
                      style={{ borderRadius: "50px" }}
                      width={45}
                      height={45}
                      src={
                        notification.notifiedBy.profilePictureURL
                          ? notification.notifiedBy.profilePictureURL
                          : PROFILE_PICTURE_PLACEHOLDER
                      }
                      alt="notification"
                    />
                  </Box>
                  <Box
                    style={{
                      flex: "0.8",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h6" fontSize={15}>
                      <Typography fontWeight={600} component="span">
                        {notification.notifiedBy.username}
                      </Typography>{" "}
                      {parseNotification(notification.type)}
                    </Typography>
                    <Typography variant="h6" fontSize={12}>
                      ({parsePostDate(notification.createdAt)})
                    </Typography>
                  </Box>
                </Box>
              </NotificationItem>
            </NotificationItemContainer>
          )) : <Box paddingX={2} paddingY={1}>You don't have any notifications</Box>}
        </Box>
        <Divider />
        <BoxCentered style={{ padding: "7px 0px" }}>
          <Link
            sx={{ cursor: "pointer", "&:hover": { color: "primary.600" } }}
            underline="none"
            fontWeight={600}
            fontSize={14}
            onClick={() => {
              dispatch(
                showInfo(
                  "Due to storage limitations, you can only see last 10 notifications"
                )
              );
            }}
          >
            View All
          </Link>
        </BoxCentered>
      </Box>
    </Popover>
  );
};

export default NavBarNotificationMenu;
