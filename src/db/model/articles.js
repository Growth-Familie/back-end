/* eslint-disable indent */
const COLLECTION = require('../collections');

class Articles {
  constructor(request) {
    this.req = request;
  }

  async getAllArticles() {
    const response = await this.req.mongo.db
                      .collection(COLLECTION.ARTICLES)
                      .find({}).toArray();
    return response;
  }

  async getOneArticleBySlug(slug) {
    const response = await this.req.mongo.db
                      .collection(COLLECTION.ARTICLES)
                      .findOne({ slug });
    return response;
  }

  async addOneArticle(article) {
    const response = await this.req.mongo.db
                      .collection(COLLECTION.ARTICLES)
                      .insertOne(article);
    return response;
  }

  async deleteOneArticleBySlug(slug) {
    const response = await this.req.mongo.db
                      .collection(COLLECTION.ARTICLES)
                      .deleteOne({ slug });
    return response;
  }

  async editOneArticleBySlug(slug, article) {
    const response = await this.req.mongo.db
                      .collection(COLLECTION.ARTICLES)
                      .updateOne({ slug }, { $set: article });
    return response;
  }
}

module.exports = Articles;