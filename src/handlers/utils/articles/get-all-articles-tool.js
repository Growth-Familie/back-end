const Articles = require('../../../db/model/articles');
const ArticlesResponse = require('../../responses/articles-responses');

const getAllArticlesTool = async ({ request, h }) => {
  const receiveRequest = new Articles(request);
  const response = new ArticlesResponse(h);
  const articles = await receiveRequest.getAllArticles();

  return response.allArticlesFound(articles);
};

module.exports = { getAllArticlesTool };