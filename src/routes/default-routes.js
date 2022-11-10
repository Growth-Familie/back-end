const defaultRoutes = [
  {
    method: 'GET',
    path: '/{any*}',
    handler: (request, h) => {
      const response = h.response({
        status: 'fail',
        error: true,
        message: 'Url tidak lengkap atau tidak tersedia',
      });
      response.code(400);
      return response;
    },
    options: {
      auth: false,
    },
  },
  {
    method: 'DELETE',
    path: '/{any*}',
    handler: (request, h) => {
      const response = h.response({
        status: 'fail',
        error: true,
        message: 'Url tidak lengkap atau tidak tersedia',
      });
      response.code(400);
      return response;
    },
    options: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/{any*}',
    handler: (request, h) => {
      const response = h.response({
        status: 'fail',
        error: true,
        message: 'Url tidak lengkap atau tidak tersedia',
      });
      response.code(400);
      return response;
    },
    options: {
      auth: false,
    },
  },
  {
    method: 'PUT',
    path: '/{any*}',
    handler: (request, h) => {
      const response = h.response({
        status: 'fail',
        error: true,
        message: 'Url tidak lengkap atau tidak tersedia',
      });
      response.code(400);
      return response;
    },
    options: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return h.redirect('/articles');
    },
    options: {
      auth: false,
    },
  },
];

module.exports = { defaultRoutes };