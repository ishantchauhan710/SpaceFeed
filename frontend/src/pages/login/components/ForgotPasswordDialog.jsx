import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { showInfo, showError } from "../../../states/other/notificationSlice";
import { useDispatch } from "react-redux";

const ForgotPasswordDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const [email, setEmail] = React.useState("");
  const dispatch = useDispatch();

  const handleForgotPassword = () => {
    if (!email) {
      dispatch(showError("Email cannot be blank"));
      return;
    }

    handleClose();
    dispatch(
      showInfo(
        "Due to nodemailer congiguration issues in production mode, this feature is not available right now"
      )
    );
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box padding={1}>
        <DialogTitle variant="h3">Reset Password</DialogTitle>
        <DialogContent>
          <DialogContentText variant="h6">
            Enter your email address. You will receive a link to reset your
            password on the provided email address
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            style={{ marginTop: "15px" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleForgotPassword()}>Send</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ForgotPasswordDialog;
