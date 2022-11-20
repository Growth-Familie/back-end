const Users = require('../../../db/model/users');
const UsersResponses = require('../../responses/users-responses');
const {
  checkPropertyValueIsEmpty,
  hasWhiteSpace,
  checkStringLength,
} = require('../../helper/users-helper');
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');

// used for encrypt password
const SALT_ROUNDS = 10;

const editUserByUsernameTool = async ({ request, h }) => {
  const { username } = request.params;

  const model = new Users(request);
  const response = new UsersResponses(h);

  const getUser = await model.getOneUser({ username });

  if (!getUser) return response.userNotFound();

  const {
    password: myPassword,
  } = getUser;

  const {
    name,
    email,
    currentPassword,
    newPassword: password,
  } = request.payload;

  const user = {
    name,
    username,
    email,
    password,
  };

  // checking
  if (checkPropertyValueIsEmpty(user)) return response.valueIsEmpty();
  if (!checkStringLength({ name })) return response.nameLengthDoesNotMatch();
  if (!emailValidator.validate(email)) return response.emailNotValid();
  if (hasWhiteSpace(password)) return response.whitespacesFound();
  if (!checkStringLength({ password })) return response.passwordLengthDoesNotMatch();

  const encryptedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  const statusPassword = await bcrypt.compare(currentPassword, myPassword);

  if (!statusPassword) return response.passwordNotValid();

  const editedUser = {
    name,
    email,
    password: encryptedPassword,
  };

  const updateUser = await model.editOneUser(username, editedUser);
  const isSuccess = updateUser.modifiedCount === 1;

  if (isSuccess) return response.successfullyUpdated(username);

  return response.serverError();
};

module.exports = { editUserByUsernameTool };