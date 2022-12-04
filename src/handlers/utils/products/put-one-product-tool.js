const Products = require('../../../db/model/products');
const Users = require('../../../db/model/users');
const ProductsResponses = require('../../responses/products-reponses');
const UsersResponses = require('../../responses/users-responses');
const {
  checkUserSchema,
  checkProductSchema,
  checkIdLength,
} = require('../../helper/products-helper');

const putOneProductTool = async ({ request, h }) => {
  const products = new Products(request);
  const users = new Users(request);
  const productsResponses = new ProductsResponses(h);
  const usersResponses = new UsersResponses(h);
  const { productId } = request.params;

  if (!checkIdLength(productId)) {
    return productsResponses.notFound();
  }

  const {
    category,
    name,
    brand,
    price,
    features,
    source,
    user,
  } = request.payload;

  const userValidate = checkUserSchema.validate(user);

  if (userValidate.error) {
    return usersResponses.userNotFound();
  }

  const { id } = user;
  const statusUser = await users.getOneUser({ id });

  if (!statusUser) {
    return usersResponses.userNotFound();
  }

  const priceToInteger = parseInt(price, 10);
  const updatedAt = new Date().toISOString();

  const editedProduct = {
    category,
    name,
    brand,
    price: priceToInteger,
    features,
    source,
    updatedAt,
  };

  const productValidate = checkProductSchema.validate(editedProduct);

  if (productValidate.error) {
    return productsResponses.valuesEmpty();
  }

  const updateProduct = await products.updateOneProduct(productId, editedProduct);
  const isSuccess = updateProduct.modifiedCount === 1;

  if (isSuccess) {
    return productsResponses.successfullyUpdated(productId);
  }

  return productsResponses.serverError();
};

module.exports = { putOneProductTool };