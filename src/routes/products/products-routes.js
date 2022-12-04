const productsHandler = require('../../handlers/products-handler');

const productsRoutes = [
  {
    method: 'GET',
    path: '/products',
    handler: productsHandler.getAll,
  },
  {
    method: 'GET',
    path: '/products/category/{categoryName}',
    handler: productsHandler.getAllByCategory,
  },
  {
    method: 'GET',
    path: '/products/{productId}',
    handler: productsHandler.getDetail,
  },
  {
    method: 'POST',
    path: '/products',
    handler: productsHandler.addOne,
  },
  {
    method: 'DELETE',
    path: '/products/{productId}',
    handler: productsHandler.deleteOne,
  },
  {
    method: 'PUT',
    path: '/products/{productId}',
    handler: productsHandler.updateOne,
  },
];

module.exports = { productsRoutes };