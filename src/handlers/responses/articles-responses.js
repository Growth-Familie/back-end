class ArticlesResponses {
  constructor(h) {
    this.h = h;
  }

  valueIsEmpty() {
    return this.h.response({
      status: 'fail',
      error: true,
      message: 'Nilai title, category, img, body, dan user tidak boleh kosong',
    }).code(400);
  }

  successfullyAdded(id) {
    return this.h.response({
      status: 'success',
      error: false,
      data: {
        articleId: id,
      },
    }).code(201);
  }

  serverError() {
    return this.h.response({
      status: 'fail',
      error: true,
      message: 'Server mengalami kendala',
    }).code(500);
  }

  allArticlesFound(articles = []) {
    return this.h.response({
      status: 'success',
      error: false,
      data: {
        articles: articles.map((article) => {
          const { _id: id } = article;
          return {
            id,
            title: article.title,
            slug: article.slug,
            category: article.category,
            img: article.img,
            from: article.from,
            overview: article.overview,
          };
        }),
      },
    }).code(200);
  }

  articleFound(article) {
    const { _id: id } = article;
    return this.h.response({
      status: 'success',
      error: false,
      data: {
        article: {
          id,
          title: article.title,
          slug: article.slug,
          category: article.category,
          from: article.from,
          img: article.img,
          body: article.body,
          addedBy: article.addedBy,
          updatedAt: article.updatedAt,
        },
      },
    }).code(200);
  }

  notFound() {
    return this.h.response({
      statu: 'fail',
      error: true,
      message: 'Artikel tidak ditemukan',
    }).code(404);
  }

  successfullyUpdated() {
    return this.h.response({
      status: 'success',
      error: false,
      message: 'Artikel berhasil diperbarui',
    }).code(200);
  }

  successfullyDeleted() {
    return this.h.response({
      status: 'success',
      error: false,
      message: 'Artikel berhasil dihapus',
    }).code(200);
  }
}

module.exports = ArticlesResponses;