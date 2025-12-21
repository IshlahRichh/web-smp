# Panduan Deploy ke cPanel

## Masalah Route 404 di cPanel - SOLVED ✅

Masalah: Route seperti `/biaya-pendaftaran`, `/login`, dan `/error` tidak muncul ketika diakses langsung di browser setelah di-upload ke cPanel.

### Penyebab
Aplikasi React adalah Single Page Application (SPA). Ketika user mengakses route langsung, server Apache mencari file fisik di path tersebut. Karena tidak ada file fisik, server mengembalikan error 404.

### Solusi

File `.htaccess` sudah dibuat dan akan otomatis ter-copy ke folder `dist/` saat build. File ini akan mengarahkan semua request ke `index.html` sehingga React Router bisa menangani routing.

## Langkah-Langkah Deploy ke cPanel

### 1. Build Aplikasi
```bash
npm run build
```

Semua file siap deploy akan ada di folder `dist/`

### 2. Upload ke cPanel

**Opsi A: Upload via File Manager cPanel**
1. Login ke cPanel
2. Buka **File Manager**
3. Navigasi ke folder `public_html` (atau subdomain folder)
4. **Hapus semua file lama** di folder tersebut
5. Upload semua isi folder `dist/` ke `public_html`
   - Pastikan file `.htaccess` ter-upload
   - Pastikan struktur folder `assets/` ter-upload lengkap

**Opsi B: Upload via FTP**
1. Gunakan FileZilla atau FTP client lainnya
2. Connect ke server via FTP
3. Navigasi ke `public_html`
4. Upload semua isi folder `dist/`

### 3. Verifikasi Upload

Pastikan struktur folder di cPanel seperti ini:
```
public_html/
├── .htaccess          ← FILE PENTING!
├── index.html
└── assets/
    ├── css/
    ├── fonts/
    ├── img/
    └── *.js, *.css (bundled files)
```

### 4. Cek mod_rewrite Aktif

1. Di cPanel, cari **"Select PHP Version"** atau **"MultiPHP Manager"**
2. Pastikan modul `mod_rewrite` dicentang/aktif
3. Jika tidak ada akses, hubungi hosting provider untuk mengaktifkan

### 5. Test Routes

Setelah upload, test URL berikut di browser:
- `https://yourdomain.com/` (Homepage)
- `https://yourdomain.com/biaya-pendaftaran` (Protected route)
- `https://yourdomain.com/login` (Login page)
- `https://yourdomain.com/alur-pendaftaran` (Alur page)
- `https://yourdomain.com/route-yang-tidak-ada` (404 page - akan redirect ke ErrorMain)

**Catatan 404 Page:**
- Route `path="*"` di Navigation sudah menangkap semua route yang tidak ditemukan
- File `.htaccess` sudah dikonfigurasi dengan `ErrorDocument 404 /index.html`
- Ketika user akses route yang tidak ada, akan muncul halaman 404 custom dari `ErrorMain.tsx`

Semua route sekarang harus berfungsi!

## Troubleshooting

### Route masih 404?

1. **Cek .htaccess ada dan ter-upload**
   ```bash
   # Di terminal cPanel File Manager, cek:
   ls -la public_html/.htaccess
   ```

2. **Cek permission .htaccess**
   - Permission harus: `644` atau `-rw-r--r--`
   - Ubah via File Manager → klik kanan → Change Permissions

3. **Cek error_log cPanel**
   - Di File Manager, cari file `error_log`
   - Buka dan lihat error terakhir

4. **Clear browser cache**
   - Hard refresh: `Ctrl + Shift + R` (Windows)
   - Atau buka di Incognito/Private mode

5. **Hubungi hosting provider**
   - Minta aktifkan `mod_rewrite`
   - Minta aktifkan `.htaccess` support

## File Penting

- **`public/.htaccess`** - File konfigurasi Apache untuk routing SPA
- **`vite.config.ts`** - Konfigurasi build Vite (sudah diupdate)
- **`dist/`** - Folder output build yang di-upload ke cPanel

## Catatan

- Setiap kali ada perubahan code, jalankan `npm run build` lagi
- Upload ulang isi folder `dist/` ke cPanel
- Jangan edit file di cPanel, selalu edit di local lalu build ulang
- File `.htaccess` otomatis ter-copy setiap build

## Optimasi Tambahan

File `.htaccess` sudah include:
- ✅ Routing SPA (redirect ke index.html)
- ✅ Custom 404 Error Page (ErrorMain.tsx)
- ✅ Custom Error Pages (403, 500)
- ✅ Security headers
- ✅ Gzip compression
- ✅ Browser caching untuk assets

## Cara Kerja 404 Page

1. **Route tidak ditemukan di React Router** → Component `ErrorMain` ditampilkan (via `path="*"`)
2. **File tidak ada di server** → Apache redirect ke `index.html` via `ErrorDocument 404`
3. **React Router aktif** → Menampilkan `ErrorMain` component untuk route yang tidak dikenali

Semua sudah siap untuk production!
