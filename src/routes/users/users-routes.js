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
];

module.exports = { usersRoutes };