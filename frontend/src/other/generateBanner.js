import {
  BANNER1_URL,
  BANNER2_URL,
  BANNER3_URL,
  BANNER4_URL,
  BANNER5_URL,
} from "./constants";

// A function to return profile banner url based on banner code
const generateBanner = (bannerCode) => {
  switch (bannerCode) {
    case "1":
      return BANNER1_URL;
    case "2":
      return BANNER2_URL;
    case "3":
      return BANNER3_URL;
    case "4":
      return BANNER4_URL;
    case "5":
      return BANNER5_URL;
  }
};

export default generateBanner;
