# Catatan Pekerjaan - Web Madrasah JIC

Dokumen ini mencatat seluruh pembaruan, perbaikan, dan fitur yang telah dikembangkan pada website Madrasah Jakarta Islamic Centre (Next.js + Strapi).

---

## 🛠️ 1. Perbaikan Backend & Build Next.js
*   **Masalah**: Next.js mengalami *type-checking error* saat build karena mencoba memeriksa file konfigurasi TypeScript milik Strapi di dalam folder `backend/`.
*   **Solusi**: Memperbarui berkas [tsconfig.json](file:///d:/web-madrasah-jic/tsconfig.json) dengan menambahkan `"backend"` ke dalam array `"exclude"`. Kompilasi (`npm run build`) sekarang berhasil sukses 100%.

---

## 🎨 2. Desain & Estetika Nuansa Islami (Premium)
Untuk menghilangkan kesan kaku/biasa pada Tailwind CSS, kami menambahkan sentuhan arsitektur dan ornamen khas Islami:
*   **Pola Geometris (Batik/Arabesque)**: Menambahkan utilitas background SVG berpola arabesque yang padat pada [app/globals.css](file:///d:/web-madrasah-jic/app/globals.css) menggunakan class:
    *   `.bg-islamic-pattern` (pola bintang 8-point geometris)
    *   `.bg-islamic-arabesque` (pola ornamen melengkung lembut)
*   **Bentuk Kubah (Arch/Kubah)**: Mengganti sudut-sudut kaku pada gambar profil dan kartu informasi jenjang pendidikan menjadi lengkungan kubah masjid menggunakan kombinasi class Tailwind `rounded-t-full rounded-b-3xl`.

---

## 🎬 3. Efek Animasi (Framer Motion)
Kami menginstal dan mengintegrasikan library `framer-motion` untuk menghidupkan interaksi UI di halaman web:
*   **Scroll Reveal (Staggered)**: Konten, teks, dan kartu pada halaman akan muncul secara bertahap (*stagger children*) dengan efek meluncur dari bawah (*fade-in-up*) saat pengguna men-scroll layar.
*   **Smooth Hover Effects**: Kartu program dan berita akan sedikit terangkat (3D pop-up) dan bayangannya menebal secara dinamis saat disentuh kursor.
*   **Dynamic Dropdown**: Animasi membesar (*scale*) dan memudar (*fade*) saat menu navigasi "Pendidikan" dibuka.

---

## 📁 4. Struktur Halaman & Migrasi Konten
Mereplikasi struktur menu dari website lama (https://lembagapendidikan.islamic-center.or.id/):
*   **Beranda**: Tampilan hero megah, profil singkat, visi-misi, 3 jenjang pendidikan, dan 3 berita terbaru.
*   **Profil**: Halaman sejarah, detail visi-misi, tujuan pendidikan, dan 4 keunggulan Madrasah JIC.
*   **PAUDQu, TPQ, MDT**: Halaman detail program pembelajaran masing-masing jenjang pendidikan.
*   **Kabar**: Halaman kumpulan artikel berita secara dinamis.
*   **Galeri**: Grid dokumentasi foto kegiatan/fasilitas dengan filter kategori.
*   **Tautan SPMB**: Semua tombol pendaftaran telah disambungkan langsung ke portal pendaftaran resmi JIC di [https://spmb.mjic.sch.id](https://spmb.mjic.sch.id).

---

## 🔌 5. Integrasi CMS Strapi (Dinamis)
*   **Kabar/Berita**: Halaman [Kabar](file:///d:/web-madrasah-jic/app/kabar/page.tsx) dikonfigurasi untuk menarik artikel berita secara real-time dari endpoint Strapi `/api/beritas`.
*   **Galeri Baru (Strapi)**: Membuat skema *Collection Type* baru untuk **Galeri** di folder [backend/src/api/galeri](file:///d:/web-madrasah-jic/backend/src/api/galeri/) dengan atribut:
    *   `Judul` (String)
    *   `Kategori` (Enum: PAUDQu, TPQ, MDT, Fasilitas, Kegiatan)
    *   `Foto` (Media Single)
*   Halaman [Galeri](file:///d:/web-madrasah-jic/app/galeri/page.tsx) di Frontend telah dihubungkan ke endpoint `/api/galeris?populate=*` dengan mekanisme *fallback* (menampilkan data dummy jika API kosong/belum diberi izin).

---

## 📌 Langkah Pengaturan Tambahan di Admin Strapi
Agar Halaman Galeri publik dapat membaca data dari admin Strapi, mohon aktifkan izinnya di panel admin Strapi Anda:
1. Buka **http://localhost:1337/admin** -> Masuk ke **Settings**.
2. Klik **Roles** di bawah menu *Users & Permissions Plugin*.
3. Pilih role **Public**.
4. Cari bagian **Galeri**, centang izin **find** dan **findOne**.
5. Klik **Save**.

---

## 🚀 6. Konfigurasi Deployment ke cPanel via GitHub Actions
Kami menambahkan alur integrasi otomatis (CI/CD) dari GitHub ke server cPanel Anda:
*   **Workflow GitHub Actions**: Berkas [.github/workflows/deploy.yml](file:///d:/web-madrasah-jic/.github/workflows/deploy.yml) dibuat untuk mengotomatiskan proses build dan unggah berkas (FTP) ketika ada `push` ke branch `main`.
*   **Startup Application (Passenger)**: Menambahkan berkas [server.js](file:///d:/web-madrasah-jic/server.js) di root proyek agar Phusion Passenger di cPanel bisa meluncurkan server Next.js di produksi.
*   **Mode Pemeliharaan (Maintenance)**: Menggunakan variabel lingkungan `UNDER_DEVELOPMENT=true` untuk menampilkan layar "Sedang Dalam Pengembangan" secara otomatis di cPanel tanpa memengaruhi localhost.

