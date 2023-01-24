import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from "@mui/material";


const ForgotPasswordDialog = ({open,setOpen}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
     <Box padding={1}>
     <DialogTitle variant="h3">Reset Password</DialogTitle>
      <DialogContent>
        <DialogContentText variant="h6">
          Enter your email address. You will receive a link to reset your password on the provided email address
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          style={{marginTop: "15px"}}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Send</Button>
      </DialogActions>
     </Box>
    </Dialog>
  );
};

export default ForgotPasswordDialog;
