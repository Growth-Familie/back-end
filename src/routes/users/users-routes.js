const { usersHandler } = require('../../handlers/users-handler');
const { AuthCookie } = require('../../auth/auth-cookie');

const authOptions = {
  options: {
    auth: {
      mode: 'required',
      strategy: AuthCookie.NAME,
    },
  },
};

const usersRoutes = [
  {
    method: 'POST',
    path: '/users',
    handler: usersHandler.addOneUser,
    ...authOptions,
  },
  {
    method: 'GET',
    path: '/users',
    handler: usersHandler.getAllUsers,
    ...authOptions,
  },
  {
    method: 'GET',
    path: '/users/{username}',
    handler: usersHandler.getSpecificUser,
    ...authOptions,
  },
  {
    method: 'DELETE',
    path: '/users/{username}',
    handler: usersHandler.deleteUser,
    ...authOptions,
  },
  {
    method: 'PUT',
    path: '/users/{username}',
    handler: usersHandler.editUser,
    ...authOptions,
  },
];

module.exports = { usersRoutes };