const COLLECTIONS = require('../collections');

class Products {
  constructor(request) {
    this.req = request;
    this.collection = request.mongo.db
      .collection(COLLECTIONS.PRODUCTS);
  }

  async getAllProducts() {
    const descending = -1;
    const updatedAt = descending;
    const response = await this.collection.find({}).sort({ updatedAt }).toArray();
    return response;
  }

  async getDetailProduct(id) {
    const { ObjectID } = this.req.mongo;

    const response = await this.collection.findOne({ _id: new ObjectID(id) });
    return response;
  }

  async addOneProduct(product) {
    const response = await this.collection.insertOne(product);
    return response;
  }

  async updateOneProduct(id, product) {
    const { ObjectID } = this.req.mongo;

    const response = await this.collection
      .updateOne({ _id: new ObjectID(id) }, { $set: product });
    return response;
  }

  async deleteOneProduct(id) {
    const { ObjectID } = this.req.mongo;

    const response = await this.collection.deleteOne({ _id: new ObjectID(id) });
    return response;
  }
}

module.exports = Products;