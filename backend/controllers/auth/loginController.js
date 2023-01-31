const createHttpError = require("http-errors");
const yup = require("yup");
const UserModel = require("../../models/userModel");
const bcrypt = require("bcryptjs");

const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  const validationSchema = yup.object({
    password: yup
      .string("Enter your password")
      .required("Password is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
  });

  try {
    const validated = await validationSchema.validate({
      email: email,
      password,
    });

    const user = await UserModel.findOne({ email: email })
      .select("+password")
      .exec();
    if (!user) {
      throw createHttpError(401, "User not found");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw createHttpError(401, "Incorrect password");
    }

    req.session.userId = user._id;
    res.sendStatus(201);
  } catch (err) {
    if (err.errors && err.errors[0]) {
      next(createHttpError(401, err.errors[0]));
    } else {
      next(err);
    }
  }
};

module.exports = loginController;
