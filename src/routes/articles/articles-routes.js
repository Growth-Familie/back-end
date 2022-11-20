const { articlesHandler } = require('../../handlers/articles-handler');

const articlesRoutes = [
  {
    method: 'POST',
    path: '/articles',
    handler: articlesHandler.addOne,
  },
  {
    method: 'PUT',
    path: '/articles/{articleSlug}',
    handler: articlesHandler.updateOne,
  },
  {
    method: 'PUT',
    path: '/articles/id/{articleId}',
    handler: articlesHandler.updateOne,
  },
  {
    method: 'DELETE',
    path: '/articles/{articleSlug}',
    handler: articlesHandler.deleteOne,
  },
  {
    method: 'DELETE',
    path: '/articles/id/{articleId}',
    handler: articlesHandler.deleteOne,
  },
  {
    method: 'GET',
    path: '/articles',
    handler: articlesHandler.getAll,
  },
  {
    method: 'GET',
    path: '/articles/{articleSlug}',
    handler: articlesHandler.getDetail,
  },
  {
    method: 'GET',
    path: '/articles/id/{articleId}',
    handler: articlesHandler.getDetail,
  },
  {
    method: 'GET',
    path: '/articles/category/{categoryName}',
    handler: articlesHandler.getAllByCategory,
  },
];

module.exports = { articlesRoutes };