import {
  Box,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import ActionButton from "../../../components/styled/ActionButton";
import BoxCentered from "../../../components/styled/BoxCentered";

import axios from "axios";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import LinkButton from "../../../components/styled/LinkButton";
import { setUser } from "../../../states/homeSlice.js";
import { setLoading } from "../../../states/other/loadingSlice";
import { showError } from "../../../states/other/notificationSlice";
import ForgotPasswordDialog from "./ForgotPasswordDialog";

const LoginRight = () => {
  const [showForgotPasswordDialog, setShowForgotPasswordDialog] =
    React.useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(4, "Password should be of minimum 4 characters in length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      loginUser(values.email, values.password);
    },
  });

  const loginUser = async (email, password) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post("api/auth/login", {
        email: email,
        password: password,
      });
      dispatch(setUser(response.data.user));
      dispatch(setLoading(false));
      navigate("/home");
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(showError(err.response.data.error));
    }
  };

  return (
    <BoxCentered
      sx={{
        backgroundColor: "background.alt",
        display: {
          xs: "flex",
          sm: "flex",
        },
      }}
      flex={1}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        width="80%"
      >
        <form onSubmit={formik.handleSubmit}>
          <img
            alt="spacefeed logo"
            width="18%"
            src="/icons/logo_spacefeed_circle_dark.png"
          />
          <Typography variant="h2" marginTop={2}>
            Hello there!
          </Typography>
          <Typography
            paddingLeft={2}
            paddingRight={2}
            variant="h6"
            marginTop={1}
          >
            Enter your email and password in order to login to your account
          </Typography>

          <Box marginTop={3}>
            <TextField
              fullWidth
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AlternateEmailIcon />
                  </InputAdornment>
                ),
              }}
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              fullWidth
              variant="outlined"
              style={{ marginTop: "15px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width="100%"
            marginTop={1}
          >
            <LinkButton
              underline="hover"
              onClick={() => setShowForgotPasswordDialog(true)}
            >
              Forgot password?
            </LinkButton>
          </Box>
          <ActionButton
            type="submit"
            style={{
              marginTop: "18px",
            }}
            fullWidth
            size="large"
            variant="contained"
          >
            Login
          </ActionButton>
        </form>
        <Typography variant="h6" marginTop={2}>
          Don't have an account?{" "}
          <Link underline="hover" href="/signup">
            Sign Up
          </Link>
        </Typography>
      </Stack>
      <ForgotPasswordDialog
        open={showForgotPasswordDialog}
        setOpen={setShowForgotPasswordDialog}
      />
    </BoxCentered>
  );
};

export default LoginRight;
