class LoginResponses {
  constructor(h) {
    this.h = h;
  }

  successfullyLoggedIn(name) {
    return this.h.response({
      status: 'success',
      error: false,
      message: `${name} berhasil login!`,
    }).code(200);
  }

  successfullyLoggedOut() {
    return this.h.response({
      status: 'success',
      error: false,
      message: 'Berhasil logout',
    }).code(200);
  }

  loginFailed() {
    return this.h.response({
      status: 'fail',
      error: true,
      message: 'Gagal login, username atau password tidak terdaftar',
    }).code(400);
  }
}

module.exports = LoginResponses;