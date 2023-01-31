const createHttpError = require("http-errors");
const moment = require("moment");
const yup = require("yup");
const UserModel = require("../../models/userModel");
const { reverseObject } = require("../../util/objectUtil");
const bcrypt = require("bcryptjs");
const { REGEX_PHONE } = require("../../util/regexUtil");
const {
  generateRandomWithEmail,
  generateRandomNumber,
} = require("../../util/randomUtil");

const signupController = async (req, res, next) => {
  const {
    username,
    email,
    password,
    dob,
    gender,
    country,
    phone,
    description,
  } = req.body;

  const profilePicture = req.file;
  //console.log("File: ", profilePicture);

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

  try {
    // Validate user data
    const validated = await validationSchema.validate(
      reverseObject({
        username: username,
        email: email,
        password: password,
        gender: gender,
        country: country,
        description: description,
      })
    );

    if (validated) {
      if (!dob) {
        throw new createHttpError(400, "Please provide date of birth");
      } else {
        const momentDate = moment(new Date(dob));
        if (momentDate.isValid()) {
          if (moment().diff(momentDate, "years") > 10) {
            if (phone) {
              if (!phoneRegex.test(phone)) {
                throw new createHttpError(400, "Invalid phone number");
              }
            }
          } else {
            throw new createHttpError(
              400,
              "You must be atleast 10 years old in order to create an account"
            );
          }
        } else {
          throw new createHttpError(400, "Invalid date format");
        }
      }
    }

    // Check if user exists
    const userExists = await UserModel.findOne({ email: email })
    .exec();

    if (userExists) {
      throw new createHttpError(401, "Email already taken");
    }

    // Handle profile picture and banner
    const uploadedFileURL = profilePicture ? profilePicture.publicUrl : "";
    const profileBannerCode = generateRandomNumber(5);

    // Secure the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Finally create user's account
    const newUser = await UserModel.create({
      username: username,
      email: email,
      password: passwordHash,
      dob: dob,
      gender: gender,
      country: country,
      phone: phone ? phone : "",
      profilePictureURL: uploadedFileURL,
      profileBanner: profileBannerCode,
      description: description,
    });

    req.session.userId = newUser._id;
    res.sendStatus(201);
  } catch (err) {
    if (err.errors && err.errors[0]) {
      //console.log(err.errors[0]);
      next(createHttpError(400, err.errors[0]));
    } else {
      next(err);
    }
  }
};

module.exports = signupController;
