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

  async editOneUserById(id, user) {
    const { ObjectID } = this.req.mongo;
    const response = await this.req.mongo.db
                      .collection(COLLECTIONS.USERS)
                      .updateOne({ _id: new ObjectID(id) }, { $set: user });
    return response;
  }

  async deleteOneUserById(id) {
    const { ObjectID } = this.req.mongo;
    const response = await this.req.mongo.db
                      .collection(COLLECTIONS.USERS)
                      .deleteOne({ _id: new ObjectID(id) });
    return response;
  }
}

module.exports = Users;