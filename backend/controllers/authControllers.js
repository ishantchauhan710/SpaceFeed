const createHttpError = require("http-errors");
const moment = require("moment");
const yup = require("yup");
const UserModel = require("../models/userModel");
const { reverseObject } = require("../util/objectUtil");
const bcrypt = require("bcryptjs");
const { REGEX_PHONE } = require("../util/regexUtil");
const { uploadFileToStorage } = require("../util/cloudUtil");

const signupController = async (req, res, next) => {
  const {
    username,
    email,
    password,
    dob,
    gender,
    country,
    phone,
    profilePictureURL,
    profileBanner,
    description,
  } = req.body;

  // Validate the input
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
      gender: yup
        .string("Invalid gender")
        .required("Please specify your gender"),
      country: yup
        .string("Invalid country")
        .required("Please specify your country"),
      description: yup
        .string("Please provide a short description about yourself")
        .required("Please provide a short description about yourself")
        .max(200, "Description is too big"),
    })
  );

  const phoneRegex = new RegExp(REGEX_PHONE);

  validationSchema
    .validate(
      reverseObject({
        username: username,
        email: email,
        password: password,
        gender: gender,
        country: country,
        description: description,
      })
    )
    .then(() => {
      if (!dob) {
        next(createHttpError(400, "Please provide date of birth"));
      } else {
        const momentDate = moment(dob.toString());
        if (momentDate.isValid()) {
          if (moment().diff(momentDate, "years") > 10) {
            if (phone) {
              if (!phoneRegex.test(phone)) {
                next(createHttpError(400, "Invalid phone number"));
              }
            }
          } else {
            next(
              createHttpError(
                400,
                "You must be atleast 10 years old in order to create an account"
              )
            );
          }
        } else {
          next(createHttpError(400, "Invalid date format"));
        }
      }
    })
    .catch((e) => {
      let errMsg = "An unknown error occurred";
      if (e && e.errors && e.errors[0]) {
        errMsg = e.errors[0];
      }
      next(createHttpError(400, errMsg));
    });

  // Create user's account
  try {
    // const userExists = await UserModel.findOne({ email: email })
    //   .select("+password +email")
    //   .exec();

    // if (userExists) {
    //   throw createHttpError(401, "Email already taken");
    // }

    const passwordHash = await bcrypt.hash(password, 10);

    uploadFileToStorage("/home/ishant/Desktop/ishant/ishant.png")
    //res.status(201).json(data);
    
    // const newUser = await UserModel.create({
    //   username: username,
    //   email: email,
    //   password: passwordHash,
    //   gender: gender,
    //   country: country,
    //   description: description,
    //   dob: dob,
    //   phone: phone,
    // });
    res.status(201).json(newUser);
  } catch (err) {
    next(err.message);
  }
};

const loginController = async (req, res) => {
  res.send("Hi");
};

module.exports = { signupController, loginController };
