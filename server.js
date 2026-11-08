const express = require('express');
const app = express();
const PORT = 3000;

// public klasörünü dış dünyaya açıyoruz
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Sunucu ayakta! Takip et: http://localhost:${PORT}`);
});

const db = require('./db');