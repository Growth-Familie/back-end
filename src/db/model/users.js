/* eslint-disable indent */
const COLLECTIONS = require('../collections');

class Users {
  constructor(request) {
    this.req = request;
    this.collection = request.mongo.db
      .collection(COLLECTIONS.USERS);
  }

  async getAllUsers() {
    const response = await this.collection.find({}).toArray();
    return response;
  }

  async getOneUser(user) {
    const { id, username, email } = user;

    if (id) {
      const { ObjectID } = this.req.mongo;
      const response = await this.collection.findOne({ _id: new ObjectID(id) });
      return response;
    }

    if (username) {
      const response = await this.collection.findOne({ username });
      return response;
    }

    // by email
    const response = await this.collection.findOne({ email });
    return response;
  }

  async addOneUser(user) {
    const response = await this.collection.insertOne(user);
    return response;
  }

  async editOneUser(username, user) {
    const response = await this.collection.updateOne({ username }, { $set: user });
    return response;
  }

  async deleteOneUser(username) {
    const response = await this.collection.deleteOne({ username });
    return response;
  }
}

module.exports = Users;