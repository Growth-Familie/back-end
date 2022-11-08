/* eslint-disable indent */
const COLLECTIONS = require('../collections');

class Token {
  constructor(request) {
    this.req = request;
  }

  async getOneToken(token) {
    const response = await this.req.mongo.db
                      .collection(COLLECTIONS.TOKEN)
                      .findOne({ token });
    return response;
  }
}

module.exports = Token;