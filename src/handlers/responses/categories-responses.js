class CategoriesResponses {
  constructor(h) {
    this.h = h;
  }

  allCategoriesFound(categories = []) {
    return this.h.response({
      status: 'success',
      error: false,
      data: {
        categories,
      },
    }).code(200);
  }
}

module.exports = CategoriesResponses;