const LoginResponses = require('../../responses/login-responses');

const getLogoutTool = async ({ request, h }) => {
  const response = new LoginResponses(h);

  // clear cookie
  request.cookieAuth.clear();

  return response.successfullyLoggedOut();
};

module.exports = { getLogoutTool };