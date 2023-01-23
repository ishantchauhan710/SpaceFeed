import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Lottie from "lottie-react";
import authAnim from "../../res/anim/auth_anim.json";
import LoginLeft from "./components/LoginLeft";
import LoginRight from "./components/LoginRight";
const LoginPage = () => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        style={{ minHeight: "100vh" }}
      >
        <LoginLeft />
        <LoginRight />
      </Stack>
    </Box>
  );
};

export default LoginPage;
