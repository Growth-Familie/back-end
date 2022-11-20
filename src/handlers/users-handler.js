const { getUserByUsernameTool } = require('./utils/users/get-user-by-username-tool');
const { editUserByUsernameTool } = require('./utils/users/edit-user-by-username-tool');

const usersHandler = {
  getSpecific: (request, h) => {
    return getUserByUsernameTool({ request, h });
  },
  editOne: (request, h) => {
    return editUserByUsernameTool({ request, h });
  },
};

module.exports = { usersHandler };