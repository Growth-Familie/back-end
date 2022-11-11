const { addOneArticleTool } = require('./utils/articles/add-one-article-tool');
const { editOneArticleTool } = require('./utils/articles/edit-one-article-tool');
const { getAllArticlesTool } = require('./utils/articles/get-all-articles-tool');
const { getDetailArticleTool } = require('./utils/articles/get-detail-article-tool');
const { getArticlesByCategoryTool } = require('./utils/articles/get-articles-by-category-tool');
const { deleteOneArticleTool } = require('./utils/articles/delete-one-article-tool');
const { getArticlesByUserTool } = require('./utils/articles/get-articles-by-user-tool');

const articlesHandler = {
  addOne: (request, h) => {
    return addOneArticleTool({ request, h });
  },
  updateOne: (request, h) => {
    return editOneArticleTool({ request, h });
  },
  deleteOne: (request, h) => {
    return deleteOneArticleTool({ request, h });
  },
  getAll: (request, h) => {
    return getAllArticlesTool({ request, h });
  },
  getDetail: (request, h) => {
    return getDetailArticleTool({ request, h });
  },
  getAllByCategory: (request, h) => {
    return getArticlesByCategoryTool({ request, h });
  },
  getArticlesByUser: (request, h) => {
    return getArticlesByUserTool({ request, h });
  },
};

module.exports = { articlesHandler };