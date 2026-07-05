# Simple Panel Chrome Extension

Chrome extension sederhana dengan side panel menggunakan Manifest V3.

## Fitur

- Side panel yang bisa dibuka dari ikon ekstensi
- Tombol interaktif dengan feedback JavaScript
- Menggunakan Chrome Side Panel API

## Struktur File

```
├── manifest.json        # Konfigurasi extension (Manifest V3)
├── background.js        # Service worker untuk side panel behavior
├── panel.html           # Tampilan side panel
├── panel.js             # Logika interaksi panel
└── README.md            # Dokumentasi
```

## Cara Install

1. Buka `chrome://extensions/`
2. Aktifkan **Developer mode**
3. Klik **Load unpacked**
4. Pilih folder project ini
5. Klik ikon ekstensi di toolbar untuk membuka side panel

## Tech Stack

- Manifest V3
- Chrome Side Panel API
- Vanilla JavaScript
