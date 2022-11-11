const Categories = require('../../../db/model/categories');
const CategoriesResponses = require('../../responses/categories-responses');

const getAllCategoriesTool = async ({ request, h }) => {
  const model = new Categories(request);
  const response = new CategoriesResponses(h);

  const categories = await model.getAllCategories();
  const isSuccess = categories.length > 0;

  if (isSuccess) return response.allCategoriesFound(categories);

  return response.allCategoriesFound();
};

module.exports = { getAllCategoriesTool };