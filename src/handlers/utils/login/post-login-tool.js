const Users = require('../../../db/model/users');
const LoginResponses = require('../../responses/login-responses');
const bcrypt = require('bcrypt');

const postLoginTool = async ({ request, h }) => {
  const { username, password } = request.payload;

  const model = new Users(request);
  const response = new LoginResponses(h);

  const account = await model.getOneUser({ username });

  if (!account) return response.loginFailed();

  const statusPassword = await bcrypt.compare(password, account.password);

  if (!statusPassword) return response.loginFailed();

  return response.successfullyLoggedIn(account);
};

module.exports = { postLoginTool };