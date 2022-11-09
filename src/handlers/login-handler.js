const { postLoginTool } = require('./utils/login/post-login-tool');
const { getLogoutTool } = require('./utils/login/get-logout-tool');

const loginHandler = {
  postLogin: (request, h) => {
    return postLoginTool({ request, h });
  },
  getLogout: (request, h) => {
    return getLogoutTool({ request, h });
  },
};

module.exports = { loginHandler };