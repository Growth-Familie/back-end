const Users = require('../../../db/model/users');
const UsersResponses = require('../../responses/users-responses');

const getUserByUsernameTool = async ({ request, h }) => {
  const { username } = request.params;
  const model = new Users(request);
  const response = new UsersResponses(h);

  const { isAuthenticated } = request.auth;
  if (!isAuthenticated) return response.accessDenied();

  const getUser = await model.getOneUser({ username });
  if (!getUser) return response.userNotFound();
  if (getUser) return response.userFound(getUser);

  return response.serverError();
};

module.exports = { getUserByUsernameTool };