const { faker } = require("@faker-js/faker");
const UserModel = require("../models/userModel");

const createDummyUser = () => {
  const data = {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: "$2a$10$wyMZKZ0mvXG2q4ZlNLWUSefYD8ako7YPiqmrwTV1n/CYJR25knbsS",
    dob: faker.date.birthdate(),
    gender: "M",
    country: "India",
    phone: "9876543210",
    profilePictureURL: faker.image.avatar(),
    profileBanner: "5",
    description:
      "I'm a sales rep dedicated to helping local Oklahoma City services businesses grow their customer base and decrease customer churn",
  };
  return data;
};

const getDummyUsers = (length) => {
  const dummyUsers = [];
  Array.from({ length: length }).forEach(() => {
    dummyUsers.push(createDummyUser());
  });
  return dummyUsers;
};

const saveDummyUsersToDB = async (length) => {
  let dummyUsers = getDummyUsers(length);
  for (let i in dummyUsers) {
    await UserModel.create(dummyUsers[i]);
  }
  console.log("Saved " + length + " users to database");
};

module.exports = { saveDummyUsersToDB };
