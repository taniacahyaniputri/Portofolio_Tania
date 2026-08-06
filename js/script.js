// Toggle Hamburger Menu untuk Mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Tutup menu saat link diklik di perangkat mobile
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = hamburger?.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Simulasi Kirim Form Kontak
function handleFormSubmit(event) {
    event.preventDefault();
    alert('Terima kasih! Pesan Anda berhasil dikirim. Saya akan segera meresponsnya.');
    event.target.reset();
}

// Fungsi Membuka Modal Transkrip Nilai
function openTranscriptModal() {
    const modal = document.getElementById('transcriptModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Fungsi Menutup Modal Transkrip Nilai
function closeTranscriptModal() {
    const modal = document.getElementById('transcriptModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Menutup modal jika pengguna mengklik area di luar kotak modal
window.addEventListener('click', (event) => {
    const modal = document.getElementById('transcriptModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});