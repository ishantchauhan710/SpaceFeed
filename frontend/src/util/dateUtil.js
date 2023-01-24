import moment from "moment";

// Function to convert date from DD/MM/YYYY to Date() object
const strToDate = (dateString) => {
  var momentObject = moment(dateString, "DD/MM/YYYY");
  var date = momentObject.toDate();
  return date;
};

export { strToDate };
