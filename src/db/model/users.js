/* eslint-disable indent */
const COLLECTION = require('../collections');

class Users {
  constructor(request) {
    this.req = request;
  }

  async getAllUsers() {
    const response = await this.req.mongo.db
                      .collection(COLLECTION.USERS)
                      .find({}).toArray();
    return response;
  }

  async getOneUsersById(id) {
    const { ObjectID } = this.req.mongo;
    const response = await this.req.mongo.db
                      .collection(COLLECTION.USERS)
                      .findOne({ _id: new ObjectID(id) });
    return response;
  }

  async addOneUser(user) {
    const response = await this.req.mongo.db
                      .collection(COLLECTION.USERS)
                      .insertOne(user);
    return response;
  }

  async editOneUserById(id, user) {
    const { ObjectID } = this.req.mongo;
    const response = await this.req.mongo.db
                      .collection(COLLECTION.USERS)
                      .updateOne({ _id: new ObjectID(id) }, { $set: user });
    return response;
  }

  async deleteOneUserById(id) {
    const { ObjectID } = this.req.mongo;
    const response = await this.req.mongo.db
                      .collection(COLLECTION.USERS)
                      .deleteOne({ _id: new ObjectID(id) });
    return response;
  }
}

module.exports = Users;