import * as React from "react";
import { Dialog, Typography, Box, Link } from "@mui/material";
import OTPInput from "otp-input-react";
import BoxCentered from "../../../components/styled/BoxCentered";
import ActionButton from "../../../components/styled/ActionButton";

const SignupOTPDialog = ({open,setOpen}) => {
 
  const handleClose = () => {
    setOpen(false);
  };

  const [OTP, setOTP] = React.useState("");

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box
        style={{ textAlign: "center" }}
        padding={5}
      >
        <Typography variant="h3">OTP Verification</Typography>
        <Typography style={{ marginTop: "10px" }} fontSize={13} variant="h6">
          We have sent a one time password (OTP) on your provided email address.
          Please enter the OTP code in order to create an account
        </Typography>
        <BoxCentered
          className="signup-otp-container"
          style={{ margin: "20px 0px 0px 0px" }}
        >
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
          />
        </BoxCentered>

        <BoxCentered>
          <Typography fontSize={13} variant="h6" marginTop={2}>
            Did not receive any OTP?{" "}
            <Link underline="hover" href="/">
              Send Again
            </Link>
          </Typography>
        </BoxCentered>
        <ActionButton
          style={{ marginTop: "20px" }}
          fullWidth
          variant="contained"
        >
          Verify
        </ActionButton>
      </Box>
    </Dialog>
  );
};

export default SignupOTPDialog;
