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

  async getOneArticleBySlug(slug) {
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

  async deleteOneArticleBySlug(slug) {
    const response = await this.req.mongo.db
                      .collection(COLLECTIONS.ARTICLES)
                      .deleteOne({ slug });
    return response;
  }

  async editOneArticleBySlug(slug, article) {
    const response = await this.req.mongo.db
                      .collection(COLLECTIONS.ARTICLES)
                      .updateOne({ slug }, { $set: article });
    return response;
  }
}

module.exports = Articles;