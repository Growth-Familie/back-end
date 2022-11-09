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

  const { _id: id } = account;
  request.cookieAuth.set({ id: id.toString() });
  return response.successfullyLoggedIn(account.username);
};

module.exports = { postLoginTool };