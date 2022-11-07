const Hapi = require('@hapi/hapi');
const ConnectionDB = require('./db');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '5000';

const plugins = [ConnectionDB];

const init = async () => {
  const server = Hapi.server({
    host: HOST,
    port: PORT,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register(plugins);
  await server.start();
  console.log(`Server berjalan di ${server.info.uri}`);
};

init();