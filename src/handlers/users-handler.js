const { addOneUserTool } = require('./utils/users/add-one-user-tool');
const { getAllUsersTool } = require('./utils/users/get-all-users-tool');
const { getUserByUsernameTool } = require('./utils/users/get-user-by-username-tool');
const { deleteUserByUsernameTool } = require('./utils/users/delete-user-by-username-tool');
const { editUserByUsernameTool } = require('./utils/users/edit-user-by-username-tool');

const usersHandler = {
  addOne: (request, h) => {
    return addOneUserTool({ request, h });
  },
  getAll: (request, h) => {
    return getAllUsersTool({ request, h });
  },
  getSpecific: (request, h) => {
    return getUserByUsernameTool({ request, h });
  },
  deleteOne: (request, h) => {
    return deleteUserByUsernameTool({ request, h });
  },
  editOne: (request, h) => {
    return editUserByUsernameTool({ request, h });
  },
};

module.exports = { usersHandler };