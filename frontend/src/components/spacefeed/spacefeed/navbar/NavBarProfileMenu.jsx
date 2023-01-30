import * as React from "react";
import { Menu, Box, Typography } from "@mui/material/";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import DescriptionIcon from "@mui/icons-material/Description";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showError } from "../../../../states/slices/notificationSlice";
import { setLoading } from "../../../../states/slices/loadingSlice";
import { useNavigate } from "react-router-dom";

const NavBarProfileMenu = ({ anchorEl, setAnchorEl }) => {
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = async () => {
    handleClose();
    try {
      dispatch(setLoading(true));
      const response = await axios.post("/api/logout");
      dispatch(setLoading(false));
      navigate("/login");
    } catch (err) {
      dispatch(showError(err.response.data.error));
      dispatch(setLoading(false));
    }
  };

  return (
    <Menu
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
          color: "grey.800",
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
            right: 14,
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
      <MenuItem onClick={handleClose}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-betweem",
          }}
        >
          <Box style={{ flex: "0.2" }}>
            <img
              style={{ borderRadius: "50px" }}
              width={40}
              height={40}
              alt="Profile"
              src="https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png"
            />
          </Box>
          <Box
            style={{
              flex: "0.8",
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <Typography variant="h3" fontSize={15}>
              Ishant Chauhan
            </Typography>
            <Typography variant="h6" fontSize={12}>
              @ishantchauhan
            </Typography>
          </Box>
        </Box>
      </MenuItem>

      <Divider />

      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <DescriptionIcon fontSize="small" />
        </ListItemIcon>
        Documentation
      </MenuItem>
      <MenuItem onClick={() => logoutUser()}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default NavBarProfileMenu;
