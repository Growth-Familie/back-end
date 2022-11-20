const Articles = require('../../../db/model/articles');
const ArticlesResponse = require('../../responses/articles-responses');
const {
  checkArticleSource,
  checkEmptyValues,
  checkIdLength,
} = require('../../helper/articles-helper');
const Users = require('../../../db/model/users');
const UsersResponses = require('../../responses/users-responses');

const editOneArticleTool = async ({ request, h }) => {
  const { articleId: id, articleSlug: slug } = request.params;
  const receiveRequest = new Articles(request);
  const response = new ArticlesResponse(h);

  const {
    title,
    category,
    img,
    body,
    from: payloadFrom,
    user,
  } = request.payload;

  if (checkEmptyValues(request.payload)) return response.valueIsEmpty();

  const { username } = user;
  const users = new Users(request);
  const usersResponses = new UsersResponses(h);

  const getUser = await users.getOneUser({ username });

  if (!getUser) return usersResponses.userNotFound();

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

  if (id) {
    if (!checkIdLength(id)) return response.notFound();

    const article = await receiveRequest.editOneArticle({ id }, newArticle);
    const isSuccess = article.modifiedCount === 1;

    if (isSuccess) return response.successfullyUpdated();
  }

  if (slug) {
    const article = await receiveRequest.editOneArticle({ slug }, newArticle);
    const isSuccess = article.modifiedCount === 1;

    if (isSuccess) return response.successfullyUpdated();
  }

  return response.notFound();
};

module.exports = { editOneArticleTool };