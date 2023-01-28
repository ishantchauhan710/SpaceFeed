import {
  Box,
  InputBase,
  styled,
  alpha,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import React from "react";

const StyledLabelInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const AboutTab = () => {
  return (
    <Box>
      <Box display="flex" alignItems="flex-start" flexDirection="column">
        <FormControl
          style={{ width: "100%"}}
          variant="standard"
        >
          <InputLabel sx={{ fontSize: 17 }} shrink>
            Email
          </InputLabel>
          <StyledLabelInput />
        </FormControl>

        <FormControl
          style={{ width: "100%", marginTop: "15px" }}
          variant="standard"
        >
          <InputLabel sx={{ fontSize: 17 }} shrink>
            Birthday
          </InputLabel>
          <StyledLabelInput />
        </FormControl>

        <FormControl
          style={{ width: "100%", marginTop: "15px" }}
          variant="standard"
        >
          <InputLabel sx={{ fontSize: 17 }} shrink>
            Gender
          </InputLabel>
          <StyledLabelInput />
        </FormControl>

        <FormControl
          style={{ width: "100%", marginTop: "15px" }}
          variant="standard"
        >
          <InputLabel sx={{ fontSize: 17 }} shrink>
            Phone Number
          </InputLabel>
          <StyledLabelInput />
        </FormControl>
      </Box>
    </Box>
  );
};

export default AboutTab;
