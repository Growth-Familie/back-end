const Users = require('../../../db/model/users');
const { checkIsMe, checkSuperAdmin } = require('../../helper/users-helper');
const UsersResponses = require('../../responses/users-responses');

const deleteUserByUsernameTool = async ({ request, h }) => {
  const { username } = request.params;
  const {
    level,
    username: authUsername,
  } = request.auth.credentials;
  const model = new Users(request);
  const response = new UsersResponses(h);

  const statusSuperAdmin = checkSuperAdmin(level);

  if (!statusSuperAdmin) return response.accessDenied();

  const isMySelf = checkIsMe(authUsername, username);

  if (isMySelf) return response.accessDenied();

  const deleteUser = await model.deleteOneUser(username);
  const isSuccess = deleteUser.deletedCount === 0;

  if (isSuccess) return response.userDeleted(username);

  return response.userNotFound();
};

module.exports = { deleteUserByUsernameTool };