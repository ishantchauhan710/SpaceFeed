import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from "@mui/material";


const ResetPasswordDialog = ({open,setOpen}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
     <Box padding={1}>
     <DialogTitle variant="h3">Choose A New Password</DialogTitle>
      <DialogContent>
        <DialogContentText variant="h6">
          Please choose a new password for your account
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          style={{marginTop: "15px"}}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Confirm Password"
          type="password"
          fullWidth
          variant="outlined"
          style={{marginTop: "15px"}}
        />
        
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Reset</Button>
      </DialogActions>
     </Box>
    </Dialog>
  );
};

export default ResetPasswordDialog;
