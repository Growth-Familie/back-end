const COLLECTIONS = require('../collections');

class Articles {
  constructor(request) {
    this.req = request;
    this.collection = request.mongo.db
      .collection(COLLECTIONS.ARTICLES);
  }

  async getAllArticles() {
    const response = await this.collection.find({}).sort({"insertedAt": -1}).toArray();
    return response;
  }

  async getArticlesByUserId(id) {
    const { ObjectID } = this.req.mongo;
    const response = await this.collection
      .find({ addedBy: new ObjectID(id) }).toArray();
    return response;
  }

  async getOneArticle(article) {
    const { id, slug } = article;

    if (id) {
      const { ObjectID } = this.req.mongo;
      const response = await this.collection
        .findOne({ _id: new ObjectID(id) });
      return response;
    }

    const response = await this.collection.findOne({ slug });
    return response;
  }

  async addOneArticle(article) {
    const response = await this.collection.insertOne(article);
    return response;
  }

  async deleteOneArticle(article) {
    const { id, slug } = article;

    if (id) {
      const { ObjectID } = this.req.mongo;
      const response = await this.collection
        .deleteOne({ _id: new ObjectID(id) });
      return response;
    }

    const response = await this.collection.deleteOne({ slug });
    return response;
  }

  async editOneArticle(key, article) {
    const { id, slug } = key;

    if (id) {
      const { ObjectID } = this.req.mongo;
      const response = await this.collection
        .updateOne({ _id: new ObjectID(id) }, { $set: article });
      return response;
    }

    const response = await this.collection
      .updateOne({ slug }, { $set: article });
    return response;
  }
}

module.exports = Articles;