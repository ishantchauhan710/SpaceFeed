import { Box, Typography } from "@mui/material";
import React from "react";

const ProfileSectionHeader = () => {
  return (
    <div>
      <div>
        <img
          width="100%"
          height="100px"
          style={{ borderRadius: 2 }}
          alt="cover"
          src="https://i.pinimg.com/originals/28/35/be/2835be38b5274a4b20155999a7613542.jpg"
        />
        <div>
          <img
            style={{
              marginTop: "-50px",
              border: "3px solid #ffffff",
              borderRadius: "50px",
              cursor: "pointer",
            }}
            alt="profile"
            width="90px"
            height="90px"
            src="https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png"
          />
        </div>
      </div>
      <Box style={{ padding: "0px 10px 10px 10px" }}>
        <Typography variant="h2" marginTop={1} fontSize={20} fontWeight={600}>
          Ishant Chauhan
        </Typography>
        <Typography variant="h6" marginTop={1} fontSize={13}>
          Hello! I am the developer of SpaceFeed! Do checkout the github
          repository of this project!
        </Typography>
      </Box>
    </div>
  );
};

export default ProfileSectionHeader;
