- Store itu ibaratnya adalah kamar tidur (tempat penyimpanan terbesar)
- Reducer itu ibaratnya lemari / laci-laci kecil (tempat penyimpanan lain yang ada di store)
  - Didalam reducer bisa ada data lain
- Action itu ibaratnya menambahkan baju ke lemari (aksi yang merubah isi reducer (data, urutan, dll))

- action harus berbentuk
  // function yang mereturn object
  // action biasanya membawa data (payload)
  // ketika action di dispacth semua reducer akan dijalankan
  // return action juga dikirimkan ke semua reducer


redux = data yang diakses oleh semua komponen (global)
(data yang kesimpen terus dan bisa diakses dengan mudah oleh komponen lain)
ketika pindah page datanya ga hilang perlu redux


