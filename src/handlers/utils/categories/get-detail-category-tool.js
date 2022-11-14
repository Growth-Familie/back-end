const Categories = require('../../../db/model/categories');
const CategoriesResponses = require('../../responses/categories-responses');
const { checkOneCategory } = require('../../helper/categories-helper');

const getDetailCategoryTool = async ({ request, h }) => {
  const { categoryName } = request.params;
  const model = new Categories(request);
  const response = new CategoriesResponses(h);

  const category = await checkOneCategory(model, categoryName);

  if (category) return response.categoryFound(category);

  return response.notFound();
};

module.exports = { getDetailCategoryTool };