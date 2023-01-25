import { Link } from "@mui/material";
import { styled } from "@mui/system";

// A hyperlink without href, just to handle onClick() events
const LinkButton = styled(Link)({
  cursor: "pointer"
});

export default LinkButton;