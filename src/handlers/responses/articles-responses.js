const Articles = require('../../db/model/articles');

const addArticle = async (request, h) => {
    const { title, category, from, img, body } = request.payload;

    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    if (!title) {
        const response = h.response ({
            status: 'fail',
            message: 'Gagal menambahkan artikel. Mohon isi nama artikel'
        });

        response.code(400);
        return response
    }; 

    const newArticle = { title, category, from, img, body, insertedAt, updatedAt };

    const receiveRequest =  new Articles(request);
    const receiveRequestAddOneArticle = await receiveRequest.addOneArticle(newArticle);

    const id = receiveRequestAddOneArticle.insertedId.toString();

    const isSuccess = await receiveRequest.getOneArticle( {id} );

    if(isSuccess) {
        const response = h.response ({
            status: 'success',
            message: 'Artikel berhasil ditambahkan',
            data: {
                articlesId: id,
            },
        });
        response.code(201);
        return response;
    };

    const response = h.response({
        status: 'error',
        message: 'Artikel gagal ditambahkan',
    });

    response.code(500);
    return response;

};

const getAllArticles = async (request, h) => {

    const receiveRequest =  new Articles(request);
    const receiveRequestGetAllArticles = await receiveRequest.getAllArticles();

    const response = h.response ({
        status: 'success',
        data: {
            articles: receiveRequestGetAllArticles.map((article) => {
                return {
                    id: article._id.toString(),
                    title: article.title,
                    category: article.category,
                }
            }),
        },
    });
    response.code(200);
    return response;
};

const getArticleDetailHandler = async (request, h) => {
    
    const { articleId: id } = request.params;

    const receiveRequest =  new Articles(request);

    const article = await receiveRequest.getOneArticle({ id });

    if (article !== undefined) {
        const response = h.response({
            status: 'success',
            data: {
                article: article,
            },
        });

        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Artikel tidak ditemukan',
    });
    response.code(404);
    return response;
};

const editBookByIdHandler = async (request, h) => {

    const { articleId: id } = request.params

    const { title, category, from, img, body } = request.payload;

    const updatedAt = new Date().toISOString();

    const newArticle = { title, category, from, img, body, updatedAt };

    const receiveRequest =  new Articles(request);

    const article = await receiveRequest.editOneArticle({ id }, newArticle);

    const isSuccess = article.modifiedCount === 1;

    if (isSuccess) {

        const response = h.response({
            status: 'success',
            message: 'Artikel berhasil diperbarui',
        });

        response.code(200);
        return response;
    };

    const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui Artikel. Id tidak ditemukan',
    });

    response.code(404);
    return response;
}

const deleteBookByIdHandler = async (request, h) => {

    const { articleId: id } = request.params

    const receiveRequest =  new Articles(request);

    const article = await receiveRequest.deleteOneArticle(id);

    const isSuccess = article.deletedCount === 1;

    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Artikel berhasil dihapus',
        });

        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Artikel gagal dihapus. Id tidak ditemukan',
    });

    response.code(404);
    return response;
};

const getArticleByCategory = async (request, h) => {

    const { category } = request.params;

    const receiveRequest =  new Articles(request);

    const articles = await receiveRequest.getAllArticles();
    const filterArticles = articles.filter((article) => article.category.toLowerCase().includes(category.toLowerCase()))
    const isSuccess = filterArticles.length > 0;

    if(isSuccess) {
        const response = h.response({
            status: 'success',
            data: {
                articles: filterArticles
            }
        });

        response.code(200);
        return response;
    }
}

module.exports = { addArticle, getAllArticles, getArticleDetailHandler, editBookByIdHandler, deleteBookByIdHandler, getArticleByCategory }