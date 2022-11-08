const Hapi = require('@hapi/hapi');
const ConnectionDB = require('./db');
const { routes } = require('./routes/routes');
const {
  HapiAuthBearerPlugin,
  AuthBearer,
} = require('./auth/auth-bearer');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '5000';

const plugins = [ConnectionDB, HapiAuthBearerPlugin];

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

  server.auth.strategy(AuthBearer.NAME, AuthBearer.SCHEME, AuthBearer.OPTIONS);
  server.auth.default(AuthBearer.NAME);

  server.route(routes);

  await server.start();
  console.log(`Server berjalan di ${server.info.uri}`);
};

init();