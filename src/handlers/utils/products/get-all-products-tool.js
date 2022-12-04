const Products = require('../../../db/model/products');
const ProductsResponses = require('../../responses/products-reponses');

const getAllProductsTool = async ({ request, h }) => {
  const model = new Products(request);
  const response = new ProductsResponses(h);

  const products = await model.getAllProducts();
  const isSuccess = products.length > 0;

  if (isSuccess) return response.allProductsFound(products);

  return response.allProductsFound();
};

module.exports = { getAllProductsTool };