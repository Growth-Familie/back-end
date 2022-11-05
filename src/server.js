const Hapi = require('@hapi/hapi');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '5000';

console.log(HOST, PORT);

const init = async () => {
  const server = Hapi.server({
    host: HOST,
    port: PORT,
  });

  await server.start();
  console.log(`Server berjalan di ${server.info.uri}`);
};

init();