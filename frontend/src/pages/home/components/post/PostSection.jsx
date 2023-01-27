import React from "react";
import {
  Paper,
  Box,
  styled,
  TextField,
  Chip,
  Typography,
  Avatar,
  Grid,
  IconButton,
  Link,
  Collapse,
  Button,
} from "@mui/material";
import { FcCompactCamera, FcVideoCall, FcCalendar } from "react-icons/fc";
import PostSectionCreatePost from "./PostSectionCreatePost";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import StyledTextField from "../../../../components/styled/StyledTextField";
import PostHeader from "./post/PostHeader";
import PostBody from "./post/PostBody";
import PostActions from "./post/PostActions";
import PostComment from "./post/PostComment";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PostContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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

const postList = [
  {
    id: 1,
    title: "Post Title",
    data: "Post Data",
  },
  {
    id: 2,
    title: "Post Title",
    data: "Post Data",
  },
  {
    id: 3,
    title: "Post Title",
    data: "Post Data",
  },
  {
    id: 4,
    title: "Post Title",
    data: "Post Data",
  },
  {
    id: 5,
    title: "Post Title",
    data: "Post Data",
  },
];

const PostSection = () => {
  const [expanded, setExpanded] = React.useState({});

  const handlePostExpandClick = (id) => {
    setExpanded((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <Box>
      <PostContainer>
        <PostSectionCreatePost />
      </PostContainer>
      <Box marginTop={2}>
        {postList.map((post, i) => (
          <Box key={post} marginTop={2} style={{ textAlign: "left" }}>
            <PostContainer>
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
            </PostContainer>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PostSection;
