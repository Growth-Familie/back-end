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
    handler: usersHandler.addOne,
    ...authOptions,
  },
  {
    method: 'GET',
    path: '/users',
    handler: usersHandler.getAll,
    ...authOptions,
  },
  {
    method: 'GET',
    path: '/users/{username}',
    handler: usersHandler.getSpecific,
    ...authOptions,
  },
  {
    method: 'DELETE',
    path: '/users/{username}',
    handler: usersHandler.deleteOne,
    ...authOptions,
  },
  {
    method: 'PUT',
    path: '/users/{username}',
    handler: usersHandler.editOne,
    ...authOptions,
  },
];

module.exports = { usersRoutes };