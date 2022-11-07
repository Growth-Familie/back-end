/* eslint-disable indent */
const COLLECTION = require('../collections');

class Token {
  constructor(request) {
    this.req = request;
  }

  async getOneToken(token) {
    const response = await this.req.mongo.db
                      .collection(COLLECTION.TOKEN)
                      .findOne({ token });
    return response;
  }
}

module.exports = Token;