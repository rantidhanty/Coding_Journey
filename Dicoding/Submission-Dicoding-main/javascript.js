document.addEventListener('DOMContentLoaded', function() {
    const tombolMenu = document.querySelector('.tombol-menu');
    const daftarMenu = document.querySelector('#daftar-menu');

    tombolMenu.addEventListener('click', function() {
        daftarMenu.classList.toggle('active');
    });
});
