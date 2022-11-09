const { addOneUserTool } = require('./utils/users/add-one-user-tool');
const { getAllUsersTool } = require('./utils/users/get-all-users-tool');

const usersHandler = {
  addOneUser: (request, h) => {
    return addOneUserTool({ request, h });
  },
  getAllUsers: (request, h) => {
    return getAllUsersTool({ request, h });
  },
};

module.exports = { usersHandler };