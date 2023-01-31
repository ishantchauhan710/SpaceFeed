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
  Divider,
} from "@mui/material";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PaperBox from "../../../../../components/styled/PaperBox";
import { useEffect } from "react";
import CommentModal from "../../../../../components/spacefeed/spacefeed/modal/CommentModal";

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
  const [postLiked, setPostLiked] = React.useState(false);
  const [showCommentModal, setShowCommentModal] = React.useState(false);

  const handlePostExpandClick = (id) => {
    setExpanded((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const user = useSelector((state) => state.user.user);
  const checkIfPostLiked = () => {
    const result = post.likedBy.find((item) => item._id === user._id);
    setPostLiked(result !== undefined);
  };

  useEffect(() => {
    checkIfPostLiked();
  }, []);

  return (
    <Box key={post} marginTop={2} style={{ textAlign: "left" }}>
      <PaperBox>
        <PostHeader post={post} />
        <PostBody post={post} />
        <PostActions
          post={post}
          user={user}
          postLiked={postLiked}
          setPostLiked={setPostLiked}
          setShowCommentModal={setShowCommentModal}
        />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          paddingTop={2}
          paddingX={2}
          style={{ textAlign: "left" }}
        >
          {/* <Typography variant="h6" fontSize={14}>
            {expanded[post.id] ? "Show Comments" : "Comments:"}
          </Typography> */}
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
      <CommentModal
        post={post}
        open={showCommentModal}
        setOpen={setShowCommentModal}
        label="Comment"
      />
    </Box>
  );
};

export default Post;
