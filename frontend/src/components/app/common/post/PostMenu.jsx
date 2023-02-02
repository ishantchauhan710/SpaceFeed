import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../../states/other/loadingSlice";
import {
  showError,
  showSuccess,
} from "../../../../states/other/notificationSlice";

const PostMenu = ({ anchorEl, setAnchorEl, post, setIsPostDeleted }) => {
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = useSelector((state) => state.home.user);

  const deletePost = async () => {
    handleClose();
    try {
      dispatch(setLoading(true));
      await axios.delete(`/api/posts/post/${post._id}`);
      dispatch(setLoading(false));
      setIsPostDeleted(true);
      dispatch(showSuccess("Post deleted successfully"));
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(showError(err.response.data.error));
    }
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
      <MenuItem onClick={() => {}}>Copy Link</MenuItem>
      {user._id === post.createdBy._id && (
        <MenuItem onClick={() => deletePost()}>Delete Post</MenuItem>
      )}
    </Menu>
  );
};

export default PostMenu;
