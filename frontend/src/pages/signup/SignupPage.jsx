import React from "react";
import { Box, Stack } from "@mui/material";
import LoginLeft from "../login/components/LoginLeft";
import SignupRight from "./components/SignupRight";

const SignupPage = () => {
  return (
    <Box>
      <Stack direction="row" style={{ height: "100vh", overflow: "hidden" }}>
        <LoginLeft />
        <SignupRight />
      </Stack>
    </Box>
  );
};

export default SignupPage;
