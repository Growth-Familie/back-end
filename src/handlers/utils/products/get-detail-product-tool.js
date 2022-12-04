const Products = require('../../../db/model/products');
const ProductsResponses = require('../../responses/products-reponses');
const { checkIdLength } = require('../../helper/products-helper');

const getDetailProductTool = async ({ request, h }) => {
  const model = new Products(request);
  const response = new ProductsResponses(h);
  const { productId } = request.params;

  if (checkIdLength(productId)) {
    const product = await model.getDetailProduct(productId);

    if (product) {
      return response.productFound(product);
    }

    return response.notFound();
  }

  return response.notFound();
};

module.exports = { getDetailProductTool };