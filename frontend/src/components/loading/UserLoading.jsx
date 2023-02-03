import React from "react";
import { Box, Skeleton } from "@mui/material";
import PaperBox from "../styled/PaperBox";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const UserLoading = () => {
  return (
    <Box
      marginTop={2}
      padding={1}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box flex="0.1" style={{marginRight: "7px"}}>
        <Skeleton animation="wave" variant="circular" width={35} height={35} />
      </Box>

      <Box flex="0.9">
        <Skeleton sx={{ height: 20 }} animation="wave" variant="rectangular" />
        <Skeleton
          sx={{ height: 10, marginTop: 1 }}
          animation="wave"
          variant="rectangular"
        />
      </Box>
    </Box>
  );
};

export default UserLoading;
