import { alpha, Box, TextField } from "@mui/material";
import React from "react";

const OverviewTab = () => {
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
            backgroundColor: (theme) => alpha(theme.palette.secondary.main,0.05),
            color: (theme) => theme.palette.grey[900],
            padding: 1,
            borderRadius: 2,
            fontWeight: 300
          },
        }}
        sx={{
          "& .MuiInput-root": {
            "&:before, :after, :hover:not(.Mui-disabled):before": {
              borderBottom: 0,
            },
          },
        }}
        value="Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item. Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item."
      />
    </Box>
  );
};

export default OverviewTab;
