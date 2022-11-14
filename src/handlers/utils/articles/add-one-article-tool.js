const Articles = require('../../../db/model/articles');
const ArticlesResponses = require('../../responses/articles-responses');
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
  } = request.payload;

  const receiveRequest = new Articles(request);
  const response = new ArticlesResponses(h);
  const { isAuthenticated } = request.auth;

  if (!isAuthenticated) return response.accessDenied();

  if (checkEmptyValues(request.payload)) return response.valueIsEmpty();

  const { _id: authId, username } = request.auth.credentials;
  const from = checkArticleSource(payloadFrom, username);
  const addedBy = authId;
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