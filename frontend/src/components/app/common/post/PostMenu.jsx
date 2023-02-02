import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const PostMenu = ({anchorEl,setAnchorEl}) => {
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>Edit Post</MenuItem>
      <MenuItem onClick={handleClose}>Delete Post</MenuItem>
    </Menu>
  );
};

export default PostMenu;
