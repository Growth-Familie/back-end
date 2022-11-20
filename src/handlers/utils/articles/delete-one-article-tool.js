const Articles = require('../../../db/model/articles');
const { checkIdLength } = require('../../helper/articles-helper');
const ArticlesResponse = require('../../responses/articles-responses');

const deleteOneArticleTool = async ({ request, h }) => {
  const { articleId: id, articleSlug: slug } = request.params;
  const receiveRequest = new Articles(request);
  const response = new ArticlesResponse(h);

  if (slug) {
    const deletedArticle = await receiveRequest.deleteOneArticle({ slug });
    const isSuccess = deletedArticle.deletedCount === 1;

    if (isSuccess) return response.successfullyDeleted();
  }

  if (id) {
    if (!checkIdLength(id)) return response.notFound();

    const deletedArticle = await receiveRequest.deleteOneArticle({ id });
    const isSuccess = deletedArticle.deletedCount === 1;

    if (isSuccess) return response.successfullyDeleted();
  }

  return response.notFound();
};

module.exports = { deleteOneArticleTool };