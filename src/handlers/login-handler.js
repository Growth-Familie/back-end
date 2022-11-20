const { postLoginTool } = require('./utils/login/post-login-tool');

const loginHandler = {
  postLogin: (request, h) => {
    return postLoginTool({ request, h });
  },
};

module.exports = { loginHandler };