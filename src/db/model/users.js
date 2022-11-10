/* eslint-disable indent */
const COLLECTIONS = require('../collections');

class Users {
  constructor(request) {
    this.req = request;
  }

  async getAllUsers() {
    const response = await this.req.mongo.db
                      .collection(COLLECTIONS.USERS)
                      .find({}).toArray();
    return response;
  }

  async getOneUser(user) {
    const { id, username, email } = user;

    if (id) {
      const { ObjectID } = this.req.mongo;
      const response = await this.req.mongo.db
                        .collection(COLLECTIONS.USERS)
                        .findOne({ _id: new ObjectID(id) });
      return response;
    }

    if (username) {
      const response = await this.req.mongo.db
                        .collection(COLLECTIONS.USERS)
                        .findOne({ username });
      return response;
    }

    // by email
    const response = await this.req.mongo.db
                      .collection(COLLECTIONS.USERS)
                      .findOne({ email });
    return response;
  }

  async addOneUser(user) {
    const response = await this.req.mongo.db
                      .collection(COLLECTIONS.USERS)
                      .insertOne(user);
    return response;
  }

  async editOneUser(username, user) {
    const response = await this.req.mongo.db
                      .collection(COLLECTIONS.USERS)
                      .updateOne({ username }, { $set: user });
    return response;
  }

  async deleteOneUser(username) {
    const response = await this.req.mongo.db
                      .collection(COLLECTIONS.USERS)
                      .deleteOne({ username });
    return response;
  }
}

module.exports = Users;