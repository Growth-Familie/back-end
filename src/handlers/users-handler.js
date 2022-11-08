const { addOneUserTool } = require('./utils/users/add-one-user-tool');
const { getAllUsersTool } = require('./utils/users/get-all-users-tool');

const usersHandler = {
  addOneUser: (request, h) => {
    const response = addOneUserTool({ request, h });
    return response;
  },
  getAllUsers: (request, h) => {
    const response = getAllUsersTool({ request, h });
    return response;
  },
};

module.exports = { usersHandler };