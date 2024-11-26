// Mendapatkan elemen skor dari halaman
const scoreElement = document.getElementById('score');
let score = 0;  // Menginisialisasi skor awal

// Fungsi untuk mengecek jawaban
function checkAnswer(questionId, button) {
    const choices = button.closest('.choices');  // Mendapatkan daftar pilihan
    const correctButton = choices.querySelector('[data-correct="true"]');  // Mencari jawaban yang benar
    const resultElement = button.closest('.question').querySelector('.result');

    // Memeriksa apakah jawaban yang dipilih benar atau salah
    const correct = button.getAttribute('data-correct') === 'true';
    
    if (correct) {
        resultElement.textContent = 'Benar!';
        resultElement.style.color = 'green';
        score++;  // Menambah skor jika jawabannya benar
    } else {
        resultElement.textContent = `Salah! Jawaban yang benar adalah: ${correctButton.textContent}`;
        resultElement.style.color = 'red';
    }

    // Menampilkan skor terbaru
    scoreElement.textContent = `Skor Anda: ${score}`;
    
    // Menonaktifkan semua tombol setelah jawaban dipilih
    disableButtons(choices);
}

// Fungsi untuk menonaktifkan semua tombol pilihan setelah menjawab
function disableButtons(choices) {
    const buttons = choices.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);  // Menonaktifkan tombol
}
