const { loginHandler } = require('../../handlers/login-handler');

const loginRoutes = [
  {
    method: 'POST',
    path: '/login',
    handler: loginHandler.postLogin,
  },
];

module.exports = { loginRoutes };