# API GROWTH FAMILIE
Alamat API: *Belum tersedia secara online*.
<br>
Hampir semua request memerlukan autentikasi berupa bearer token. Simpan bearer token tersebut dalam headers seperti berikut:

```
headers: {
  "Authorization": "Bearer <TOKEN>",
  "Content-Type": "application/json"
}
```

Ganti ***\<TOKEN\>*** dengan token yang telah disediakan oleh tim Back-End.

###### DAFTAR ISI
+ [RUTE-RUTE UMUM](#rute-rute-umum)
    + [METHOD: GET](#method-get)
    + [METHOD: POST](#method-post)
+ [RUTE-RUTE LANJUTAN: UNTUK SEMUA JENIS AKUN](#rute-rute-lanjutan-untuk-semua-jenis-akun)
    + [METHOD: POST](#method-post-1)
    + [METHOD: PUT](#method-put)
    + [METHOD: DELETE](#method-delete)
    + [METHOD: GET](#method-get-1)
+ [RUTE-RUTE LANJUTAN: UNTUK AKUN SUPERADMIN](#rute-rute-lanjutan-untuk-akun-superadmin)
    + [METHOD: POST](#method-post-2)
    + [METHOD: DELETE](#method-delete-1)
    + [METHOD: GET](#method-get-2)

### RUTE-RUTE UMUM
Rute-rute dibawah ini dapat diakses secara bebas dengan syarat menggunakan autentikasi bearer token seperti di atas.

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

[KEMBALI KE DAFTAR ISI](#daftar-isi)

###### /articles/id/:id
Ganti ***:id*** dengan id yang dimiliki pada artikel target.
<br>
Meskipun tidak disarankan, kami sediakan rute untuk mendapatkan detail artikel menggunakan id. Hasil response yang didapat sama saja seperti menggunakan /articles/:slug. Contoh penggunaan:

```
/articles/id/636e5a4dba0f486fa1445326
```

###### /categories
Digunakan untuk mendapatkan semua daftar kategori yang telah tersedia. Adapun kategori yang tersedia adalah:
+ Kehamilan
+ Bayi
+ Balita
+ Anak-anak
+ Parenting

###### /categories/:name
Ganti **:name** dengan nama kategori yang telah tersedia.<br>
Digunakan untuk mendapatkan detail dari category. Response yang diberikan akan berupa:

```
{
    "status": "success",
    "error": false,
    "data": {
    "category": [
      {
        "_id": "6371a97235477aa3768daf41",
        "name": "Bayi",
        "needs": [
            {
              "name": "Popok",
              "brand": "MamyPoko Sensasi Lembut Tape NB",
              "quantity": 40,
              "features": "Stretchy soft fit memungkinkan bayi bergerak bebas, lapisan berpori, lapisan bergelombang yang dapat menggunci pipis",
              "price": 117000,
              "source": "https://www.imaos.id/neraca/daftar-harga-popok-sekali-pakai-untuk-bayi-baru-lahir/"
            },
            {
              "name": "Paket Baju Newborn",
              "brand": "-",
              "quantity": 24,
              "features": "Handfeel yang lembut, daya serap air baik, tidak mudah berubah bentuk",
              "price": 365000,
              "source": "https://tokopedia.link/gWdB7AQTVub"
            }
          ]
      }
    ]
  }
}
```

#### METHOD: POST
###### /login
Digunakan agar dapat mengakses *rute-rute lanjutan* dan memperoleh cookie dengan syarat login menggunakan akun yang telah terdaftar atau yang telah didaftarkan oleh akun dengan level *superadmin*. Kirimkan request dengan body seperti berikut:

```
body: {
  "username": "username_akun",
  "password": "password_akun"
}
```

Ganti masing-masing *username_akun* dan *password_akun* dengan yang telah terdaftar.<br>

[KEMBALI KE DAFTAR ISI](#daftar-isi)

### RUTE-RUTE LANJUTAN: UNTUK SEMUA JENIS AKUN
Maksud dari ***rute-rute lanjutan untuk semua jenis akun*** yakni merupakan rute yang hanya dapat diakses jika telah terdapat cookie. Cookie sendiri diperoleh jika pengguna berhasil login.

#### METHOD: POST
###### /articles
Digunakan untuk menambahkan artikel baru. Lakukan request dan simpan nilai-nilai berikut dalam body, seperti berikut ini:

```
body: {
  "title": "Perkembangan Bayi 7 Bulan",
  "category": "Bayi",
  "from": "https://www.halodoc.com/artikel/perkembangan-bayi-7-bulan",
  "img": "https://lh4.googleusercontent.com/qHV8oKhPv3zIvby_-f0l7ps7uJvlNsUfOg_rc5iefazR4SlTGUzyOyAlpk4rNknLPUE=w2400",
  "body": "<p><strong>Halodoc</strong>. Si Kecil sudah berusia genap 7 bulan! Itu artinya ia sudah melewati setengah tahun pertama hidupnya dengan baik. Ayah dan ibu tentunya sudah tidak sabar untuk mengamati perkembangan penting apalagi yang dibuat bayi di usia 7 bulan ini. Karena itu, yuk cari tahu di bawah ini.</p><h2>Bayi Sudah Bisa Merangkak</h2><p>Apakah Si Kecil sudah bisa merangkak? Pertanyaan tersebut seringkali dilontarkan oleh teman-teman atau keluarga, seolah-olah bila bayi belum bisa merangkak di usia 7 bulan itu, artinya ia mengalami keterlambatan perkembangan. Padahal, kenyataannya, rata-rata bayi mulai merangkak di antara usia 6–7 bulan. Bayi juga merangkak secara tidak terduga, sehingga banyak ahli anak, bahkan tidak menganggap kemampuan tersebut sebagai tonggak perkembangan bayi yang penting.</p>"
}
```

PENTING! NILAI-NILAI BERIKUT WAJIB DIISI
+ *title* - isikan dengan judul artikel
+ *category* - isikan dengan satu kategori yang tersedia
+ *img* - isikan dengan alamat dari gambar yang berkaitan dengan isi artikel
+ *body* - isi atau text konten beserta tag HTML pembungkus kontennya

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
  "body": "<p><strong>Halodoc</strong>. Si Kecil sudah berusia genap 7 bulan! Itu artinya ia sudah melewati setengah tahun pertama hidupnya dengan baik. Ayah dan ibu tentunya sudah tidak sabar untuk mengamati perkembangan penting apalagi yang dibuat bayi di usia 7 bulan ini. Karena itu, yuk cari tahu di bawah ini.</p>"
}
```

Beberapa nilai diatas ada yang wajib diisi dan juga optional sama seperti saat menambahkan artikel.

CATATAN
<br>
Meskipun melakukan update terhadap nilai title, nilai slug yang dihasilkan berdasarkan pada nilai title tidak akan ikut diperbarui. Nilai slug hanya akan dihasilkan sekali saja pada saat pertama kali menambahkan artikel, hal ini dibuat dengan pertimbangkan terhadap SEO.

###### /articles/id/:id
+ alternatif untuk /articles/:slug

Ganti ***:id*** dengan id yang dimiliki pada artikel target. Digunakan untuk memperbarui satu artikel yang diperoleh melalui id. Artikel hanya dapat diperbarui oleh akun yang menambahkan artikel tersebut.

###### /users/:username
Ganti ***:username*** dengan nilai username yang dimiliki pada akun target. Digunakan untuk memperbarui data akun. Akun hanya dapat diperbarui oleh pemilik akun itu sendiri dalam artian hanya dapat melakukan update pada akun yang digunakan saat login.<br>
<br>
Contohnya Anda login menggunakan akun A maka Anda hanya dapat memperbarui akun A itu sendiri, jadi akun A tidak dapat memperbarui data akun B.<br>
<br>
Lakukan request dengan method put dan sertakan nilai-nilai berikut pada body, contoh:

```
body: {
  "name": "Growth Familie",
  "email": "email@example.com",
  "currentPassword": "password_lama",
  "newPassword": "password_baru"
}
```

PENTING! NILAI-NILAI BERIKUT WAJIB DIISI
+ *name* - nama lengkap pengguna
+ *email* - email aktif pengguna, jika format tidak sesuai seperti 'email@example.com' atau email telah digunakan oleh akun lain maka update gagal
+ *currentPassword* - masukkan password saat ini / password lama, jika tidak sesuai maka update gagal
+ *newPassword* - masukkan password baru, pastikan tidak memiliki white space dan lebih dari 8 karakter

Untuk saat ini Anda tidak dapat melakukan pembaruan terhadap nilai username.<br>

[KEMBALI KE DAFTAR ISI](#daftar-isi)

#### METHOD: DELETE
###### /articles/:slug
Ganti ***:slug*** dengan slug yang dimiliki pada artikel target. Digunakan untuk menghapus satu artikel berdasarkan pada slug. Artikel hanya dapat dihapus oleh pemilik artikel atau akun yang menambahkan artikel tersebut.

###### /articles/id/:id
+ alternatif untuk /articles/:slug

Ganti ***:id*** dengan id yang dimiliki pada artikel target.<br>
Digunakan untuk menghapus satu artikel berdasarkan pada id. Artikel hanya dapat dihapus oleh pemilik artikel atau akun yang menambahkan artikel tersebut.

#### METHOD: GET
###### /articles/my
Digunakan untuk mendapatkan semua artikel yang pernah ditambahkan oleh akun yang digunakan untuk login. Misal login menggunakan akun A maka response yang diberikan adalah semua artikel yang sudah ditambahkan oleh akun A tersebut.

###### /users/:username
Ganti ***:username*** dengan username yang dimiliki pada akun target.<br>
Digunakan untuk melihat detail akun sendiri. Misalnya, login menggunakan akun A maka response yang diberikan adalah informasi mengenai akun A tersebut. Jadi, jika login menggunakan akun A maka tidak akan bisa melihat informasi akun B atau yang lain.

###### /logout
Digunakan untuk keluar dari akun yang sedang digunakan dan akan menghapus cookie yang terdaftar. Sehingga setelah logout, Anda sudah tidak memiliki akses terhadap ***rute-rute lanjutan***.<br>

[KEMBALI KE DAFTAR ISI](#daftar-isi)

### RUTE-RUTE LANJUTAN: UNTUK AKUN SUPERADMIN
Akun superadmin ditandai dengan level bernilai 1 pada koleksi database dan memiliki izin atau akses lebih tinggi daripada akun biasa. Beberala rute atau url berikut hanya dapat diakses oleh akun dengan level superadmin.

#### METHOD: POST
###### /users
Digunakan untuk menambahkan akun pengguna baru. Lakukan request dengan mengirimkan nilai-nilai pada body seperti berikut:

```
body: {
  "username": "akunbaru",
  "name": "Akun Baru",
  "email": "akunbaru@example.com",
  "password": "password_akun_baru"
}
```

PENTING! NILAI-NILAI BERIKUT WAJIB DIISI
+ *username* - nilai ini digunakan untuk login, tidak boleh memiliki white space, harus lebih dari 5 karakter dan harus bersifat unik alias belum digunakan oleh pengguna lain
+ *name* - diisi minimal 2 karakter
+ *email* - merupakan email aktif yang belum digunakan oleh pengguna lain dan harus sesuai dengan format email pada umumnya, contoh: 'email@example.com'
+ *password* - diisi minimal 8 karakter, tidak boleh menggunakan white space, kemudian jika pendaftaran berhasil password yang tersimpan pada database akan terenkripsi

Untuk saat ini pendaftaran hanya dapat dilakukan dengan menghubungi pemiliki superadmin, mengingat terdapat kriteria khusus agar bisa ikut berpartisipasi dalam membuat konten pada Aplikasi Growth Familie.

#### METHOD: DELETE
###### /users/:username
Ganti ***:username*** dengan username yang dimiliki pada target akun pengguna.<br>
Digunakan untuk menghapus akun berdasarkan nilai username. Perlu dicatat bahwa untuk saat ini Anda tidak dapat menghapus akun sendiri.

#### METHOD: GET
###### /users
Digunakan untuk mendapatkan semua akun yang terdapat pada koleksi database. Response yang diberikan akan seperti berikut:

```
{
  "status": "success",
  "error": false,
  "data": {
    "users": [
      {
        "level": 0,
        "username": "suhaefi",
        "email": "emailsuhaefi@example.com"
      },
      {
        "level": 0,
        "username": "taqigusdi",
        "email": "emailtaqi@example.com"
      }
    ]
  }
}
```

[KEMBALI KE DAFTAR ISI](#daftar-isi)