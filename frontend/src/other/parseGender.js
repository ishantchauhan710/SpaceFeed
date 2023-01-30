import genderList from "../res/data/genderList";

const parseGender = (genderCode) => {
  const gender = genderList.find(({ code }) => code === genderCode);
  return gender ? gender.type : "Error";
};

export default parseGender;
