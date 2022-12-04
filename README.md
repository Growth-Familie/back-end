# API GROWTH FAMILIE
Base url: https://growfie-api.cyclic.app.
<br>
Semua request memerlukan autentikasi berupa bearer token. Simpan bearer token tersebut dalam headers seperti berikut:

```
headers: {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
}
```

Ganti ***\<TOKEN\>*** dengan token yang telah disediakan oleh tim Back-End.

###### DAFTAR ISI
+ [RUTE-RUTE UNTUK ADMIN](#rute-rute-untuk-admin)
    + [METHOD: POST](#method-post)
        + [Mengirimkan Data Pengguna untuk Login](#login)
    + [METHOD: PUT](#method-put)
        + [Memperbarui Akun dengan Username](#usersusername)
    + [METHOD: GET](#method-get)
        + [Melihat Detail Akun dengan Username](#usersusername-1)
+ [RUTE UNTUK KATEGORI](#rute-untuk-kategori)
    + [METHOD: GET](#method-get-1)
        + [Mendapatkan Semua Daftar Kategori yang Ada](#categories)
+ [RUTE-RUTE UNTUK MENGELOLA ARTIKEL](#rute-rute-untuk-mengelola-artikel)
    + [METHOD: GET](#method-get-2)
        + [Mendapatkan Semua Artikel](#articles)
        + [Mendapatkan Semua Artikel dengan Satu Kategori Tertentu](#articlescategoryname)
        + [Melihat Detail Artikel dengan Slug](#articlesslug)
        + [Melihat Detail Artikel dengan Id](#articlesidid)
    + [METHOD: POST](#method-post-1)
        + [Menambah Artikel Baru](#articles-1)
    + [METHOD: PUT](#method-put-1)
        + [Memperbarui Artikel dengan Slug](#articlesslug-1)
        + [Memperbarui Artikel dengan Id](#articlesidid-1)
    + [METHOD: DELETE](#method-delete)
        + [Menghapus Artikel dengan Slug](#articlesslug-2)
        + [Menghapus Artikel dengan Id](#articlesidid-2)
+ [RUTE-RUTE UNTUK MENGELOLA SARAN PRODUK (BUDGETING)](#rute-rute-untuk-mengelola-saran-produk-produk)
    + [METHOD: GET](#method-get-3)
        + [Melihat Semua Saran Produk](#products)
        + [Melihat Satu Saran Produk Berdasarkan Id](#productsproductid)
        + [Melihat Semua Saran Produk Berdasarkan Satu Kategori](#productscategoryname)
    + [METHOD: DELETE](#method-delete-1)
        + [Menghapus Satu Saran Produk Berdasarkan Id](#productsproductid-1)
    + [METHOD: POST](#method-post-2)
        + [Menambah Satu Saran Produk](#products-1)
    + [METHOD: PUT](#method-put-2)
        + [Mengubah Satu Saran Produk Berdasarkan Id](#productsproductid-2)

### RUTE-RUTE UNTUK ADMIN
#### METHOD: POST
###### /login
Digunakan agar dapat mengakses *rute-rute lanjutan* dengan syarat login menggunakan akun yang telah terdaftar. Kirimkan request dengan body seperti berikut:

```
body: {
  "username": "username_akun",
  "password": "password_akun"
}
```

Ganti masing-masing *username_akun* dan *password_akun* dengan yang telah terdaftar.<br>

Jika response berstatus sukses, untuk mempermudah sistem login maka sisi Client/Front-End perlu menyimpan informasi user login tersebut dalam web storage.

#### METHOD: PUT
###### /users/:username
Ganti ***:username*** dengan nilai username yang dimiliki pada akun target. Digunakan untuk memperbarui data akun.<br>

Lakukan request dengan method put dan sertakan nilai-nilai berikut pada body, contoh:

```
body: {
  "name": "Growth Familie",
  "email": "growfie@example.com",
  "currentPassword": "password_lama",
  "newPassword": "password_baru"
}
```

PENTING! NILAI-NILAI BERIKUT WAJIB DIISI
+ *name* - nama lengkap pengguna
+ *currentPassword* - masukkan password saat ini / password lama, jika tidak sesuai maka update gagal
+ *newPassword* - masukkan password baru, pastikan tidak memiliki white space dan lebih dari 8 karakter

Untuk saat ini tidak dapat melakukan pembaruan terhadap nilai username.<br>

#### METHOD: GET
###### /users/:username
Ganti ***:username*** dengan username yang dimiliki pada akun target.<br>
Digunakan untuk melihat detail akun.

### RUTE UNTUK KATEGORI
#### METHOD: GET
###### /categories
Digunakan untuk mendapatkan semua daftar kategori yang telah tersedia dan hanya menampilkan id dan nama kategori. Adapun kategori yang tersedia adalah:
+ Kehamilan
+ Bayi
+ Balita
+ Anak-anak
+ Parenting

### RUTE-RUTE UNTUK MENGELOLA ARTIKEL
#### METHOD: GET
###### /articles
Digunakan untuk mendapatkan semua artikel yang telah tersedia. Semua artikel tersebut tersimpan dalam array. Contoh nilai yang dikembalikan adalah seperti berikut:

```
{
  "status": "success",
  "error": false,
  "data": {
  "articles": [
      {
        "id": "636e5996ba0f486fa1445322",
        "title": "Perkembangan Bayi 1 Bulan",
        "slug": "perkembangan-bayi-1-bulan",
        "category": "Bayi",
        "img": "https://lh6.googleusercontent.com/bO6teSLkqw0xlb0UqxNQ3zUnAVmp8HlBo9TxKOf4nc5hNiwpwXBijU4xuiA8fxQnSXU=w2400",
        "from": "https://www.halodoc.com/artikel/perkembangan-bayi-1-bulan",
        "overview": "Halodoc. Setelah berminggu-minggu atau berbulan-bulan menunggu, Si Kecil akhirnya berhasil terlahir ke dunia. Tidak ada kata-kata yang bisa menggam..."
      },
      {
        "id": "636e5a5fba0f486fa1445327",
        "title": "Updated: 5 Olahraga untuk Ibu Hamil",
        "slug": "5-olahraga-untuk-ibu-hamil",
        "category": "Kehamilan",
        "img": "https://lh6.googleusercontent.com/LR3IsdrZxLkDVR5a1pt2s5w6m-PPSPYCqsDayGU1BjDkZyeb0FMYEg4fM9_5TaTicVw=w2400",
        "from": "https://www.halodoc.com/artikel/5-olahraga-untuk-ibu-hamil",
        "overview": "Halodoc. “Ibu hamil juga perlu melakukan olahraga agar kesehatan tetap terjaga dengan baik. Ada berbagai jenis olahraga untuk ibu hamil, seperti be..."
      }
    ]
  }
}
```

[KEMBALI KE DAFTAR ISI](#daftar-isi)

###### /articles/category/:name
Ganti ***:name*** dengan satu nama kategori yang telah tersedia.
Digunakan untuk mendapatkan semua artikel yang memiliki nama kategori tertentu, jika berhasil maka response yang diberikan sama seperti sebelumnya.

###### /articles/:slug
Ganti ***:slug*** dengan nilai slug yang dimiliki oleh artikel target. Contoh penggunaannya:

```
/articles/6-cara-mengatasi-stres-saat-hamil
```

Contoh response yang dikembalikan jika artikel ditemukan adalah:

```
{
  "status": "success",
  "error": false,
  "data": {
    "article": {
      "id": "636e5a4dba0f486fa1445326",
      "title": "6 Cara Mengatasi Stres Saat Hamil",
      "slug": "6-cara-mengatasi-stres-saat-hamil",
      "category": "Kehamilan",
      "from": "https://www.halodoc.com/artikel/6-cara-mengatasi-stres-saat-hamil",
      "img": "https://lh6.googleusercontent.com/FtgATYHwift_8nfXyO5kYdeKq-IvItcxRaB9sZxw-bWYX6LJPPvbs9BAXR97UI0-LHk=w2400",
      "body": "<p><strong><i>Halodoc</i></strong>. Mengalami sedikit stres selama kehamilan adalah hal yang normal. Stres ringan yang terjadi beberapa kali tidak menyebabkan efek negatif pada bayi di dalam kandungan. Namun, jika stres dan cemas kamu terus alami hari demi hari selama kehamilan, mintalah bantuan dokter untuk menangani hal ini.</p><p>Melansir <i>American Pregnancy Association</i>, stres ekstrem yang berkepanjangan bisa berdampak serius. Mulai dari kadar hormon yang berfluktuasi, ketidakpastian tentang masa depan, ketidaknyamanan fisik, atau gangguan mental yang ada sebelumnya. Menemukan cara yang tepat dan sehat untuk mengatasi stres adalah hal penting untuk mengoptimalkan kesehatan calon ibu dan perkembangan bayi.</p>",
      "addedBy": "636a53cf514d3b33cc07bff3",
      "updatedAt": "2022-11-11T14:21:01.770Z"
    }
  }
}
```

Sangat disarankan untuk menggunakan slug dengan alasan lebih mudah dibaca dan dipahami oleh manusia.<br>

###### /articles/id/:id
Ganti ***:id*** dengan id yang dimiliki pada artikel target.
<br>
Meskipun tidak disarankan, kami sediakan rute untuk mendapatkan detail artikel menggunakan id. Hasil response yang didapat sama saja seperti menggunakan /articles/:slug. Contoh penggunaan:

```
/articles/id/636e5a4dba0f486fa1445326
```
[KEMBALI KE DAFTAR ISI](#daftar-isi)

Rute-rute berikut hanya dapat diakses jika telah berhasil login / membutuhkan informasi user terdaftar.

#### METHOD: POST
###### /articles
Digunakan untuk menambahkan artikel baru. Lakukan request dan simpan nilai-nilai berikut dalam body, seperti berikut ini:

```
body: {
  "title": "Perkembangan Bayi 7 Bulan",
  "category": "Bayi",
  "from": "https://www.halodoc.com/artikel/perkembangan-bayi-7-bulan",
  "img": "https://lh4.googleusercontent.com/qHV8oKhPv3zIvby_-f0l7ps7uJvlNsUfOg_rc5iefazR4SlTGUzyOyAlpk4rNknLPUE=w2400",
  "body": "<p><strong>Halodoc</strong>. Si Kecil sudah berusia genap 7 bulan! Itu artinya ia sudah melewati setengah tahun pertama hidupnya dengan baik. Ayah dan ibu tentunya sudah tidak sabar untuk mengamati perkembangan penting apalagi yang dibuat bayi di usia 7 bulan ini. Karena itu, yuk cari tahu di bawah ini.</p><h2>Bayi Sudah Bisa Merangkak</h2><p>Apakah Si Kecil sudah bisa merangkak? Pertanyaan tersebut seringkali dilontarkan oleh teman-teman atau keluarga, seolah-olah bila bayi belum bisa merangkak di usia 7 bulan itu, artinya ia mengalami keterlambatan perkembangan. Padahal, kenyataannya, rata-rata bayi mulai merangkak di antara usia 6–7 bulan. Bayi juga merangkak secara tidak terduga, sehingga banyak ahli anak, bahkan tidak menganggap kemampuan tersebut sebagai tonggak perkembangan bayi yang penting.</p>",
  "user": {
    "id": "12345",
    "username": "growfie",
    "name": "Growth Familie",
    "email": "growthfamilie@gmail.com"
  }
}
```

PENTING! NILAI-NILAI BERIKUT WAJIB DIISI
+ *title* - isikan dengan judul artikel
+ *category* - isikan dengan satu kategori yang tersedia
+ *img* - isikan dengan alamat dari gambar yang berkaitan dengan isi artikel
+ *body* - isi atau text konten beserta tag HTML pembungkus kontennya
+ *user* - data pengguna yang berhasil login, tersimpan pada sisi client dalam web storage

NILAI BERIKUT INI BERSIFAT OPTIONAL
+ *from* - jika artikel berasal dari sumber lain maka wajib menyertakan sumber asli pada bagian ini, tapi jika artikel adalah original bisa dikosongkan saja karena akan terisi otomatis dengan nilai *username* yang melakukan request-nya.<br>

[KEMBALI KE DAFTAR ISI](#daftar-isi)

#### METHOD: PUT
###### /articles/:slug
Ganti ***:slug*** dengan slug yang dimiliki pada artikel target. Digunakan untuk memperbarui satu artikel yang diperoleh melalui slug. Artikel hanya dapat diperbarui oleh akun yang menambahkan artikel tersebut.
<br>
<br>
Lakukan request dengan menyertakan nilai-nilai pada body, contoh:

```
{
  "title": "Update: Perkembangan Bayi 7 Bulan",
  "category": "Bayi",
  "from": "https://www.halodoc.com/artikel/perkembangan-bayi-7-bulan",
  "img": "https://lh4.googleusercontent.com/qHV8oKhPv3zIvby_-f0l7ps7uJvlNsUfOg_rc5iefazR4SlTGUzyOyAlpk4rNknLPUE=w2400",
  "body": "<p><strong>Halodoc</strong>. Si Kecil sudah berusia genap 7 bulan! Itu artinya ia sudah melewati setengah tahun pertama hidupnya dengan baik. Ayah dan ibu tentunya sudah tidak sabar untuk mengamati perkembangan penting apalagi yang dibuat bayi di usia 7 bulan ini. Karena itu, yuk cari tahu di bawah ini.</p>",
  "user": {
    "id": "12345",
    "username": "growfie",
    "name": "Growth Familie",
    "email": "growthfamilie@gmail.com"
  }
}
```

Beberapa nilai diatas ada yang wajib diisi dan juga optional sama seperti saat menambahkan artikel.

CATATAN
<br>
Meskipun melakukan update terhadap nilai title, nilai slug yang dihasilkan berdasarkan pada nilai title tidak akan ikut diperbarui. Nilai slug hanya akan dihasilkan sekali saja pada saat pertama kali menambahkan artikel, hal ini dibuat dengan pertimbangkan terhadap SEO.

###### /articles/id/:id
+ alternatif untuk /articles/:slug

Ganti ***:id*** dengan id yang dimiliki pada artikel target. Digunakan untuk memperbarui satu artikel yang diperoleh melalui id. Artikel hanya dapat diperbarui oleh akun yang menambahkan artikel tersebut.

[KEMBALI KE DAFTAR ISI](#daftar-isi)

#### METHOD: DELETE
###### /articles/:slug
Ganti ***:slug*** dengan slug yang dimiliki pada artikel target. Digunakan untuk menghapus satu artikel berdasarkan pada slug. Artikel hanya dapat dihapus oleh pemilik artikel atau akun yang menambahkan artikel tersebut.

###### /articles/id/:id
+ alternatif untuk /articles/:slug

Ganti ***:id*** dengan id yang dimiliki pada artikel target.<br>
Digunakan untuk menghapus satu artikel berdasarkan pada id. Artikel hanya dapat dihapus oleh pemilik artikel atau akun yang menambahkan artikel tersebut.

[KEMBALI KE DAFTAR ISI](#daftar-isi)

### RUTE-RUTE UNTUK MENGELOLA SARAN PRODUK-PRODUK
#### METHOD: GET
###### /products
Rute ini digunakan untuk mendapatkan produk-produk yang disarankan dari semua kategori. Saran produk yang telah tersedia adalah kategori bayi, balita, dan anak-anak.

###### /products/:productId
Ganti ***:productId*** dengan id dari satu saran produk tertentu.<br>
Rute ini digunakan untuk melihat satu saran produk saja.

###### /products/category/:name
Ganti ***:name*** dengan nama kategori yang telah terdaftar.<br>
Rute ini digunakan untuk mendapatkan produk-produk yang disarankan berdasarkan satu kategori tertentu.

#### METHOD: DELETE
###### /products/:productId
Ganti ***:productId*** dengan id dari satu saran produk tertentu.<br>
Rute ini digunakan untuk menghapus saran produk dari database berdasarkan pada id-nya.

[KEMBALI KE DAFTAR ISI](#daftar-isi)

Rute-rute berikut dapat berfungsi apabila terdapat informasi pengguna yang dikirimkan dan pengguna tersebut terdaftar dan sesuai dengan yang ada di database.

#### METHOD: POST
###### /products
Rute ini digunakan untuk menambahkan satu saran produk baru, dengan contoh format sebagai berikut:

```
{
  "category": "Bayi",
  "name": "Popok Besi",
  "brand": "Poksi",
  "price": "2500000",
  "features": "Tahan banting",
  "source": "https://popokbesi.com",
  "user": {
    "id": "636xxxxxxxxxxxxxxxxxxxxx",
    "username": "growthfamilie",
    "name": "Growth Familie",
    "email": "growfie@example.com
  }
}
```

Setiap properti wajib memiliki nilai/tidak boleh kosong. Jika nilai *price* bertipe string maka akan dikonversi menjadi integer.

#### METHOD: PUT
###### /products/:productId
Ganti ***productId*** dengan id dari satu saran produk tertentu.<br>
Rute ini digunakan untuk memperbarui/update satu saran produk tertentu. Format nilai yang dikirimkan sama seperti contoh untuk menambahkan satu saran produk baru.

[KEMBALI KE DAFTAR ISI](#daftar-isi)