const Products = require('../../../db/model/products');
const ProductsResponses = require('../../responses/products-reponses');

const getAllProductsByCategoryTool = async ({ request, h }) => {
  const model = new Products(request);
  const response = new ProductsResponses(h);
  const { categoryName } = request.params;

  if (categoryName) {
    const products = await model.getAllProducts();

    const filteredProducts = products.filter((product) => {
      return product.category.toLowerCase() === categoryName.toLowerCase();
    });

    const isSuccess = filteredProducts.length > 0;

    if (isSuccess) {
      return response.allProductsFound(filteredProducts);
    }

    return response.notFound();
  }

  return response.serverError();
};

module.exports = { getAllProductsByCategoryTool };