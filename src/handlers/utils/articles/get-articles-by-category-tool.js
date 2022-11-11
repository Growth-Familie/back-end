const Articles = require('../../../db/model/articles');
const ArticlesResponses = require('../../responses/articles-responses');

const getArticlesByCategoryTool = async ({ request, h }) => {
  const { categoryName } = request.params;
  const receiveRequest = new Articles(request);
  const response = new ArticlesResponses(h);

  const articles = await receiveRequest.getAllArticles();
  const filterArticles = articles.filter((article) => {
    return article.category.toLowerCase().includes(categoryName.toLowerCase());
  });

  const isSuccess = filterArticles.length > 0;

  if (isSuccess) return response.allArticlesFound(filterArticles);

  return response.notFound();
};

module.exports = { getArticlesByCategoryTool };