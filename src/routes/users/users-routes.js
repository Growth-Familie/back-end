const { usersHandler } = require('../../handlers/users-handler');

const usersRoutes = [
  {
    method: 'GET',
    path: '/users/{username}',
    handler: usersHandler.getSpecific,
  },
  {
    method: 'PUT',
    path: '/users/{username}',
    handler: usersHandler.editOne,
  },
];

module.exports = { usersRoutes };