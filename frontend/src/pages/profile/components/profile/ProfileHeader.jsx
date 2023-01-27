import { Box, Typography } from "@mui/material";
import React from "react";

const ProfileHeader = () => {
  return (
    <Box>
      <Box>
        <img
          style={{
            width: "100%",
            height: 180,
            borderRadius: "5px 5px 0px 0px",
            objectFit: "cover",
          }}
          src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg"
        />
      </Box>
      <Box display="flex" paddingX={2}>
        <img
          style={{
            width: 120,
            height: 120,
            borderRadius: "100px",
            border: "3px solid #fff",
            marginTop: "-50px",
            marginLeft: "10px",
          }}
          src="https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png"
        />
        <Box marginLeft={2} paddingY={1} textAlign="left">
          <Typography variant="h1" fontWeight={600} fontSize={21}>
            Ishant Chauhan
          </Typography>
          <Typography variant="h6" fontSize={15}>
            @ishantchauhan710
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
