const hasWhiteSpace = (str) => {
  return (/\s/).test(str);
};

const checkStringLength = (user) => {
  const { name, username, password } = user;

  if (name) return name.length >= 2;

  if (username) return username.length >= 5;

  // check password length
  return password.length >= 8;
};

const checkPropertyValueIsEmpty = (payload) => {
  const {
    name,
    username,
    email,
    password,
  } = payload;

  if (!name) return true;
  if (!username) return true;
  if (!email) return true;
  if (!password) return true;
  return false;
};

module.exports = {
  hasWhiteSpace,
  checkStringLength,
  checkPropertyValueIsEmpty,
};