// 🌟 About Me Sayfası İçin JavaScript

// 🚀 Intersection Observer Ayarları
const observerOptions = {
    threshold: 0.2, // Elemanın %20'si ekranda göründüğünde tetiklenecek
};

// 🚀 Genel Intersection Observer (Animasyonları tetikler)
const generalObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible'); // Animasyon sınıfı ekle
            observer.unobserve(entry.target); // Görünen öğeleri artık takip etme
        }
    });
}, observerOptions);

// 🚀 Sayfadaki Bölümleri Gözlemle
document.querySelectorAll('section').forEach((section) => {
    generalObserver.observe(section);
});

// 🚀 About Me Başlığını Gözlemle
const aboutHeading = document.querySelector('.about-section h2');
if (aboutHeading) {
    generalObserver.observe(aboutHeading);
}

// 🚀 Skills Başlığına Animasyon Ekle
const skillsHeading = document.querySelector('.skills-section h2');
if (skillsHeading) {
    generalObserver.observe(skillsHeading);
}

// 🚀 Skills Bölümündeki Alt Başlıkları Gözlemle
document.querySelectorAll('.skills-subheading').forEach((subheading) => {
    generalObserver.observe(subheading);
});

// 🚀 Becerileri Gözlemle
document.querySelectorAll('.skill-card').forEach((card) => {
    generalObserver.observe(card);
});

// 🚀 About Section Animasyonu
const aboutSection = document.querySelector('.about-section');
const aboutParagraphs = document.querySelectorAll('.about-content p');

const aboutObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            aboutSection.classList.add('visible');
            aboutParagraphs.forEach((paragraph) => {
                paragraph.classList.add('visible');
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

aboutObserver.observe(aboutSection);

// 🚀 Sticky Navigation Efekti
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 🚀 Navbar Linkleri İçin Scroll Düzeltmesi
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});



// 🚀 Mobil Menü Link Tıklanınca Kapanacak
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
});

// 🚀 Mobil Menü Aç/Kapat
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// 🚀 Hero Başlığı Neon Animasyonu
const heroHeading = document.querySelector('.hero h1');

const colors = [
    "#FF00FF", "#00FFFF", "#FFFF00", "#FF4500",
    "#FF1493", "#32CD32", "#8A2BE2", "#00FF00",
    "#FFD700", "#DC143C"
];

let index = 0;
let isMouseOver = false;

function changeColor() {
    if (!isMouseOver) {
        heroHeading.style.color = colors[index];

        heroHeading.style.textShadow = `
            0px 0px 5px ${colors[index]}, 
            0px 0px 10px ${colors[index]}50
        `;

        index = (index + 1) % colors.length;
    }

    setTimeout(changeColor, 2000);
}


// 🚀 Başlat
changeColor();


