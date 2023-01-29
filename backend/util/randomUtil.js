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

const generateRandomNumber = (lastValue = 100) => {
  let randomValue = Math.round(Math.random() * lastValue);
  if (randomValue === 0) {
    randomValue += 1;
  }
  return randomValue.toString();
};

module.exports = {
  generateRandom,
  generateRandomWithEmail,
  generateRandomNumber,
};
