import validate from "./validate.js";
const validateDescription = (value) => {
  const reg = new RegExp("^(.|s)*[a-zA-Z]+(.|s)*$", "g");
  return validate(reg, value, 2, 455).map((err) => `Description is ${err}`);
};

export default validateDescription;
