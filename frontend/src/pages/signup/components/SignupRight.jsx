import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Link,
  Select,
  MenuItem,
  InputLabel,
  Autocomplete,
} from "@mui/material";

import FormControl from "@mui/material/FormControl";
import { makeStyles } from "@mui/styles";

import BoxCentered from "../../../components/BoxCentered";
import ActionButton from "../../../components/ActionButton";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import PhoneIcon from "@mui/icons-material/Phone";
import MaleIcon from "@mui/icons-material/Male";
import CakeIcon from "@mui/icons-material/Cake";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

import { useFormik } from "formik";
import * as yup from "yup";
import SpaceBox from "../../../components/SpaceBox";
import genderList from "../../../res/data/genderList";
import countryList from "../../../res/data/countryList";

const SignupRight = () => {
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
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    const genderValue = event.target.value;
    setGender(genderValue);
  };

  return (
    <BoxCentered
      sx={{
        backgroundColor: "background.alt",
        overflowY: "auto",
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
        <SpaceBox />
        <SpaceBox />
        <SpaceBox />
        <SpaceBox />
        <SpaceBox />
        <SpaceBox />

        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <img width="18%" src="/icons/logo_spacefeed_circle_dark.png" />
          <Typography variant="h2" marginTop={2}>
            Sign Up
          </Typography>
          <Typography
            paddingLeft={2}
            paddingRight={2}
            variant="h6"
            marginTop={1}
          >
            Enter the following details in order to create an account
          </Typography>

          <Box marginTop={3}>
            <TextField
              fullWidth
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              label="Full Name"
            />

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
              label="Email"
              style={{ marginTop: "15px" }}
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
              label="Password"
              type="password"
            />
            <TextField
              fullWidth
              variant="outlined"
              style={{ marginTop: "15px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LockPersonIcon />
                  </InputAdornment>
                ),
              }}
              label="Confirm Password"
              type="password"
            />

            <TextField
              fullWidth
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CakeIcon />
                  </InputAdornment>
                ),
              }}
              label="Birthday (DD/MM/YYYY)"
              style={{ marginTop: "15px" }}
            />

            <FormControl
              style={{ marginTop: "15px", textAlign: "left" }}
              fullWidth
            >
              <InputLabel>Gender</InputLabel>
              <Select
                value={gender}
                label="Gender"
                onChange={handleGenderChange}
              >
                {genderList.map((gender) => (
                  <MenuItem key={gender.code} value={gender.code}>
                    {gender.type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Autocomplete
              id="country-select-demo"
              style={{ marginTop: "15px" }}
              options={countryList}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  {option.label} ({option.code}) +{option.phone}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />

            <TextField
              fullWidth
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
              label="Phone Number (Optional)"
              style={{ marginTop: "15px" }}
            />

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
              label="Tell us about yourself"
              multiline
              rows={3}
              style={{ marginTop: "15px" }}
            />

            <TextField
              fullWidth
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <InsertPhotoIcon />
                  </InputAdornment>
                ),
              }}
              label="Profile Picture"
              style={{ marginTop: "15px" }}
            />
          </Box>

          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width="100%"
            marginTop={1}
          >
            <Link underline="hover" href="#">
              Forgot password?
            </Link>
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
          <Link underline="hover" href="#">
            Sign Up
          </Link>
        </Typography>
        <SpaceBox />
      </Stack>
    </BoxCentered>
  );
};

export default SignupRight;
