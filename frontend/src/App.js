import { Button, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeConfig } from "./config/themeConfig";

function App() {
  const themeData = themeConfig();
  const theme = createTheme(themeData);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>Hello World</h1>
      <Button variant="contained">Click</Button>
    </ThemeProvider>
  );
}

export default App;
