import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ProfileSectionStats = () => {
  const StatItem = ({ label, value, hideBorder }) => {
    return (
      <Box
        style={{
          borderRight: `1px solid ${
            hideBorder ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.2)"
          }`,
          marginBottom: "10px",
        }}
      >
        <Typography variant="h1" fontSize={15} fontWeight={600}>
          {value}
        </Typography>
        <Typography variant="h6" fontSize={13}>
          {label}
        </Typography>
      </Box>
    );
  };

  return (
    <Box style={{ padding: "5px 10px" }}>
      <Grid container>
        <Grid item xs={3}>
          <StatItem label="Post" value="170" />
        </Grid>
        <Grid item xs={5}>
          <StatItem label="Followers" value="380" />
        </Grid>
        <Grid item xs={4}>
          <StatItem hideBorder={true} label="Following" value="700" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileSectionStats;
