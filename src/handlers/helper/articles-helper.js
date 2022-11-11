const { customAlphabet } = require('nanoid');

const clearHtmlTags = (str) => {
  if (!str) return str;
  return str.replace(/(<([^>]+)>)/ig, '');
};

const createOverview = (body) => {
  const clearBody = clearHtmlTags(body);
  const subsChar = clearBody.substr(0, 148);
  const sliceLastThreeChars = `${subsChar.slice(0, -1)}...`;
  return sliceLastThreeChars;
};

const checkEmptyValues = (payload) => {
  const {
    title,
    category,
    img,
    body,
  } = payload;

  if (!title || !category) return true;
  return (!img || !body);
};

const createSlug = async (model, slug) => {
  const checkSlug = await model.getOneArticle({ slug });
  const nanoid = customAlphabet('123456890', 10);
  const randomForSlug = nanoid();

  if (checkSlug) return `${slug}-${randomForSlug}`;

  return slug;
};

const checkArticleSource = (source, authUsername) => {
  if (!source) return authUsername;
  return source;
};

const checkIsMyArticle = (userId, article) => {
  if (!article) return false;
  return userId.toString() === article.addedBy.toString();
};

module.exports = {
  checkEmptyValues,
  createSlug,
  createOverview,
  checkArticleSource,
  checkIsMyArticle,
};