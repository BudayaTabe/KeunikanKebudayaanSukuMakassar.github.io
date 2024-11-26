// Dapatkan elemen dialog dari DOM
const popupDialog = document.getElementById('popupDialog');

// Fungsi untuk membuka popup
function openPopup() {
    if (popupDialog) {
        popupDialog.showModal(); // Menampilkan dialog
    } else {
        console.error("Elemen dialog tidak ditemukan");
    }
}

// Fungsi untuk menutup popup
function closePopup() {
    if (popupDialog) {
        popupDialog.close(); // Menutup dialog
    } else {
        console.error("Elemen dialog tidak ditemukan");
    }
}
