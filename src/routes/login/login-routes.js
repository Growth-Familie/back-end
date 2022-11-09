const { AuthCookie } = require('../../auth/auth-cookie');
const { loginHandler } = require('../../handlers/login-handler');

const loginRoutes = [
  {
    method: 'POST',
    path: '/login',
    handler: loginHandler.postLogin,
    options: {
      auth: {
        mode: 'try',
      },
    },
  },
  {
    method: 'GET',
    path: '/logout',
    handler: loginHandler.getLogout,
    options: {
      auth: {
        mode: 'required',
        strategy: AuthCookie.NAME,
      },
    },
  },
];

module.exports = { loginRoutes };