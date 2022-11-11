const { articlesHandler } = require('../../handlers/articles-handler');
const { AuthCookie } = require('../../auth/auth-cookie');

const authOptions = {
  options: {
    auth: {
      mode: 'required',
      strategy: AuthCookie.NAME,
    },
  },
};

const articlesRoutes = [
  {
    method: 'POST',
    path: '/articles',
    handler: articlesHandler.addOne,
    ...authOptions,
  },
  {
    method: 'PUT',
    path: '/articles/id/{articleId}',
    handler: articlesHandler.updateOne,
    ...authOptions,
  },
  {
    method: 'PUT',
    path: '/articles/{articleSlug}',
    handler: articlesHandler.updateOne,
    ...authOptions,
  },
  {
    method: 'DELETE',
    path: '/articles/{articleSlug}',
    handler: articlesHandler.deleteOne,
    ...authOptions,
  },
  {
    method: 'DELETE',
    path: '/articles/id/{articleId}',
    handler: articlesHandler.deleteOne,
    ...authOptions,
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
  {
    method: 'GET',
    path: '/articles/my',
    handler: articlesHandler.getArticlesByUser,
    ...authOptions,
  },
];

module.exports = { articlesRoutes };