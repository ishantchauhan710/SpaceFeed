import moment from "moment";

const parsePostDate = (date) => {
  var dateToday = moment(new Date());
  var postDate = moment(date);
  var days = dateToday.diff(postDate, "days");

  if (days > 3) {
    return postDate.format("MMMM Do YYYY");
  } else {
    return postDate.fromNow();
  }
};

export { parsePostDate };
