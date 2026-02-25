// Product Data
const products = {
    product1: {
        title: "Riot White Tee",
        price: "Rp 105.000",
        description: "Daily wear rebel concept inspired by street in town.",
        image: "/images/bebege-white.jpeg",
        whatsapp: "https://wa.me/6287792996178?text=Halo%20saya%20ingin%20pesan%20Riot%20White%20Tee"
    },
    product2: {
        title: "Riot Black Tee",
        price: "Rp 105.000",
        description: "Daily wear rebel concept inspired by street in town.",
        image: "/images/bebege-black.jpeg",
        whatsapp: "https://wa.me/6287792996178?text=Halo%20saya%20ingin%20pesan%20Riot%20Black%20Tee"
    },
    product3: {
        title: "Riot Brown Tee",
        price: "Rp 105.000",
        description: "Daily wear rebel concept inspired by street in town.",
        image: "/images/bebege-brown.jpeg",
        whatsapp: "https://wa.me/6287792996178?text=Halo%20saya%20ingin%20pesan%20Riot%20Brown%20Tee"
    },
};

// Open Modal
function openModal(productId) {
    const modal = document.getElementById('productModal');
    const product = products[productId];
    
    if (product) {
        document.getElementById('modalImage').src = product.image;
        document.getElementById('modalTitle').textContent = product.title;
        document.getElementById('modalPrice').textContent = product.price;
        document.getElementById('modalDescription').textContent = product.description;
        document.getElementById('modalWhatsapp').href = product.whatsapp;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        if (navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'white';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        }
    });
}

console.log('BEBEGE - Local Brand Clothing Website Loaded Successfully!');
