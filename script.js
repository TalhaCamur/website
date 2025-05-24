// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initial animations
gsap.to('.hero h1', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5
});

gsap.to('.hero p', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.8
});

gsap.to('.hero .btn', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.1
});

// Scroll-based animations for feature cards
gsap.from('.feature-card', {
    scrollTrigger: {
        trigger: '.features',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
});


// Navbar scroll effect with debounce
function debounce(func, wait = 100) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

window.addEventListener('scroll', debounce(() => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}));

// Dark mode toggle with localStorage
const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '🌞';
}


// Form validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.submit-btn');
    const inputs = form.querySelectorAll('.form-input');

    let isValid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (isValid) {
        btn.textContent = 'Sending...';
        setTimeout(() => {
            btn.textContent = 'Message Sent!';
            form.reset();
            setTimeout(() => {
                btn.textContent = 'Send Message';
            }, 2000);
        }, 1500);
    }
});






// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger Menü Aç/Kapa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// GSAP plugin'lerini kaydet
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// "Get in Touch" butonu için animasyonlu kaydırma
document.querySelector('.btn-outline').addEventListener('click', function (e) {
    e.preventDefault(); // Varsayılan tarayıcı kaydırmasını engelle
    gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: "#contact", offsetY: 50 },
        ease: "power2.out"
    });
});


// GSAP ve ScrollTrigger'i kaydedelim
gsap.registerPlugin(ScrollTrigger);

// "IT LAB" logosunu kaydırma animasyonu
gsap.to(".nav-logo", {
    x: 200, // Sola 200px kaydır (bu değeri değiştirebilirsin)
    duration: 2, // 2 saniyede tamamlansın
    scrollTrigger: {
        trigger: "body", // Sayfa aşağı kaydıkça tetiklenecek
        start: "top top", // Sayfanın en üstünden başladığında hareket etsin
        end: "bottom top", // Sayfanın altına yaklaştıkça dursun
        scrub: true, // Kaydırma süresince hareketi yumuşak yap
    }
});