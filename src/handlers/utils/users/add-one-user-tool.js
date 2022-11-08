const Users = require('../../../db/model/users');
const UsersResponses = require('../../responses/users-response');
const {
  hasWhiteSpace,
  usernameOrPasswordAvailable,
  checkUsernameOrPasswordLength,
} = require('../../helper/users-helper');
const bcrypt = require('bcrypt');

// used for encryption password
const SALT_ROUNDS = 10;

// level account default = akun biasa
const DEFAULT_LEVEL = 0;

const addOneUserTool = async ({ request, h }) => {
  const {
    name,
    username,
    email,
    password,
  } = request.payload;

  const model = new Users(request);
  const response = new UsersResponses(h);
  const statusWhitespacesUsername = hasWhiteSpace(username);
  const statusWhitespacesPassword = hasWhiteSpace(password);
  const statusAvailabilityUsername = await usernameOrPasswordAvailable(model, { username });
  const statusAvailabilityEmail = await usernameOrPasswordAvailable(model, { email });
  const statusLengthUsername = checkUsernameOrPasswordLength({ username });
  const statusLengthPassword = checkUsernameOrPasswordLength({ password });

  // checking
  if (statusWhitespacesUsername) return response.whitespacesFound();
  if (statusWhitespacesPassword) return response.whitespacesFound();
  if (!statusLengthUsername) return response.usernameCharLengthDoesNotMatch();
  if (!statusLengthPassword) return response.passwordCharLengthDoesNotMatch();
  if (statusAvailabilityUsername) return response.hasBeenUsed(username);
  if (statusAvailabilityEmail) return response.hasBeenUsed(email);

  // passed
  const encryptedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  const newUser = {
    level: DEFAULT_LEVEL,
    name,
    username,
    email,
    password: encryptedPassword,
  };

  const addUser = await model.addOneUser(newUser);
  const id = addUser.insertedId.toString();
  const isSuccess = await model.getOneUser({ id });

  if (isSuccess) return response.successfullyAdded(id);

  return response.serverError();
};

module.exports = { addOneUserTool };