# Yonatan_DEV — Portfolio Brutalism (React + GSAP + react-bits Lanyard)

Portfolio satu halaman (Home, About, Project, Gallery, Contact) bergaya
**Neo-Brutalism**: border tebal, warna kontras tinggi, tipografi mentah, dan
kartu ID 3D interaktif (komponen `Lanyard` dari react-bits) sebagai elemen
utama di hero.

## 1. Instalasi

```bash
npm install
```

Semua dependency (React Three Fiber, drei, Rapier, meshline, GSAP) sudah
tercantum di `package.json`.

## 2. WAJIB: Tambahkan aset Lanyard

Komponen `src/components/Lanyard/Lanyard.jsx` butuh 2 file yang **tidak bisa**
disertakan otomatis di sini (file binary):

1. `card.glb` — model 3D kartu ID
2. `lanyard.png` — tekstur tali

Unduh keduanya dari repo react-bits (folder `src/assets/lanyard`) atau install
langsung via shadcn CLI seperti yang kamu pakai sebelumnya:

```bash
npx shadcn@latest add @react-bits/Lanyard-JS-CSS
```

Lalu salin `card.glb` dan `lanyard.png` yang dihasilkan ke:

```
src/components/Lanyard/card.glb
src/components/Lanyard/lanyard.png
```

(Lokasinya harus persis di folder itu karena `Lanyard.jsx` mengimpornya
dengan path relatif `./card.glb` dan `./lanyard.png`.)

Ingin pakai foto kamu sendiri di kartu? Lanyard sudah mendukung prop
`frontImage`, `backImage`, dan `lanyardImage` — tinggal isi di
`src/sections/Home.jsx`:

```jsx
<Lanyard
  position={[0, 0, 22]}
  gravity={[0, -40, 0]}
  frontImage="/foto-depan.png"
  backImage="/foto-belakang.png"
  lanyardImage="/tekstur-tali.png"
  lanyardWidth={1}
/>
```

## 3. Jalankan

```bash
npm run dev
```

Buka `http://localhost:5173`.

## 4. Struktur Project

```
src/
├── App.jsx / App.css
├── index.css               ← design tokens brutalism (warna, font)
├── main.jsx                ← registrasi GSAP + ScrollTrigger
├── components/
│   └── Lanyard/
│       ├── Lanyard.jsx      ← komponen 3D (persis dari react-bits)
│       ├── Lanyard.css
│       ├── card.glb         ← KAMU TAMBAHKAN SENDIRI
│       └── lanyard.png      ← KAMU TAMBAHKAN SENDIRI
└── sections/
    ├── Navbar.jsx / .css
    ├── Home.jsx / .css      ← hero, judul besar, kartu Lanyard
    ├── About.jsx / .css     ← bio + stat grid
    ├── Projects.jsx / .css  ← grid project, hover invert warna
    ├── Gallery.jsx / .css   ← grid galeri (placeholder, tinggal isi gambar)
    └── Contact.jsx / .css   ← form kontak + sosial media + footer
```

## 5. Palet & Tipografi (Brutalism token)

| Token        | Nilai           | Peran                                |
| ------------ | --------------- | ------------------------------------ |
| `--ink`      | `#0a0a0a`       | Teks utama, border, background gelap |
| `--paper`    | `#f2f0e6`       | Background dasar (kertas mentah)     |
| `--acid`     | `#dfff1a`       | Aksen utama (hover, highlight)       |
| `--siren`    | `#ff2e00`       | Aksen sekunder (peringatan, index)   |
| Display font | `Archivo Black` | Judul besar, huruf tebal blok        |
| Body font    | `Space Mono`    | Body, label, form, mono raw          |

## 6. Kustomisasi cepat

- **Ganti nama/teks**: edit langsung di tiap file section (`Home.jsx`,
  `About.jsx`, dst) — semua konten dalam Bahasa Indonesia dan mudah diedit.
- **Ganti project**: edit array `PROJECTS` di `Projects.jsx`.
- **Ganti galeri**: isi properti `src` pada array `ITEMS` di `Gallery.jsx`
  dengan path gambar kamu (mis. `import img1 from '../assets/gallery/1.jpg'`).
- **Sambungkan form kontak**: `Contact.jsx` punya `handleSubmit` kosong —
  sambungkan ke Formspree/Resend/API kamu sendiri.

Selamat membangun! 🧱
