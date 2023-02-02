import React, { useState } from "react";
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
  Link,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PaperBox from "../../../styled/PaperBox";
import { useEffect } from "react";
import CommentModal from "../modal/CommentModal";
import axios from "axios";
import { setLoading } from "../../../../states/other/loadingSlice";
import {
  showError,
  showInfo,
} from "../../../../states/other/notificationSlice";

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

const Post = ({ post, setPosts }) => {
  const [expanded, setExpanded] = React.useState({});
  const [postLiked, setPostLiked] = React.useState(false);
  const [showCommentModal, setShowCommentModal] = React.useState(false);
  const [comments, setComments] = React.useState([]);

  // This will be used to hide the post when it is deleted
  const [isPostDeleted, setIsPostDeleted] = React.useState(false);

  const dispatch = useDispatch();

  const handlePostExpandClick = (id) => {
    setExpanded((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const user = useSelector((state) => state.home.user);

  const checkIfPostLiked = () => {
    const result = post.likedBy.find((item) => item._id === user._id);
    setPostLiked(result !== undefined);
  };

  // A skip variable for pagination
  const [skip, setSkip] = useState(0);

  const getPostComments = async (postId) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`/api/comment/${postId}?skip=${skip}&limit=2`);
      const commentList = response.data.comments;
      if (commentList.length === 0) {
        dispatch(showInfo("All comments loaded"));
        dispatch(setLoading(false));
        return;
      }
      setComments([...comments, ...commentList]);
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(showError(err.response.data.error));
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (post) {
      checkIfPostLiked();
    }
  }, []);

  useEffect(() => {
    if (post) {
      getPostComments(post._id);
    }
  }, [skip]);

  return (
    !isPostDeleted && (
      <Box key={post} marginTop={2} style={{ textAlign: "left" }}>
        <PaperBox>
          <PostHeader
            post={post}
            setPosts={setPosts}
            setIsPostDeleted={setIsPostDeleted}
          />
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
            comments={comments}
            setComments={setComments}
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
                        post={post}
                        comment={comment}
                        user={user}
                        comments={comments}
                        setComments={setComments}
                      />
                    ))}
                  <Box
                    paddingRight={2}
                    paddingTop={1}
                    style={{ textAlign: "right" }}
                    onClick={() => setSkip(skip + 3)}
                  >
                    <Typography
                      fontSize={14}
                      color="primary.main"
                      sx={{
                        cursor: "pointer",
                        "&:hover": { color: "primary.700" },
                      }}
                    >
                      Load more comments
                    </Typography>
                  </Box>
                </Box>
              </Collapse>
            </>
          )}
        </PaperBox>
      </Box>
    )
  );
};

export default Post;
