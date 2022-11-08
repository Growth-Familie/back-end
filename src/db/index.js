require('dotenv').config();
const HapiMongodb = require('hapi-mongodb');

const { MONGODB_URL } = process.env;

const ConnectionDB = {
  plugin: HapiMongodb,
  options: {
    url: MONGODB_URL,
    settings: {
      maxPoolSize: 10,
      useUnifiedTopology: true,
    },
    decorate: true,
  },
};

module.exports = ConnectionDB;