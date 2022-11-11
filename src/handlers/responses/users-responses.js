/* eslint-disable no-underscore-dangle */
class UsersResponses {
  constructor(h) {
    this.h = h;
  }

  whitespacesFound() {
    return this.h.response({
      status: 'fail',
      error: true,
      message: 'Username atau password tidak boleh memiliki white spaces',
    }).code(400);
  }

  hasBeenUsed(user) {
    return this.h.response({
      status: 'fail',
      error: true,
      message: `${user} telah digunakan`,
    }).code(400);
  }

  nameLengthDoesNotMatch() {
    return this.h.response({
      status: 'error',
      error: true,
      message: 'Name harus memiliki panjang minimal 2 karakter',
    }).code(400);
  }

  usernameLengthDoesNotMatch() {
    return this.h.response({
      status: 'fail',
      error: true,
      message: 'Username harus memiliki panjang minimal 5 karakter',
    }).code(400);
  }

  passwordLengthDoesNotMatch() {
    return this.h.response({
      status: 'fail',
      error: true,
      message: 'Password harus memiliki panjang minimal 8 karakter',
    }).code(400);
  }

  successfullyAdded(id) {
    return this.h.response({
      status: 'success',
      error: false,
      data: {
        userId: id,
      },
    }).code(201);
  }

  serverError() {
    return this.h.response({
      status: 'fail',
      error: true,
      message: 'Server mengalami kendala',
    }).code(500);
  }

  allUsersFound(users = []) {
    return this.h.response({
      status: 'success',
      error: false,
      data: {
        users: users.map((user) => {
          return {
            level: user.level,
            username: user.username,
            email: user.email,
          };
        }),
      },
    }).code(200);
  }

  userFound(user) {
    return this.h.response({
      status: 'success',
      error: false,
      data: {
        user: {
          level: user.level,
          username: user.username,
          name: user.name,
          email: user.email,
        },
      },
    }).code(200);
  }

  valueIsEmpty() {
    return this.h.response({
      status: 'fail',
      error: true,
      message: 'Nilai name, username, email, dan password harus diisi',
    }).code(400);
  }

  emailNotValid() {
    return this.h.response({
      status: 'fail',
      error: true,
      message: 'Nilai email tidak valid',
    }).code(400);
  }

  accessDenied() {
    return this.h.response({
      status: 'fail',
      error: 'false',
      message: 'Akses ditolak',
    }).code(403);
  }

  userNotFound() {
    return this.h.response({
      status: 'fail',
      error: true,
      message: 'User tidak ditemukan',
    }).code(404);
  }

  userDeleted(username) {
    return this.h.response({
      status: 'success',
      error: false,
      message: `${username} berhasil dihapus`,
    }).code(200);
  }

  passwordNotValid() {
    return this.h.response({
      status: 'success',
      error: true,
      message: 'Gagal update user. Current password tidak sesuai',
    }).code(400);
  }

  successfullyUpdated(username) {
    return this.h.response({
      status: 'success',
      error: false,
      message: `Akun ${username} berhasil diperbarui`,
    }).code(201);
  }
}

module.exports = UsersResponses;