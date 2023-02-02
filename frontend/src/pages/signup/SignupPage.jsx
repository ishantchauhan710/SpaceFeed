import React from "react";
import { Box, Stack } from "@mui/material";
import SignupRight from "./components/SignupRight";
import AuthWelcomeScreen from "../../components/app/auth/AuthWelcomeScreen";

const SignupPage = () => {
  return (
    <Box>
      <Stack direction="row" style={{ height: "100vh", overflow: "hidden" }}>
        <AuthWelcomeScreen />
        <SignupRight />
      </Stack>
    </Box>
  );
};

export default SignupPage;
