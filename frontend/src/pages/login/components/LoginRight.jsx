import React from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Link,
  Button,
} from "@mui/material";

import BoxCentered from "../../../components/BoxCentered";
import ActionButton from "../../../components/ActionButton";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
const LoginRight = () => {
  return (
    <BoxCentered
      sx={{
        backgroundColor: "background.alt",
        display: {
          xs: "flex",
          sm: "flex",
        },
      }}
      flex={1}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        width="80%"
      >
        <img width="18%" src="/icons/logo_spacefeed_circle_dark.png" />
        <Typography variant="h2" marginTop={2}>
          Hello there!
        </Typography>
        <Typography width="80%" variant="h6" marginTop={1}>
          Enter your email and password in order to login to your account
        </Typography>

        <Box marginTop={3}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            style={{ marginTop: "15px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          width="100%"
          marginTop={1}
        >
          <Link underline="hover" color="primary.400" href="#">
            Forgot password?
          </Link>
        </Box>
        <ActionButton
          style={{
            marginTop: "18px",
          }}
          fullWidth
          size="large"
          variant="contained"
        >
          Login
        </ActionButton>
      </Stack>
    </BoxCentered>
  );
};

export default LoginRight;
