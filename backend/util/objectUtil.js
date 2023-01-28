const reverseObject = (obj) => {
  return Object.entries(obj)
    .reverse()
    .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {});
};

module.exports = { reverseObject };
