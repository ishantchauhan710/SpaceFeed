import React from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostActions from "./PostActions";
import PostComment from "./PostComment";
import {
  Box,
  styled,
  Typography,
  IconButton,
  Collapse,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PaperBox from "../../../../../components/styled/PaperBox";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const Post = ({ post }) => {
  const [expanded, setExpanded] = React.useState({});

  const handlePostExpandClick = (id) => {
    setExpanded((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };
  return (
    <Box key={post} marginTop={2} style={{ textAlign: "left" }}>
      <PaperBox>
        <PostHeader />
        <PostBody />
        <PostActions />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          paddingTop={2}
          paddingX={2}
          style={{ textAlign: "left" }}
        >
          <Typography variant="h6" fontSize={15}>
            {expanded[post.id] ? "Show Comments" : "Comments:"}
          </Typography>
          <ExpandMore
            expand={!expanded[post.id]}
            onClick={() => handlePostExpandClick(post.id)}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </Box>
        <Collapse in={!expanded[post.id]} timeout="auto" unmountOnExit>
          <Box paddingY={1}>
            <PostComment />
          </Box>
        </Collapse>
      </PaperBox>
    </Box>
  );
};

export default Post;
