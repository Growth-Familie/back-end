/* eslint-disable indent */
const COLLECTIONS = require('../collections');

class Articles {
  constructor(request) {
    this.req = request;
  }

  async getAllArticles() {
    const response = await this.req.mongo.db
                      .collection(COLLECTIONS.ARTICLES)
                      .find({}).toArray();
    return response;
  }

  async getOneArticle(article) {
    const { id, slug } = article;

    if (id) {
      const { ObjectID } = this.req.mongo;
      const response = await this.req.mongo.db
                        .collection(COLLECTIONS.ARTICLES)
                        .findOne({ _id: new ObjectID(id) });
      return response;
    }

    const response = await this.req.mongo.db
                      .collection(COLLECTIONS.ARTICLES)
                      .findOne({ slug });
    return response;
  }

  async addOneArticle(article) {
    const response = await this.req.mongo.db
                      .collection(COLLECTIONS.ARTICLES)
                      .insertOne(article);
    return response;
  }

  async deleteOneArticle(article) {
    const { id, slug } = article;

    if (id) {
      const { ObjectID } = this.req.mongo;
      const response = await this.req.mongo.db
                        .collection(COLLECTIONS.ARTICLES)
                        .deleteOne({ _id: new ObjectID(id) });
      return response;
    }

    const response = await this.req.mongo.db
                      .collection(COLLECTIONS.ARTICLES)
                      .deleteOne({ slug });
    return response;
  }

  async editOneArticle(key, article) {
    const { id, slug } = key;

    if (id) {
      const { ObjectID } = this.req.mongo;
      const response = await this.req.mongo.db
                        .collection(COLLECTIONS.ARTICLES)
                        .updateOne({ _id: new ObjectID(id) }, { $set: article });
      return response;
    }

    const response = await this.req.mongo.db
                      .collection(COLLECTIONS.ARTICLES)
                      .updateOne({ slug }, { $set: article });
    return response;
  }
}

module.exports = Articles;