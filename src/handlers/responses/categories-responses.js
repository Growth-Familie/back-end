class CategoriesResponses {
  constructor(h) {
    this.h = h;
  }

  allCategoriesFound(categories = []) {
    return this.h.response({
      status: 'success',
      error: false,
      data: {
        categories: categories.map((category) => {
          const { _id: id, name } = category;

          return {
            id,
            name,
          };
        }),
      },
    }).code(200);
  }

  categoryFound(category) {
    const { _id: id } = category;
    return this.h.response({
      status: 'success',
      error: false,
      data: {
        category: {
          id,
          name: category.name,
          needs: category.needs,
        },
      },
    }).code(200);
  }

  notFound() {
    return this.h.response({
      status: 'fail',
      error: true,
      message: 'Kategori tidak ditemukan',
    }).code(404);
  }
}

module.exports = CategoriesResponses;