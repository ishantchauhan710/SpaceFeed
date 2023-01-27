import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeConfig } from "./config/themeConfig";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import { useSelector, useDispatch } from "react-redux";
import { hideNotification } from "./states/slices/notificationSlice";
import ErrorPage from "./pages/error/ErrorPage";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
  const themeData = themeConfig();
  const theme = createTheme(themeData);
  const dispatch = useDispatch();
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(hideNotification());
  };

  const notificationMessage = useSelector(
    (state) => state.notification.notificationMessage
  );

  const notificationType = useSelector(
    (state) => state.notification.notificationType
  );

  const notificationVisible = useSelector(
    (state) => state.notification.notificationVisible
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Snackbar
        open={notificationVisible}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={notificationType}
          sx={{ width: "100%" }}
        >
          {notificationMessage}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
