import React from "react";
import { Avatar, Box, Typography, Link } from "@mui/material";


const PostCommentReply = () => {
  return (
    <Box
      style={{ cursor: "pointer" }}
      paddingLeft={2}
      paddingTop={2}
      display="flex"
      alignItems="flex-start"
    >
      <Avatar style={{ width: 35, height: 35 }} />
      <Box
        sx={{
          textAlign: "left",
          flex: 1,
          marginLeft: "10px",
          backgroundColor: "background.200",
          paddingX: 2,
          paddingTop: 2,
          paddingBottom: 1,
          borderRadius: "0px 10px 10px 10px",
        }}
      >
        <Box display="flex" alignItems="center">
          <Link
            sx={{
              color: "grey.900",
              "&:hover": { color: "primary.600" },
            }}
            underline="none"
            fontWeight={600}
            fontSize={14}
            href="#"
            flex={1}
          >
            Ishant Chauhan
          </Link>{" "}
          <Typography
            style={{ marginTop: "5px" }}
            variant="h6"
            component="span"
            fontSize={13}
          >
            3h ago
          </Typography>
        </Box>

        <Typography style={{ marginTop: "5px" }} variant="h6" fontSize={13}>
          Often a card allow users to interact with the entirety of its surface
          to trigger its main action, be it an expansion, a link to another
          screen or some other behavior.
        </Typography>
        <Box marginTop={1} textAlign="right">
          <Link
            sx={{
              color: "grey.700",
              "&:hover": { color: "primary.600" },
            }}
            underline="none"
            fontWeight={400}
            fontSize={13}
            href="#"
            flex={1}
          >
            Like
          </Link>
          <Typography component="span" marginX={1}>
            •
          </Typography>
          <Link
            sx={{
              color: "grey.700",
              "&:hover": { color: "primary.600" },
            }}
            underline="none"
            fontWeight={400}
            fontSize={13}
            href="#"
            flex={1}
          >
            Reply
          </Link>
          <Typography component="span" marginX={1}>
            •
          </Typography>
          <Link
            sx={{
              color: "grey.700",
              "&:hover": { color: "primary.600" },
            }}
            underline="none"
            fontWeight={400}
            fontSize={13}
            href="#"
            flex={1}
          >
            Delete
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default PostCommentReply;
