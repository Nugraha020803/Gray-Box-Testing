# Tugas Gray Box Testing dengan JavaScript

## Dosen Pengampu

**Deni Suprihadi, S.T, M.Kom., MCE.**

## Materi

1. **Session 1**: Definisi dan konsep
2. **Session 2**: Model Gray Box Testing

**Disusun Oleh:**

* Arya Nugraha
* NIM: 20221310064
* Denita Alhamdina Putri Arisandi
* NIM: 20221310013
* Kelompok SQ
* Sri Purnama Royani Putri
* NIM: 20211310066
* Melvin Chairul Azfa
* NIM: 20211310019

## Deskripsi

Tugas ini bertujuan untuk memahami dan mengimplementasikan pengujian **Gray Box Testing** menggunakan JavaScript. **Gray Box Testing** adalah metode pengujian perangkat lunak yang menggabungkan aspek dari **Black Box Testing** dan **White Box Testing**. Pengujian ini dilakukan dengan pengetahuan terbatas tentang struktur internal aplikasi dan berfokus pada pengujian fungsi dan integrasi sistem.

Pada tugas ini, model-model pengujian yang digunakan mencakup:

1. **Orthogonal Array Testing**
2. **Matrix Testing**
3. **Regression Testing**
4. **Pattern Testing**

## Model Pengujian yang Digunakan

### 1. **Orthogonal Array Testing**

Orthogonal Array Testing adalah teknik yang digunakan untuk menguji kombinasi input secara efisien. Teknik ini menggunakan array ortogonal untuk mengatur kombinasi input yang berbeda dan mengurangi jumlah tes yang diperlukan.

**Contoh Kode**:

```javascript
function testCombination(color, size) {
  if (color === 'red' && size === 'small') {
    return "Test Case 1 Passed";
  } else if (color === 'blue' && size === 'large') {
    return "Test Case 2 Passed";
  } else {
    return "Test Case Failed";
  }
}

console.log(testCombination('red', 'small')); // Output: Test Case 1 Passed
console.log(testCombination('blue', 'large')); // Output: Test Case 2 Passed
```

### 2. **Matrix Testing**

Matrix Testing menggunakan matriks untuk mengatur berbagai kombinasi input-output. Setiap kombinasi input diuji untuk memastikan bahwa perangkat lunak menangani setiap kondisi dengan benar.

**Contoh Kode**:

```javascript
function testLogin(username, password) {
  const validCredentials = {
    "user1": "password123",
    "user2": "password456"
  };
  
  if (validCredentials[username] === password) {
    return "Login Success";
  } else {
    return "Login Failed";
  }
}

console.log(testLogin("user1", "password123")); // Output: Login Success
console.log(testLogin("user2", "wrongpassword")); // Output: Login Failed
```

### 3. **Regression Testing**

Regression Testing digunakan untuk memastikan bahwa perubahan pada kode tidak merusak fungsionalitas yang sudah ada. Pengujian ini mengonfirmasi bahwa setelah perubahan dilakukan, sistem masih berfungsi dengan baik.

**Contoh Kode**:

```javascript
let totalPrice = 0;

function addToCart(itemPrice) {
  totalPrice += itemPrice;
  return totalPrice;
}

// Pengujian sebelum pembaruan
console.log(addToCart(20)); // Output: 20

// Pembaruan pada kode: diskon 10%
function applyDiscount() {
  totalPrice *= 0.9;
  return totalPrice;
}

// Pengujian setelah pembaruan
console.log(applyDiscount()); // Output: 18 (Diskon diterapkan)
```

### 4. **Pattern Testing**

Pattern Testing berfokus pada mengidentifikasi pola dalam data atau interaksi pengguna untuk memastikan aplikasi menangani pola tersebut dengan baik. Pengujian ini mengidentifikasi potensi masalah yang mungkin muncul berdasarkan pola-pola yang terdeteksi.

**Contoh Kode**:

```javascript
function trackOrderStatus(orderID) {
  const orderStatus = {
    101: "Processing",
    102: "Shipped",
    103: "Delivered"
  };
  
  return orderStatus[orderID] || "Order not found";
}

console.log(trackOrderStatus(101)); // Output: Processing
console.log(trackOrderStatus(104)); // Output: Order not found
```

## Instalasi

Untuk menjalankan kode ini di lokal, ikuti langkah-langkah berikut:

1. **Clone Repository**:

   * Salin URL repository ini dan jalankan perintah berikut di terminal:

     ```
     git clone https://github.com/username/gray-box-testing-js.git
     ```

2. **Akses Folder Proyek**:

   * Masuk ke folder proyek yang telah di-clone:

     ```
     cd gray-box-testing-js
     ```

3. **Jalankan Kode**:

   * Kode dalam file `tugas.js` dapat dijalankan menggunakan Node.js. Pastikan Anda telah menginstal [Node.js](https://nodejs.org/).
   * Untuk menjalankan kode, ketik perintah berikut di terminal:

     ```
     node tugas.js
     ```

## Pengujian

Pada file `tugas.js`, terdapat beberapa fungsi yang diuji menggunakan model pengujian **Gray Box Testing**. Fungsi-fungsi tersebut meliputi:

1. **`testCombination(color, size)`**: Fungsi ini menguji kombinasi input warna dan ukuran produk.
2. **`testLogin(username, password)`**: Fungsi ini menguji proses login dengan username dan password yang diberikan.
3. **`addToCart(itemPrice)`**: Fungsi ini menambahkan harga barang ke total harga keranjang.
4. **`trackOrderStatus(orderID)`**: Fungsi ini melacak status pesanan berdasarkan ID.

### **Cara Pengujian**:

* Uji fungsi **Orthogonal Array Testing** dengan memasukkan kombinasi warna dan ukuran.
* Uji fungsi **Matrix Testing** dengan memasukkan username dan password untuk login.
* Uji fungsi **Regression Testing** dengan memverifikasi penghitungan harga setelah penerapan diskon.
* Uji fungsi **Pattern Testing** dengan melacak status pesanan untuk ID yang valid dan tidak valid.

## Kontribusi

Jika Anda ingin berkontribusi pada repository ini, silakan buat fork dan kirim pull request. Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan.

---


