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

const NewsLoading = () => {
  return (
    <Box paddingTop={2} height={60} width="100%">
      <Skeleton sx={{ height: 20 }} animation="wave" variant="rectangular" />
      <Skeleton
        sx={{ height: 10, marginTop: 1 }}
        animation="wave"
        variant="rectangular"
      />
    </Box>
  );
};

export default NewsLoading;
