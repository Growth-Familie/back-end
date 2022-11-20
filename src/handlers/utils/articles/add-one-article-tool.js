const Users = require('../../../db/model/users');
const Articles = require('../../../db/model/articles');
const ArticlesResponses = require('../../responses/articles-responses');
const UsersResponses = require('../../responses/users-responses');
const {
  checkEmptyValues,
  createSlug,
  checkArticleSource,
  createOverview,
} = require('../../helper/articles-helper');
const slugify = require('slugify');

const slugifyOptions = {
  remove: /[*+~.,%^`;$(){}'><"!:@?]/g,
  replacement: '-',
  lower: true,
};

const addOneArticleTool = async ({ request, h }) => {
  const {
    title,
    category,
    img,
    body,
    from: payloadFrom,
    user,
  } = request.payload;

  const receiveRequest = new Articles(request);
  const response = new ArticlesResponses(h);

  if (!user) return response.valueIsEmpty();

  if (checkEmptyValues(request.payload)) return response.valueIsEmpty();

  const { username } = user;

  const users = new Users(request);
  const usersResponses = new UsersResponses(h);
  const statusUser = await users.getOneUser({ username });

  if (!statusUser) return usersResponses.userNotFound();

  const { _id: userId } = statusUser;

  const from = checkArticleSource(payloadFrom, username);
  const addedBy = userId;
  const overview = createOverview(body);
  const slug = await createSlug(receiveRequest, slugify(title, slugifyOptions));

  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newArticle = {
    title,
    slug,
    category,
    from,
    img,
    overview,
    body,
    addedBy,
    insertedAt,
    updatedAt,
  };

  const receiveRequestAddOneArticle = await receiveRequest.addOneArticle(newArticle);
  const id = receiveRequestAddOneArticle.insertedId.toString();
  const isSuccess = await receiveRequest.getOneArticle({ id });

  if (isSuccess) return response.successfullyAdded(id);

  return response.serverError();
};

module.exports = { addOneArticleTool };