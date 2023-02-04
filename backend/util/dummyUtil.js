const UserModel = require("../models/userModel");
const randomSentence = require("random-sentence");
const { faker } = require("@faker-js/faker");
const PostModel = require("../models/postModel");
const Quote = require("inspirational-quotes");
const coolImages = require("cool-images");
const { generateRandomNumber } = require("./randomUtil");

const createDummyUser = () => {
  const data = {
    username: faker.name.fullName(),
    email: faker.internet.email(),
    password: process.env.DUMMY_USER_PASSWORD_HASH, // Use bcrypt hash here
    dob: faker.date.birthdate(),
    gender: "M",
    country: "India",
    phone: "9876543210",
    profilePictureURL: faker.image.avatar(),
    profileBanner: generateRandomNumber(5),
    description: randomSentence() + "... I am a bot created by ishant",
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
  let userIdAry = [];
  for (let i in dummyUsers) {
    const savedUser = await UserModel.create(dummyUsers[i]);
    userIdAry.push(savedUser._id);
  }
  return userIdAry;
};

const createAndSaveDummyPostsInDB = async (dummyUsers) => {
  for (let i in dummyUsers) {
    const content = randomSentence() + "... this is a bot post";
    await PostModel.create({
      createdBy: dummyUsers[i],
      content: content,
      mediaLink: coolImages.one(1000, 1200),
      likedBy: dummyUsers.filter((item) => item != dummyUsers[i]),
    });
  }
};

const updateFollowingsOfUsers = async (dummyUsers) => {
  for (let i in dummyUsers) {
    await UserModel.findById(dummyUsers[i]).updateMany({
      followings: dummyUsers.filter((item) => item != dummyUsers[i]),
    });
  }
};

const generateDummyDataInDB = async (userCount) => {
  // Create and save random users in DB
  const userIdAry = await saveDummyUsersToDB(userCount);

  // For each user, generate 10 random posts
  await createAndSaveDummyPostsInDB(userIdAry);
  await createAndSaveDummyPostsInDB(userIdAry);
  await createAndSaveDummyPostsInDB(userIdAry);
  await createAndSaveDummyPostsInDB(userIdAry);
  await createAndSaveDummyPostsInDB(userIdAry);
  await createAndSaveDummyPostsInDB(userIdAry);
  await createAndSaveDummyPostsInDB(userIdAry);
  await createAndSaveDummyPostsInDB(userIdAry);
  await createAndSaveDummyPostsInDB(userIdAry);
  await createAndSaveDummyPostsInDB(userIdAry);

  // Update followings of each user
  await updateFollowingsOfUsers(userIdAry);
};

module.exports = generateDummyDataInDB;
