const Users = require('../../../db/model/users');
const { getUsersWithLowestLevel } = require('../../helper/users-helper');
const UsersResponses = require('../../responses/users-response');

const getAllUsersTool = async ({ request, h }) => {
  const model = new Users(request);
  const response = new UsersResponses(h);

  const users = await model.getAllUsers();
  const lowestLevelUsers = getUsersWithLowestLevel(users);
  const isSuccess = lowestLevelUsers.length > 0;

  if (isSuccess) return response.allUsersFound(lowestLevelUsers);

  return response.allUsersFound();
};

module.exports = { getAllUsersTool };