import { styled, TextField } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

// A text field with customized borders
const StyledTextField = styled(TextField)(({ theme }) => ({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: theme.palette.grey[400],
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: theme.palette.grey[400],
    },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: theme.palette.primary[400],
      borderWidth: 1,
    },
  [`& .${outlinedInputClasses.input}`]: {
    color: theme.palette.grey[900],
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: theme.palette.grey[900],
  },
}));

export default StyledTextField;
