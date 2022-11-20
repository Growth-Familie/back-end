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

  passwordLengthDoesNotMatch() {
    return this.h.response({
      status: 'fail',
      error: true,
      message: 'Password harus memiliki panjang minimal 8 karakter',
    }).code(400);
  }

  serverError() {
    return this.h.response({
      status: 'fail',
      error: true,
      message: 'Server mengalami kendala',
    }).code(500);
  }

  userFound(user) {
    const { _id: id } = user;
    return this.h.response({
      status: 'success',
      error: false,
      data: {
        user: {
          id,
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

  userNotFound() {
    return this.h.response({
      status: 'fail',
      error: true,
      message: 'User tidak ditemukan',
    }).code(404);
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