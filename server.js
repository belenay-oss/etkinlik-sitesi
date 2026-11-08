const express = require('express');
const app = express();
const PORT = 3000;

// public klasörünü dış dünyaya açıyoruz
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Sunucu ayakta! Takip et: http://localhost:${PORT}`);
});

const db = require('./db');
app.post('/etkinlik-ekle', (req, res) => {
    const { ad, tarih, fiyat } = req.body;

    const sql = "INSERT INTO etkinlikler (ad, tarih, fiyat) VALUES (?, ?, ?)";
    
    db.query(sql, [ad, tarih, fiyat], (err, result) => {
        if (err) {
            console.error("Kayıt hatası:", err);
            return res.status(500).json({ basarili: false, mesaj: "Veritabanına eklenemedi!" });
        }
        res.json({ basarili: true, mesaj: "Etkinlik başarıyla veritabanına kaydedildi!" });
    });
});

// 2. Ana sayfa için veritabanındaki etkinlikleri getirme (GET)
app.get('/etkinlikler', (req, res) => {
    const sql = "SELECT * FROM etkinlikler";
    
    db.query(sql, (err, sonuclar) => {
        if (err) {
            console.error("Listeleme hatası:", err);
            return res.status(500).json({ mesaj: "Etkinlikler getirilemedi!" });
        }
        res.json(sonuclar);
    });
});

// Sunucuyu başlatıyoruz
app.listen(PORT, () => {
    console.log(`Sunucu ayakta! Takip et: http://localhost:${PORT}`);
});