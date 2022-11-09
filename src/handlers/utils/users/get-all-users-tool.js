const Users = require('../../../db/model/users');
const {
  getUsersWithLowestLevel,
  checkSuperAdmin,
} = require('../../helper/users-helper');
const UsersResponses = require('../../responses/users-responses');

const getAllUsersTool = async ({ request, h }) => {
  const model = new Users(request);
  const response = new UsersResponses(h);

  const { level } = request.auth.credentials;
  const statusSuperAdmin = checkSuperAdmin(level);
  if (!statusSuperAdmin) return response.accessDenied();

  const users = await model.getAllUsers();
  const lowestLevelUsers = getUsersWithLowestLevel(users);

  const isSuccess = lowestLevelUsers.length > 0;
  if (isSuccess) return response.allUsersFound(lowestLevelUsers);

  return response.allUsersFound();
};

module.exports = { getAllUsersTool };