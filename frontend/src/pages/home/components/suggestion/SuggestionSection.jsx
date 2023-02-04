import React, { useState, useEffect } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  styled,
  Typography,
  Badge,
  Tooltip,
} from "@mui/material";

import PaperBox from "../../../../components/styled/PaperBox";
import axios from "axios";
import { parsePostDate } from "../../../../util/dateUtil";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../../other/constants";
import NewsLoading from "../../../../components/loading/NewsLoading";

const SuggestionSection = () => {
  const [socialNewsList, setSocialNewsList] = useState([]);
  const [newsLoading, setNewsLoading] = useState(false);

  const getNews = async () => {
    try {
      setNewsLoading(true);
      const response = await axios.get("/api/comment-news");
      setSocialNewsList(response.data.news);
      setNewsLoading(false);
      //console.log("News: " + JSON.stringify(response.data.news));
    } catch (err) {
      setNewsLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const navigate = useNavigate();

  const SocialNewsItem = ({
    actionBy,
    actionOn,
    actionInitials,
    actionTime,
    postId,
  }) => {
    return (
      <Box
        sx={{
          cursor: "pointer",
          borderRadius: 2,
          marginTop: 1,
          padding: 1,
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.05)",
          },
        }}
        onClick={() => navigate(`/post/${postId}`)}
      >
        <Typography variant="h6" fontSize={12}>
          <Typography
            color="primary.900"
            fontWeight={600}
            fontSize={12}
            component="span"
          >
            {actionBy}{" "}
          </Typography>
          commented on{" "}
          <Typography fontWeight={600} fontSize={12} component="span">
            {actionOn}'s
          </Typography>{" "}
          post {actionInitials != "" && ` about "${actionInitials}"`}
          <Typography fontSize={10}>({parsePostDate(actionTime)})</Typography>
        </Typography>
      </Box>
    );
  };

  return (
    <Box width="100%">
      <PaperBox
        sx={{
          paddingX: 2,
          paddingY: 2,
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
        }}
      >
        <Box>
          <Typography variant="h2" fontSize={18} fontWeight={600}>
            What's happening
          </Typography>
        </Box>
        <Box style={{ marginTop: "10px" }}>
          {newsLoading
            ? [...Array(10)].map((val,i) => <NewsLoading key={i} />)
            : socialNewsList.map((newsItem, i) => (
                <SocialNewsItem
                  key={i}
                  actionBy={newsItem.actionBy}
                  actionOn={newsItem.actionOn}
                  actionInitials={newsItem.actionInitials}
                  actionTime={newsItem.actionTime}
                  postId={newsItem.postId}
                />
              ))}
        </Box>
      </PaperBox>
    </Box>
  );
};

export default SuggestionSection;
