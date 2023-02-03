import genderList from "../res/data/genderList";

const parseNotification = (type) => {
  if (type === "comment") {
    return "commented on your post";
  } else if (type === "like") {
    return "liked your post";
  } else if (type === "commentlike") {
    return "liked your comment";
  } else if (type === "follow") {
    return "started following you";
  } else {
    return "error";
  }
};

export default parseNotification;
