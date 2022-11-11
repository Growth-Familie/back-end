const { articlesRoutes } = require('./articles/articles-routes');
const { categoriesRoutes } = require('./categories/categories-routes');
const { defaultRoutes } = require('./default-routes');
const { loginRoutes } = require('./login/login-routes');
const { usersRoutes } = require('./users/users-routes');

const routes = [
  ...articlesRoutes,
  ...categoriesRoutes,
  ...loginRoutes,
  ...usersRoutes,
  ...defaultRoutes,
];

module.exports = { routes };