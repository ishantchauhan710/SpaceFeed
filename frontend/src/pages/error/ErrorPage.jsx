import { Stack, Typography, Link } from "@mui/material";
import React from "react";
import BoxCentered from "../../components/styled/BoxCentered";

const ErrorPage = () => {
  return (
    <BoxCentered
      style={{
        width: "50%",
        margin: "auto",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Stack direction="column">
        <Typography color="primary.500" fontSize={150} fontWeight={700}>
          Oops!
        </Typography>
        <Typography color="grey.800" fontSize={30} fontWeight={600}>
          404 - PAGE NOT FOUND
        </Typography>
        <Typography
          marginTop={2}
          color="grey.700"
          fontSize={15}
          fontWeight={400}
        >
          The page you are trying to visit does not exist. Please check the URL
          and try again! If you want, you can navigate to{" "}
          <Link underline="hover" href="/login">
            SpaceFeed Home
          </Link>
        </Typography>
      </Stack>
    </BoxCentered>
  );
};

export default ErrorPage;
