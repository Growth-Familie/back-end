/* eslint-disable indent */
const COLLECTIONS = require('../collections');

class Categories {
  constructor(request) {
    this.req = request;
  }

  async getAllCategories() {
    const response = await this.req.mongo.db
                      .collection(COLLECTIONS.CATEGORIES)
                      .find({}).toArray();
    return response;
  }
}

module.exports = Categories;