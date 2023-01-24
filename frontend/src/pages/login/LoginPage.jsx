import { Box, Stack } from "@mui/material";
import React from "react";
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
