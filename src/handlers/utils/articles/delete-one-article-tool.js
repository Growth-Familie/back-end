const Articles = require('../../../db/model/articles');
const { checkIsMyArticle } = require('../../helper/articles-helper');
const ArticlesResponse = require('../../responses/articles-responses');

const deleteOneArticleTool = async ({ request, h }) => {
  const { articleId: id, articleSlug: slug } = request.params;
  const { isAuthenticated } = request.auth;
  const receiveRequest = new Articles(request);
  const response = new ArticlesResponse(h);

  if (!isAuthenticated) return response.accessDenied();

  const { _id: authId } = request.auth.credentials;

  if (slug) {
    const getArticle = await receiveRequest.getOneArticle({ slug });
    const isMyArticle = checkIsMyArticle(authId, getArticle);

    if (!isMyArticle) return response.accessDenied();

    const deletedArticle = await receiveRequest.deleteOneArticle({ slug });
    const isSuccess = deletedArticle.deletedCount === 1;

    if (isSuccess) return response.successfullyDeleted();
  }

  if (id) {
    const getArticle = await receiveRequest.getOneArticle({ id });
    const isMyArticle = checkIsMyArticle(authId, getArticle);

    if (!isMyArticle) return response.accessDenied();

    const deletedArticle = await receiveRequest.deleteOneArticle({ id });
    const isSuccess = deletedArticle.deletedCount === 1;

    if (isSuccess) return response.successfullyDeleted();
  }

  return response.notFound();
};

module.exports = { deleteOneArticleTool };