class LoginResponses {
  constructor(h) {
    this.h = h;
  }

  successfullyLoggedIn(name) {
    const response = this.h.response({
      status: 'success',
      error: false,
      message: `${name} berhasil login!`,
    });

    response.code(200);
    return response;
  }

  successfullyLoggedOut() {
    const response = this.h.response({
      status: 'success',
      error: false,
      message: 'Berhasil logout',
    });

    response.code(200);
    return response;
  }

  loginFailed() {
    const response = this.h.response({
      status: 'fail',
      error: true,
      message: 'Gagal login, username atau password tidak terdaftar',
    });

    response.code(400);
    return response;
  }
}

module.exports = LoginResponses;