const { getAllProductsTool } = require('./utils/products/get-all-products-tool');
const { getDetailProductTool } = require('./utils/products/get-detail-product-tool');
const { postOneProductTool } = require('./utils/products/post-one-product-tool');
const { deleteOneProductTool } = require('./utils/products/delete-one-product-tool');
const {
  getAllProductsByCategoryTool,
} = require('./utils/products/get-all-products-by-category-tool');
const { putOneProductTool } = require('./utils/products/put-one-product-tool');

const productsHandler = {
  addOne: (request, h) => postOneProductTool({ request, h }),
  updateOne: (request, h) => putOneProductTool({ request, h }),
  deleteOne: (request, h) => deleteOneProductTool({ request, h }),
  getDetail: (request, h) => getDetailProductTool({ request, h }),
  getAll: (request, h) => getAllProductsTool({ request, h }),
  getAllByCategory: (request, h) => getAllProductsByCategoryTool({ request, h }),
};

module.exports = productsHandler;