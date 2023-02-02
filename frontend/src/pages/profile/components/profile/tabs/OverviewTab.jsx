import { alpha, Box, TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const OverviewTab = () => {
  const user = useSelector((state) => state.profile.user);

  return (
    <Box paddingX={1} paddingY={2}>
      <TextField
        fullWidth
        multiline
        disableUnderline={true}
        variant="standard"
        InputProps={{
          sx: {
            fontSize: 14.5,
            backgroundColor: (theme) =>
              alpha(theme.palette.secondary.main, 0.05),
            color: (theme) => theme.palette.grey[900],
            padding: 1,
            borderRadius: 2,
            fontWeight: 300,
          },
        }}
        sx={{
          "& .MuiInput-root": {
            "&:before, :after, :hover:not(.Mui-disabled):before": {
              borderBottom: 0,
            },
          },
        }}
        value={user.description}
      />
    </Box>
  );
};

export default OverviewTab;
