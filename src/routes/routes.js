const { defaultRoutes } = require('./default-routes');
const { loginRoutes } = require('./login/login-routes');
const { usersRoutes } = require('./users/users-routes');
const { articlesRoutes } = require('../routes/articles/articles-routes');

const routes = [
  ...usersRoutes,
  ...loginRoutes,
  ...defaultRoutes,
  ...articlesRoutes
];

module.exports = { routes };