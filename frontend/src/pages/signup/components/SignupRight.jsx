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

import BoxCentered from "../../../components/BoxCentered";
import ActionButton from "../../../components/ActionButton";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import PhoneIcon from "@mui/icons-material/Phone";
import CakeIcon from "@mui/icons-material/Cake";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import * as yup from "yup";
import SpaceBox from "../../../components/SpaceBox";
import genderList from "../../../res/data/genderList";
import countryList from "../../../res/data/countryList";

import { reverseObject } from "../../../util/objectUtil";
import moment from "moment";
const SignupRight = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const dateToday = new Date();

  // reverseObject() is used to reverse the keys so that error messages appear from top to bottom and not bottom to top
  const validationSchema = yup.object(
    reverseObject({
      username: yup
        .string("Enter your name")
        .trim()
        .required("Name is required")
        .min(2, "Name is too short")
        .max(25, "Name is too big"),
      email: yup
        .string("Enter your email")
        .trim()
        .email("Enter a valid email")
        .required("Email is required"),
      password: yup
        .string("Enter your password")
        .required("Password is required")
        .min(4, "Password should be of minimum 4 characters in length"),
      confirmpassword: yup
        .string("Please confirm your password")
        .required("Please confirm your password")
        .oneOf([yup.ref("password")], "Passwords do not match"),
      gender: yup
        .string("Invalid gender")
        .required("Please specify your gender"),
      country: yup
        .string("Invalid country")
        .required("Please specify your country"),
      description: yup
        .string("Please provide a short description about yourself")
        .min(1, "Description is too short")
        .max(200, "Description is too big")
        .required("Please provide a short description about yourself"),
    })
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    validationSchema
      .validate(
        reverseObject({
          username: username,
          email: email,
          password: password,
          confirmpassword: confirmPassword,
          gender: gender,
          country: country,
          description: description,
        })
      )
      .then(() => {
        if (!birthday) {
          alert("Please provide your date of birth");
        } else {
          const momentDate = moment(birthday.toString());
          if (momentDate.isValid()) {
            if (moment().diff(momentDate, "years") > 10) {
              if (phoneNumber) {
                if (
                  phoneNumber.match(
                    /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                  )
                ) {
                  alert("Success");
                } else {
                  alert("Please enter a valid phone number");
                }
              }
            } else {
              alert(
                "You should be atleast 10 years old in order to create an account"
              );
            }
          } else {
            alert("Invalid date format");
          }
        }
      })
      .catch((e) => {
        alert(e.errors[0]);
      });
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

        <form onSubmit={handleSubmit} autoComplete="off">
          <img
            alt="country"
            width="18%"
            src="/icons/logo_spacefeed_circle_dark.png"
          />
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DesktopDatePicker
                label="Birthday"
                inputFormat="DD/MM/YYYY"
                value={birthday}
                onChange={(e) => setBirthday(e)}
                renderInput={(params) => (
                  <TextField
                    style={{ marginTop: "15px" }}
                    fullWidth
                    variant="outlined"
                    {...params}
                    error={false}
                  />
                )}
              />
            </LocalizationProvider>

            <FormControl
              style={{ marginTop: "15px", textAlign: "left" }}
              fullWidth
            >
              <InputLabel>Gender</InputLabel>
              <Select
                value={gender}
                label="Gender"
                onChange={(e) => setGender(e.target.value)}
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
              onInputChange={(e, v) => setCountry(v)}
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
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
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
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <TextField
              fullWidth
              variant="outlined"
              label="Tell us about yourself"
              multiline
              rows={3}
              style={{ marginTop: "15px" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
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
            Create Account
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
