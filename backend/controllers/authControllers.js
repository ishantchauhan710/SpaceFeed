const signupController = async (req, res) => {
  res.send("Signup");
};

const loginController = async (req, res) => {
  res.send("Hi");
};

module.exports = { signupController, loginController };
