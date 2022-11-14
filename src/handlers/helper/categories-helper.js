const checkOneCategory = async (model, categoryName) => {
  const categories = await model.getAllCategories();
  const getCategory = categories.filter((category) => {
    return category.name.toLowerCase().includes(categoryName.toLowerCase());
  });

  return getCategory;
};

module.exports = {
  checkOneCategory,
};