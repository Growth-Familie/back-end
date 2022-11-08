const { defaultRoutes } = require('./default-routes');
const { usersRoutes } = require('./users/users-routes');

const routes = [
  ...usersRoutes,
  ...defaultRoutes,
];

module.exports = { routes };