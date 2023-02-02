import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { showError } from "../../../../states/other/notificationSlice";

const ProfileSectionStats = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.home.user);
  const [stats, setStats] = useState({});

  const getUserStats = async () => {
    try {
      const response = await axios.get(`/api/user/stats/${user._id}`);
      const statsData = response.data.stats;
      setStats(statsData);
      console.log("Stats:" + JSON.stringify(response));
    } catch (err) {
      dispatch(showError(err.response.data.error));
    }
  };

  useEffect(() => {
    getUserStats();
  }, []);

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
    stats && (
      <Box style={{ padding: "5px 10px" }}>
        <Grid container>
          <Grid item xs={3}>
            <StatItem label="Post" value={stats.posts} />
          </Grid>
          <Grid item xs={5}>
            <StatItem label="Followers" value={stats.followers} />
          </Grid>
          <Grid item xs={4}>
            <StatItem
              hideBorder={true}
              label="Following"
              value={stats.followings}
            />
          </Grid>
        </Grid>
      </Box>
    )
  );
};

export default ProfileSectionStats;
