/* eslint-disable no-unused-vars */
const Token = require('../db/model/token');
const HapiAuthBearerPlugin = require('hapi-auth-bearer-token');

const AuthBearer = {
  NAME: 'simple',
  SCHEME: 'bearer-access-token',
  OPTIONS: {
    validate: async (request, token, h) => {
      const objectToken = new Token(request);
      const tokenFromDB = await objectToken.getOneToken(token);

      if (!tokenFromDB) return { isValid: false };

      const isValid = token === tokenFromDB.token;
      const credentials = { token };

      return { isValid, credentials };
    },
  },
};

module.exports = {
  HapiAuthBearerPlugin,
  AuthBearer,
};