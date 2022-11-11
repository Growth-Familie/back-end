const COLLECTIONS = require('../collections');

class Token {
  constructor(request) {
    this.collection = request.mongo.db
      .collection(COLLECTIONS.TOKEN);
  }

  async getOneToken(token) {
    const response = await this.collection.findOne({ token });
    return response;
  }
}

module.exports = Token;