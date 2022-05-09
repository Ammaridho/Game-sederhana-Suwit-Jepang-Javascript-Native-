// button pilih ditekan
document.getElementById('submitPilih').addEventListener('click',function () {
    
    const domPilihan = document.getElementById('pilihan');
    const pilihan = domPilihan.options[domPilihan.selectedIndex].value;

    document.getElementById('andaTampil').innerHTML = `<img src="assets/img/${pilihan}.png" alt="" width="100px"><p>${pilihan}</p>`; 
    
    const lawan = gatchaPilihan();

    const hasil = perosesCek(pilihan,lawan);
    
    document.getElementById('hasilTampil').innerHTML = `<img src="assets/img/${hasil}.png" alt="" width="100px"><p>${hasil}</p>`;
});

function gatchaPilihan() {
    let pilihan = ['Batu','Gunting','Kertas'];                      //inisialisasi

    pilihan = pilihan[Math.floor(Math.random()*pilihan.length)]     //random

    document.getElementById('lawanTampil').innerHTML = `<img src="assets/img/${pilihan}.png" alt="" width="100px"><p>${pilihan}</p>`;                                       //tampilkan

    return pilihan;
}

function perosesCek(pilihan,lawan) {
    if (pilihan != lawan) {

        if (pilihan == 'Batu') {

            if (lawan == 'Gunting') {
                
                return 'Menang';

            } else {
                
                return 'Kalah';
            }
        
        } else if (pilihan == 'Gunting') {

            if (lawan == 'Kertas') {
                
                return 'Menang';

            } else {
                
                return 'Kalah';
            }
            
        } else {

            if (lawan == 'Batu') {
                
                return 'Menang';

            } else {
                
                return 'Kalah';
            }
    
        }

    }

    return 'Seri';
}
