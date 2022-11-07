/* eslint-disable indent */
const COLLECTION = require('../collections');

class Categories {
  constructor(request) {
    this.req = request;
  }

  async getAllCategories() {
    const response = await this.req.mongo.db
                      .collection(COLLECTION.CATEGORIES)
                      .find({}).toArray();
    return response;
  }
}

module.exports = Categories;