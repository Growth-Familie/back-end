const { getAllCategoriesTool } = require('./utils/categories/get-all-categories-tool');

const categoriesHandler = {
  getAll: (request, h) => {
    return getAllCategoriesTool({ request, h });
  },
};

module.exports = { categoriesHandler };