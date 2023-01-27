import React from "react";
import {
    Box,
    Typography,
    Avatar,
    IconButton,
    Link,
  } from "@mui/material";
 
  import MoreVertIcon from "@mui/icons-material/MoreVert";


const PostHeader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="stretch"
      padding={1}
    >
      <Box style={{ cursor: "pointer" }}>
        <Avatar />
      </Box>
      <Box
        flex={1}
        marginLeft={2}
        marginRight={2}
        style={{ textAlign: "left", cursor: "pointer" }}
      >
        <Link
          sx={{
            color: "grey.900",
            "&:hover": { color: "primary.600" },
          }}
          underline="none"
          fontWeight={600}
          fontSize={14}
          href="#"
        >
          Ishant Chauhan
        </Link>

        <Typography variant="h6" fontSize={13}>
          3h ago
        </Typography>
      </Box>
      <Box>
        <IconButton>
          <MoreVertIcon style={{ width: 21, height: 21 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PostHeader;
