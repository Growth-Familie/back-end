const Users = require('../../../db/model/users');
const UsersResponses = require('../../responses/users-responses');
const {
  hasWhiteSpace,
  usernameOrEmailAvailable,
  checkStringLength,
  checkPropertyValueIsEmpty,
  checkSuperAdmin,
} = require('../../helper/users-helper');
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');

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

  // checking
  const { level } = request.auth.credentials;
  const statusSuperAdmin = checkSuperAdmin(level);
  if (!statusSuperAdmin) return response.accessDenied();

  const statusEmptyValue = checkPropertyValueIsEmpty(request.payload);
  if (statusEmptyValue) return response.valueIsEmpty();

  const statusWhitespacesUsername = hasWhiteSpace(username);
  const statusWhitespacesPassword = hasWhiteSpace(password);

  const statusFormatEmail = emailValidator.validate(email);
  if (!statusFormatEmail) return response.emailNotValid();

  const statusAvailabilityUsername = await usernameOrEmailAvailable(model, { username });
  const statusAvailabilityEmail = await usernameOrEmailAvailable(model, { email });
  const statusLengthName = checkStringLength({ name });
  const statusLengthUsername = checkStringLength({ username });
  const statusLengthPassword = checkStringLength({ password });

  if (statusWhitespacesUsername) return response.whitespacesFound();
  if (statusWhitespacesPassword) return response.whitespacesFound();
  if (!statusLengthName) return response.nameLengthDoesNotMatch();
  if (!statusLengthUsername) return response.usernameLengthDoesNotMatch();
  if (!statusLengthPassword) return response.passwordLengthDoesNotMatch();
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