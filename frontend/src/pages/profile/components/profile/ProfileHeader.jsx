import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import { Box, Fab, Typography } from "@mui/material";

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
          src="https://cdn.pixabay.com/photo/2016/09/29/13/08/planet-1702788__340.jpg"
        />
      </Box>
      <Box
        style={{ position: "relative" }}
        display="flex"
        flexDirection="column"
        paddingX={2}
      >
        <img
          style={{
            width: 120,
            height: 120,
            borderRadius: "100px",
            border: "3px solid #fff",
            marginTop: "-60px",
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
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            margin: "15px 20px",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Fab size="small" color="success" aria-label="add">
            <ShareIcon />
          </Fab>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
