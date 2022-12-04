class ProductsResponses {
  constructor(h) {
    this.h = h;
  }

  allProductsFound(products = []) {
    return this.h.response({
      status: 'success',
      error: false,
      data: {
        products: products.map((product) => {
          const { _id: id } = product;

          return {
            id,
            category: product.category,
            name: product.name,
            brand: product.brand,
            price: product.price,
            features: product.features,
            source: product.source,
            insertedAt: product.insertedAt,
            updatedAt: product.updatedAt,
          };
        }),
      },
    }).code(200);
  }

  productFound(product) {
    const { _id: id } = product;

    return this.h.response({
      status: 'success',
      error: false,
      data: {
        product: {
          id,
          category: product.category,
          name: product.name,
          brand: product.brand,
          price: product.price,
          features: product.features,
          source: product.source,
          insertedAt: product.insertedAt,
          updatedAt: product.updatedAt,
        },
      },
    }).code(200);
  }

  successfullyAdded(product) {
    return this.h.response({
      status: 'success',
      fail: false,
      message: `Saran produk ${product.name} berhasil ditambahkan!`,
    }).code(201);
  }

  successfullyDeleted(id) {
    return this.h.response({
      status: 'success',
      error: false,
      message: 'Saran produk berhasil dihapus!',
      data: {
        productId: id,
      },
    }).code(201);
  }

  successfullyUpdated(id) {
    return this.h.response({
      status: 'success',
      error: false,
      message: 'Saran produk berhasil diperbarui!',
      data: {
        productId: id,
      },
    }).code(201);
  }

  notFound() {
    return this.h.response({
      status: 'fail',
      error: true,
      message: 'Produk tidak ditemukan!',
    }).code(403);
  }

  serverError() {
    return this.h.response({
      status: 'fail',
      error: true,
      message: 'Server mengalami kendala',
    }).code(500);
  }

  valuesEmpty() {
    return this.h.response({
      statu: 'fail',
      error: true,
      message: 'Nilai category, name, brand, price, features, source, atau user tidak boleh kosong!',
    }).code(400);
  }
}

module.exports = ProductsResponses;