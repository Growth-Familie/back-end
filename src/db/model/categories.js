const COLLECTIONS = require('../collections');

class Categories {
  constructor(request) {
    this.collection = request.mongo.db
      .collection(COLLECTIONS.CATEGORIES);
  }

  async getAllCategories() {
    const response = await this.collection.find({}).toArray();
    return response;
  }
}

module.exports = Categories;