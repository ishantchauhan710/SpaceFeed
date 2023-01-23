import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Component to center contents of a box both horizontally and vertically
const BoxCentered = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default BoxCentered;