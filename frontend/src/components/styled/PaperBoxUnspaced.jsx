import { Paper, styled } from "@mui/material";

const PaperBoxUnspaced = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: 0,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default PaperBoxUnspaced;
