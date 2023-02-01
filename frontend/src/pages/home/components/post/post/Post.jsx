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
import { useSelector, useDispatch } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PaperBox from "../../../../../components/styled/PaperBox";
import { useEffect } from "react";
import CommentModal from "../../../../../components/spacefeed/spacefeed/modal/CommentModal";
import axios from "axios";
import { setLoading } from "../../../../../states/slices/loadingSlice";
import { showError } from "../../../../../states/slices/notificationSlice";

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
  const [comments, setComments] = React.useState([]);

  const dispatch = useDispatch();

  const handlePostExpandClick = (id) => {
    setExpanded((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const user = useSelector((state) => state.user.user);

  const checkIfPostLiked = () => {
    const result = post.likedBy.find((item) => item._id === user._id);
    setPostLiked(result !== undefined);
  };

  const getPostComments = async (postId) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`/api/comment/${postId}`);
      const commentList = response.data.comments;
      setComments(commentList);
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(showError(err.response.data.error));
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (post) {
      checkIfPostLiked();
      getPostComments(post._id);
    }
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

        <CommentModal
          post={post}
          open={showCommentModal}
          setOpen={setShowCommentModal}
          label="Comment"
        />

        {comments && comments.length > 0 && (
          <>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              paddingTop={2}
              paddingX={2}
              width="100%"
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
                {comments &&
                  comments.map((comment) => (
                    <PostComment
                      key={comment._id}
                      comment={comment}
                      user={user}
                    />
                  ))}
              </Box>
            </Collapse>
          </>
        )}
      </PaperBox>
    </Box>
  );
};

export default Post;
