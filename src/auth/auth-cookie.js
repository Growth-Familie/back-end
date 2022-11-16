require('dotenv').config();
const HapiCookiePlugin = require('@hapi/cookie');
const Users = require('../db/model/users');

const {
  COOKIE_NAME,
  COOKIE_PASSWORD,
} = process.env;

const A_DAY_IN_MILISECONDS = 86400000;

const AuthCookie = {
  NAME: 'session',
  SCHEME: 'cookie',
  OPTIONS: {
    cookie: {
      name: COOKIE_NAME,
      password: COOKIE_PASSWORD,
      ttl: A_DAY_IN_MILISECONDS,
    },
    keepAlive: true,
    validate: async (request, session) => {
      const model = new Users(request);
      const { id } = session;
      const account = await model.getOneUser({ id });

      if (!account) return { isValid: false };

      return { isValid: true, credentials: account };
    },
  },
};

module.exports = {
  HapiCookiePlugin,
  AuthCookie,
};