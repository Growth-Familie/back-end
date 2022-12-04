const Products = require('../../../db/model/products');
const ProductsResponses = require('../../responses/products-reponses');
const Users = require('../../../db/model/users');
const UsersResponses = require('../../responses/users-responses');
const {
  checkProductSchema,
  checkUserSchema,
} = require('../../helper/products-helper');

const postOneProductTool = async ({ request, h }) => {
  const products = new Products(request);
  const productsResponses = new ProductsResponses(h);

  const {
    category,
    name,
    brand,
    price,
    features,
    source,
    user,
  } = request.payload;

  const users = new Users(request);
  const usersResponses = new UsersResponses(h);
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
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newProduct = {
    category,
    name,
    brand,
    price: priceToInteger,
    features,
    source,
    insertedAt,
    updatedAt,
  };

  const productValidate = checkProductSchema.validate(newProduct);

  if (productValidate.error) {
    return productsResponses.valuesEmpty();
  }

  await products.addOneProduct(newProduct);

  return productsResponses.successfullyAdded(newProduct);
};

module.exports = { postOneProductTool };