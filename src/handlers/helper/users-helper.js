const hasWhiteSpace = (str) => {
  return (/\s/).test(str);
};

const usernameOrPasswordAvailable = async (model, user) => {
  const { username, email } = user;

  if (username) {
    const response = await model.getOneUser({ username });
    return response;
  }

  // check email
  const response = await model.getOneUser({ email });
  return response;
};

const checkUsernameOrPasswordLength = (user) => {
  const { username, password } = user;

  if (username) {
    const checkUsernameLength = username.length >= 5;
    return checkUsernameLength;
  }

  // check password length
  const checkPasswordLength = password.length >= 8;
  return checkPasswordLength;
};

const getUsersWithLowestLevel = (users) => {
  return users.filter((user) => user.level === 0);
};

module.exports = {
  hasWhiteSpace,
  usernameOrPasswordAvailable,
  checkUsernameOrPasswordLength,
  getUsersWithLowestLevel,
};