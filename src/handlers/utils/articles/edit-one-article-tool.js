const Articles = require('../../../db/model/articles');
const ArticlesResponse = require('../../responses/articles-responses');
const {
  checkIsMyArticle,
  checkArticleSource,
  checkEmptyValues,
} = require('../../helper/articles-helper');

const editOneArticleTool = async ({ request, h }) => {
  const { articleId: id, articleSlug: slug } = request.params;
  const { isAuthenticated } = request.auth;
  const receiveRequest = new Articles(request);
  const response = new ArticlesResponse(h);

  if (!isAuthenticated) return response.accessDenied();

  const { _id: authId, username } = request.auth.credentials;

  const {
    title,
    category,
    img,
    body,
    from: payloadFrom,
  } = request.payload;

  const from = checkArticleSource(payloadFrom, username);
  const updatedAt = new Date().toISOString();

  const newArticle = {
    title,
    category,
    from,
    img,
    body,
    updatedAt,
  };

  if (checkEmptyValues(newArticle)) return response.valueIsEmpty();

  if (id) {
    const getArticle = await receiveRequest.getOneArticle({ id });
    const isMyArticle = checkIsMyArticle(authId, getArticle);

    if (!isMyArticle) return response.accessDenied();

    const article = await receiveRequest.editOneArticle({ id }, newArticle);
    const isSuccess = article.modifiedCount === 1;

    if (isSuccess) return response.successfullyUpdated();
  }

  if (slug) {
    const getArticle = await receiveRequest.getOneArticle({ slug });
    const isMyArticle = checkIsMyArticle(authId, getArticle);

    if (!isMyArticle) return response.accessDenied();

    const article = await receiveRequest.editOneArticle({ slug }, newArticle);
    const isSuccess = article.modifiedCount === 1;

    if (isSuccess) return response.successfullyUpdated();
  }

  return response.notFound();
};

module.exports = { editOneArticleTool };