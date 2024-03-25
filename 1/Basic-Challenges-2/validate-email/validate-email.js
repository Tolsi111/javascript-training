//For the purposes of this challenge, a valid email address is defined as a string that contains an @ symbol and a . symbol.
function validateEmail(email) {
  return email.indexOf("@") > 0 && email.includes(".");
}

module.exports = validateEmail;
