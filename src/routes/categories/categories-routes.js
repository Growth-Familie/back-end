const { categoriesHandler } = require('../../handlers/categories-handler');

const categoriesRoutes = [
  {
    method: 'GET',
    path: '/categories',
    handler: categoriesHandler.getAll,
  },
];

module.exports = { categoriesRoutes };