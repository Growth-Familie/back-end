const Articles = require('../../../db/model/articles');
const ArticlesResponses = require('../../responses/articles-responses');

const getArticlesByUserTool = async ({ request, h }) => {
  const { isAuthenticated } = request.auth;
  const model = new Articles(request);
  const response = new ArticlesResponses(h);

  if (!isAuthenticated) return response.accessDenied();

  const { _id: authId } = request.auth.credentials;
  const articles = await model.getArticlesByUserId(authId.toString());
  const isSuccess = articles.length > 0;

  if (isSuccess) return response.allArticlesFound(articles);

  return response.notFound();
};

module.exports = { getArticlesByUserTool };