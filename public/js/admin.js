// Admin panelindeki formun id'sinin 'etkinlikForm' olduğunu varsayıyoruz
const form = document.getElementById('etkinlikForm');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Sayfanın yenilenmesini engelle

        // Formdaki inputlardan değerleri alıyoruz
        const etkinlikVerisi = {
            ad: document.getElementById('etkinlikAdi').value,
            tarih: document.getElementById('etkinlikTarihi').value,
            fiyat: document.getElementById('etkinlikFiyati').value
        };

        try {
            // Veriyi Node.js sunucumuza POST ediyoruz
            const response = await fetch('http://localhost:3000/etkinlik-ekle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(etkinlikVerisi)
            });

            const sonuc = await response.json();
            alert(sonuc.mesaj); // Başarılı mesajını göster

            if (sonuc.basarili) {
                form.reset(); // Formu temizle
            }
        } catch (error) {
            console.error("Bağlantı hatası:", error);
            alert("Sunucuya ulaşılamadı!");
        }
    });
}