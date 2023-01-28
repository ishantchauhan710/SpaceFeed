import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Divider,
} from "@mui/material";
import OnlineUsers from "../../../home/components/suggestion/OnlineUsers";
import PaperBox from "../../../../components/styled/PaperBox";
const suggestedUsersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CustomListItem = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={1}
      sx={{
        cursor: "pointer",
      }}
    >
      <Box style={{ flex: "0.7", overflow: "hidden" }}>
        <ListItem disablePadding>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText
            primary="Ishant"
            primaryTypographyProps={{
              fontWeight: 600,
              color: (theme) => theme.palette.grey[800],
            }}
            secondary="@ishantchauhan"
            secondaryTypographyProps={{
              color: (theme) => theme.palette.grey[700],
            }}
          />
        </ListItem>
      </Box>
      <Box style={{ flex: "0.3", paddingLeft: "10px" }}>
        <Button variant="contained" disableElevation>Follow</Button>
      </Box>
    </Box>
  );
};

const SuggestionSection = () => {
  return (
    <>
      <OnlineUsers />
      <PaperBox style={{marginTop: "15px"}}>
        <Box padding={1} style={{ textAlign: "left" }}>
          <Typography variant="h2" fontSize={18} fontWeight={600}>
            Suggested People
          </Typography>
          <Box paddingTop={1}>
            <List>
              {suggestedUsersList.map((item, i) => (
                <CustomListItem key={i} />
              ))}
            </List>
          </Box>
        </Box>
      </PaperBox>
    </>
  );
};

export default SuggestionSection;
