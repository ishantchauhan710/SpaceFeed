import { Button, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeConfig } from "./config/themeConfig";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage"

function App() {
  const themeData = themeConfig();
  const theme = createTheme(themeData);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignupPage />
    </ThemeProvider>
  );
}

export default App;
