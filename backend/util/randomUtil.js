const generateRandom = () => {
  const randomValue =
    new Date().getTime().toString() + Math.random().toString().slice(2);
  return randomValue;
};

const generateRandomWithEmail = (email) => {
  const username = email.split("@")[0];
  const randomValue =
    new Date().getTime().toString() + Math.random().toString().slice(2);
  return username + randomValue;
};

module.exports = { generateRandom, generateRandomWithEmail };
