class LoginResponses {
  constructor(h) {
    this.h = h;
  }

  successfullyLoggedIn(user) {
    const { _id: id } = user;
    return this.h.response({
      status: 'success',
      error: false,
      data: {
        user: {
          id,
          name: user.name,
          username: user.username,
          email: user.email,
        },
      },
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