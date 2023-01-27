import { Box, Typography } from "@mui/material";
import React from "react";

const PostBody = () => {
  return (
    <Box paddingX={2} paddingBottom={1} style={{ textAlign: "left" }}>
      <Typography>
        Icons are also appropriate for toggle buttons that allow a single choice
        to be selected or deselected, such as adding or removing a star to an
        item
      </Typography>
      <img
        style={{
          width: "100%",
          marginTop: "15px",
          borderRadius: "5px",
        }}
        src="https://www.w3schools.com/css/img_forest.jpg"
      />
    </Box>
  );
};

export default PostBody;
