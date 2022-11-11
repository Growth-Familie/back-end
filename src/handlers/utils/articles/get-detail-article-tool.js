const Articles = require('../../../db/model/articles');
const ArticlesResponses = require('../../responses/articles-responses');

const getDetailArticleTool = async ({ request, h }) => {
  const { articleId: id, articleSlug: slug } = request.params;

  const receiveRequest = new Articles(request);
  const response = new ArticlesResponses(h);

  if (id) {
    const article = await receiveRequest.getOneArticle({ id });
    if (article) return response.articleFound(article);
  }

  if (slug) {
    const article = await receiveRequest.getOneArticle({ slug });
    if (article) return response.articleFound(article);
  }

  return response.notFound();
};

module.exports = { getDetailArticleTool };