const hasWhiteSpace = (str) => {
  return (/\s/).test(str);
};

const usernameOrEmailAvailable = async (model, user) => {
  const { username, email } = user;

  if (username) {
    const response = await model.getOneUser({ username });
    return response;
  }

  // check email
  const response = await model.getOneUser({ email });
  return response;
};

const checkStringLength = (user) => {
  const { name, username, password } = user;

  if (name) return name.length >= 2;

  if (username) return username.length >= 5;

  // check password length
  return password.length >= 8;
};

const checkNameLength = (name) => {
  return name.length >= 2;
};

const getUsersWithLowestLevel = (users) => {
  return users.filter((user) => user.level === 0);
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

const checkSuperAdmin = (level) => {
  return level === 1;
};

module.exports = {
  hasWhiteSpace,
  usernameOrEmailAvailable,
  checkStringLength,
  getUsersWithLowestLevel,
  checkPropertyValueIsEmpty,
  checkNameLength,
  checkSuperAdmin,
};