const { defaultRoutes } = require('./default-routes');
const { loginRoutes } = require('./login/login-routes');
const { usersRoutes } = require('./users/users-routes');

const routes = [
  ...usersRoutes,
  ...loginRoutes,
  ...defaultRoutes,
];

module.exports = { routes };