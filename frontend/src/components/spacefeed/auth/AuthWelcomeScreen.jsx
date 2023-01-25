import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import authAnim from "../../../res/anim/auth_anim.json";
import BoxCentered from "../../../components/styled/BoxCentered";

const AuthWelcomeScreen = () => {
  return (
    <BoxCentered
      sx={{
        backgroundColor: "primary.500",
        display: {
          xs: "none",
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
        <Lottie style={{ width: "70%" }} animationData={authAnim} loop={true} />
        <Box width="95%">
          <Typography fontWeight={500} variant="h2" color="background.100">
            Welcome to SpaceFeed
          </Typography>
          <Typography
            fontWeight={400}
            marginTop={2}
            variant="h6"
            color="background.100"
          >
            Upload and share photos, like and comment on posts, chat with your
            friends and do a lot more
          </Typography>
        </Box>
      </Stack>
    </BoxCentered>
  );
};

export default AuthWelcomeScreen;
