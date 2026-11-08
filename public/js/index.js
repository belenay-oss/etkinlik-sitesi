const anaAlan = document.querySelector('main');

async function etkinlikleriGetir() {
    try {
        const response = await fetch('http://localhost:3000/etkinlikler');
        const etkinlikler = await response.json();


       
        etkinlikler.forEach(etkinlik => {
            const yeniKutu = document.createElement('div');
            yeniKutu.classList.add('etkinlik-kutu');


            yeniKutu.innerHTML = `
                <h3>${etkinlik.ad}</h3>
                <p>Tarih: ${etkinlik.tarih}</p>
                <p>Fiyat: ${etkinlik.fiyat} TL</p>
                <button>Satın Al</button>
            `;


            anaAlan.appendChild(yeniKutu);
        });
    } catch (error) {
        console.error("Etkinlikler yüklenirken hata oluştu:", error);
    }
}


etkinlikleriGetir();

