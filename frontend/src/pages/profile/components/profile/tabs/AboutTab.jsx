import React from "react";
import {
  Box,
  InputBase,
  styled,
  alpha,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import { useSelector } from "react-redux";
import parseGender from "../../../../../other/parseGender";
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
  const user = useSelector((state) => state.user.profileUser);
  return (
    <Box padding={2}>
      <Box display="flex" alignItems="flex-start" flexDirection="column">
        <FormControl style={{ width: "100%" }} variant="standard">
          <InputLabel sx={{ fontSize: 17 }} shrink>
            Email
          </InputLabel>
          <StyledLabelInput value={user.email} />
        </FormControl>

        <FormControl
          style={{ width: "100%", marginTop: "15px" }}
          variant="standard"
        >
          <InputLabel sx={{ fontSize: 17 }} shrink>
            Birthday
          </InputLabel>
          <StyledLabelInput value={user.dob} />
        </FormControl>

        <FormControl
          style={{ width: "100%", marginTop: "15px" }}
          variant="standard"
        >
          <InputLabel sx={{ fontSize: 17 }} shrink>
            Gender
          </InputLabel>
          <StyledLabelInput value={parseGender(user.gender)} />
        </FormControl>

        <FormControl
          style={{ width: "100%", marginTop: "15px" }}
          variant="standard"
        >
          <InputLabel sx={{ fontSize: 17 }} shrink>
            Country
          </InputLabel>
          <StyledLabelInput value={user.country} />
        </FormControl>

        {user.phone && (
          <FormControl
            style={{ width: "100%", marginTop: "15px" }}
            variant="standard"
          >
            <InputLabel sx={{ fontSize: 17 }} shrink>
              Phone Number
            </InputLabel>
            <StyledLabelInput value={user.phone} />
          </FormControl>
        )}
      </Box>
    </Box>
  );
};

export default AboutTab;
