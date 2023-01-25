import { Box, Stack } from "@mui/material";
import React from "react";
import AuthWelcomeScreen from "../../components/spacefeed/auth/AuthWelcomeScreen";
import LoginRight from "./components/LoginRight";
const LoginPage = () => {
  return (
    <Box>
      <Stack direction="row" style={{ height: "100vh", overflow: "hidden" }}>
        <AuthWelcomeScreen />
        <LoginRight />
      </Stack>
    </Box>
  );
};

export default LoginPage;
