const { addArticle, getAllArticles, getArticleDetailHandler, editBookByIdHandler, deleteBookByIdHandler, getArticleByCategory } = require ('../../handlers/responses/articles-responses');

const articlesRoutes = [
    {
        method: 'POST',
        path: '/articles',
        handler: addArticle,
    }, 
    
    {
        method: 'GET',
        path: '/articles',
        handler: getAllArticles,
    },

    {
        method: 'GET',
        path: '/articles/{articleId}',
        handler: getArticleDetailHandler,
    },
    
    {
        method: 'PUT',
        path: '/articles/{articleId}',
        handler: editBookByIdHandler,
    },

    {
        method: 'DELETE',
        path: '/articles/{articleId}',
        handler: deleteBookByIdHandler,
    },

    {
        method: 'GET',
        path: '/articles/category/{category}',
        handler: getArticleByCategory,
    }
];

module.exports = { articlesRoutes };