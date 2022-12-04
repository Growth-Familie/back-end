const Products = require('../../../db/model/products');
const { checkIdLength } = require('../../helper/products-helper');
const ProductsResponses = require('../../responses/products-reponses');

const deleteOneProductTool = async ({ request, h }) => {
  const model = new Products(request);
  const response = new ProductsResponses(h);
  const { productId } = request.params;

  if (!checkIdLength(productId)) {
    return response.notFound();
  }

  const deleteProduct = await model.deleteOneProduct(productId);

  if (deleteProduct.deletedCount === 1) {
    return response.successfullyDeleted(productId);
  }

  return response.serverError();
};

module.exports = { deleteOneProductTool };