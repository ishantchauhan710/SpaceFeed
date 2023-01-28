import React from "react";
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
import OnlineUsers from "./OnlineUsers";

const SuggestionSection = () => {
 
  const socialNewsList = [
    {
      actionBy: "Ishant",
      actionOn: "Elon Musk",
      actionInitials: "Twitter CEO being changed",
      actionTime: "3h",
    },
    {
      actionBy: "Joe Biden",
      actionOn: "Kim Jong Un",
      actionInitials: "Nuclear testing across sea",
      actionTime: "3h",
    },
    {
      actionBy: "Donald Trump",
      actionOn: "Vladimir Putin",
      actionInitials: "Sanctions on Russian oil purchase",
      actionTime: "3h",
    },
    {
      actionBy: "Ishant",
      actionOn: "Elon Musk",
      actionInitials: "Twitter CEO being changed",
      actionTime: "3h",
    },
    {
      actionBy: "Donald Trump",
      actionOn: "Vladimir Putin",
      actionInitials: "Sanctions on Russian oil purchase",
      actionTime: "3h",
    },
  ];

  const SocialNewsItem = ({
    actionBy,
    actionOn,
    actionInitials,
    actionTime,
  }) => {
    return (
      <Box
        sx={{
          cursor: "pointer",
          borderRadius: 2,
          padding: 1,
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.05)",
          },
        }}
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
          post about "{actionInitials}..."{" "}
          <Typography fontSize={9} component="span">
            ({actionTime} ago)
          </Typography>
        </Typography>
      </Box>
    );
  };

  return (
    <Box>
      <OnlineUsers />
      <PaperBox
        sx={{
          paddingX: 2,
          paddingY: 2,
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          marginTop: 2,
        }}
      >
        <Box>
          <Typography variant="h2" fontSize={18} fontWeight={600}>
            What's happening
          </Typography>
        </Box>
        <Box style={{ marginTop: "10px" }}>
          {socialNewsList.map((newsItem, i) => (
            <SocialNewsItem
              key={i}
              actionBy={newsItem.actionBy}
              actionOn={newsItem.actionOn}
              actionInitials={newsItem.actionInitials}
              actionTime={newsItem.actionTime}
            />
          ))}
        </Box>
      </PaperBox>
    </Box>
  );
};

export default SuggestionSection;
