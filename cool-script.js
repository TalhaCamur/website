// 📌 Navbar Scroll Efekti
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 📌 Hamburger Menü Aç/Kapat
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// 📌 Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('theme');

// 📌 Sayfa Yüklenirken Dark Mode'u Uygula
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '🌞';
}

// 📌 Butona Basınca Dark Mode Aç/Kapat
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? '🌞' : '🌓';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});


