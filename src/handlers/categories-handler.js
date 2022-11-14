const { getAllCategoriesTool } = require('./utils/categories/get-all-categories-tool');
const { getDetailCategoryTool } = require('./utils/categories/get-detail-category-tool');

const categoriesHandler = {
  getAll: (request, h) => {
    return getAllCategoriesTool({ request, h });
  },
  getDetail: (request, h) => {
    return getDetailCategoryTool({ request, h });
  },
};

module.exports = { categoriesHandler };