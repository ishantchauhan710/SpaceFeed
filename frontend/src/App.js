import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Backdrop, CircularProgress, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeConfig } from "./config/themeConfig";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import { useSelector, useDispatch } from "react-redux";
import { hideNotification, showError } from "./states/other/notificationSlice";
import { setUser, setPosts, setFollowers } from "./states/homeSlice";

import ErrorPage from "./pages/error/ErrorPage";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/profile/ProfilePage";
import axios from "axios";
import { setLoading } from "./states/other/loadingSlice";
import ImageModal from "./components/app/common/modal/ImageModal";
import PostPage from "./pages/post/PostPage";

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

  const isLoading = useSelector((state) => state.loading.isLoading);

  const imageModalVisible = useSelector(
    (state) => state.imageModal.imageVisible
  );

  // Function to get the user details based on session id
  const getUserDetails = async () => {
    const urlAry = window.location.pathname.split("/");
    const endpoint = urlAry[urlAry.length - 1];

    try {
      dispatch(setLoading(true));
      const response = await axios.get("/api/auth/user");
      const user = response.data.user;
      if (endpoint === "login" || endpoint === "signup") {
        window.location.href = "/home";
      }
      dispatch(setUser(user));
      dispatch(setLoading(false));
    } catch (err) {
      // Logout user if error occurs in fetching user details
      if (endpoint !== "login" && endpoint !== "signup") {
        window.location.href = "/login";
        dispatch(showError(err.response.data.error));
      }
      dispatch(setLoading(false));
    }
  };

  const user = useSelector((state) => state.home.user);

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile/:id" element={user && <ProfilePage />} />
          <Route path="/post/:id" element={user && <PostPage />} />
          <Route path="/home" element={user && <HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
      {imageModalVisible && <ImageModal />}
    </ThemeProvider>
  );
}

export default App;
