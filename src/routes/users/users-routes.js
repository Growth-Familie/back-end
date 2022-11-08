const { usersHandler } = require('../../handlers/users-handler');

const usersRoutes = [
  {
    method: 'POST',
    path: '/users',
    handler: usersHandler.addOneUser,
  },
  {
    method: 'GET',
    path: '/users',
    handler: usersHandler.getAllUsers,
  },
];

module.exports = { usersRoutes };