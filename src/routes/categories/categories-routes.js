const { categoriesHandler } = require('../../handlers/categories-handler');

const categoriesRoutes = [
  {
    method: 'GET',
    path: '/categories',
    handler: categoriesHandler.getAll,
  },
  {
    method: 'GET',
    path: '/categories/{categoryName}',
    handler: categoriesHandler.getDetail,
  },
];

module.exports = { categoriesRoutes };