const { addOneUserTool } = require('./utils/users/add-one-user-tool');
const { getAllUsersTool } = require('./utils/users/get-all-users-tool');
const { getUserByUsernameTool } = require('./utils/users/get-user-by-username-tool');
const { deleteUserByUsernameTool } = require('./utils/users/delete-user-by-username-tool');
const { editUserByUsernameTool } = require('./utils/users/edit-user-by-username-tool');

const usersHandler = {
  addOneUser: (request, h) => {
    return addOneUserTool({ request, h });
  },
  getAllUsers: (request, h) => {
    return getAllUsersTool({ request, h });
  },
  getSpecificUser: (request, h) => {
    return getUserByUsernameTool({ request, h });
  },
  deleteUser: (request, h) => {
    return deleteUserByUsernameTool({ request, h });
  },
  editUser: (request, h) => {
    return editUserByUsernameTool({ request, h });
  },
};

module.exports = { usersHandler };