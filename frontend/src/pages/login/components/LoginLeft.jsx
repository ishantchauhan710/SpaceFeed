import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import authAnim from "../../../res/anim/auth_anim.json";
import BoxCentered from "../../../components/BoxCentered";

const LoginLeft = () => {
  return (
    <BoxCentered sx={{ backgroundColor: "primary.500" }} flex={1}>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        width="80%"
      >
        <Lottie style={{ width: "70%" }} animationData={authAnim} loop={true} />
        <Typography variant="h2" color="background.100">
          Welcome to SpaceFeed
        </Typography>
        <Typography marginTop={2} variant="h6" color="background.100">
          Upload and share photos, like and comment on posts, chat with your
          friends and do a lot more
        </Typography>
      </Stack>
    </BoxCentered>
  );
};

export default LoginLeft;
