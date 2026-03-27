document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    const scrollBtn = document.querySelector('.scroll-top');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollBtn.style.display = 'flex';
                scrollBtn.style.alignItems = 'center';
                scrollBtn.style.justifyContent = 'center';
            } else {
                scrollBtn.style.display = 'none';
            }
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        scrollBtn.style.display = 'none';
    }

    const addBtns = document.querySelectorAll('.btn-add-cart');
    const cartCountSpan = document.querySelector('.cart-count');
    let cartCount = 0;
    if (cartCountSpan) {
        addBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                cartCount++;
                cartCountSpan.innerText = cartCount;
                const originalText = btn.innerText;
                btn.innerText = 'Added ✓';
                setTimeout(() => { btn.innerText = originalText; }, 800);
            });
        });
    }
    
    const favBtns = document.querySelectorAll('.fav-btn');
    favBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const icon = btn.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! We\'ll get back to you soon.');
            contactForm.reset();
        });
    }

    const newsForms = document.querySelectorAll('.newsletter-form');
    newsForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Subscribed! Enjoy the serenity.');
            form.reset();
        });
    });
});