/* eslint-disable no-underscore-dangle */
class UsersResponses {
  constructor(h) {
    this.h = h;
  }

  whitespacesFound() {
    const response = this.h.response({
      status: 'fail',
      error: true,
      message: 'Username atau password tidak boleh memiliki white spaces',
    });

    response.code(400);
    return response;
  }

  hasBeenUsed(user) {
    const response = this.h.response({
      status: 'fail',
      error: true,
      message: `${user} telah digunakan`,
    });

    response.code(400);
    return response;
  }

  nameLengthDoesNotMatch() {
    const response = this.h.response({
      status: 'error',
      error: true,
      message: 'Name harus memiliki panjang minimal 2 karakter',
    });

    response.code(400);
    return response;
  }

  usernameLengthDoesNotMatch() {
    const response = this.h.response({
      status: 'fail',
      error: true,
      message: 'Username harus memiliki panjang minimal 5 karakter',
    });

    response.code(400);
    return response;
  }

  passwordLengthDoesNotMatch() {
    const response = this.h.response({
      status: 'fail',
      error: true,
      message: 'Password harus memiliki panjang minimal 8 karakter',
    });

    response.code(400);
    return response;
  }

  successfullyAdded(id) {
    const response = this.h.response({
      status: 'success',
      error: false,
      data: {
        userId: id,
      },
    });

    response.code(200);
    return response;
  }

  serverError() {
    const response = this.h.response({
      status: 'fail',
      error: true,
      message: 'Server mengalami kendala',
    });

    response.code(500);
    return response;
  }

  allUsersFound(users = []) {
    const response = this.h.response({
      status: 'success',
      error: false,
      data: {
        users: users.map((user) => {
          return {
            id: user._id.toString(),
            level: user.level,
            name: user.name,
            username: user.username,
            email: user.email,
          };
        }),
      },
    });

    response.code(200);
    return response;
  }

  valueIsEmpty() {
    const response = this.h.response({
      status: 'fail',
      error: true,
      message: 'Nilai name, username, email, dan password harus diisi',
    });

    response.code(400);
    return response;
  }

  emailNotValid() {
    const response = this.h.response({
      status: 'fail',
      error: true,
      message: 'Nilai email tidak valid',
    });

    response.code(400);
    return response;
  }

  accessDenied() {
    const response = this.h.response({
      status: 'fail',
      error: 'false',
      message: 'Akses ditolak',
    });

    response.code(403);
    return response;
  }
}

module.exports = UsersResponses;