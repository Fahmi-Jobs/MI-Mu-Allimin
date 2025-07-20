// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
    
    // Load Hijri Calendar
    loadHijriCalendar();
});

// Function to load Hijri Calendar (placeholder - will be integrated with KGHT API)
function loadHijriCalendar() {
    const hijriDateElement = document.getElementById('hijri-date');
    const hijriMonthYearElement = document.getElementById('hijri-month-year');
    
    if (hijriDateElement && hijriMonthYearElement) {
        // Placeholder implementation - will be replaced with actual KGHT API integration
        const today = new Date();
        const hijriMonths = [
            'Muharram', 'Safar', 'Rabi\'ul Awwal', 'Rabi\'ul Akhir',
            'Jumadil Awwal', 'Jumadil Akhir', 'Rajab', 'Sya\'ban',
            'Ramadhan', 'Syawwal', 'Dzulqa\'dah', 'Dzulhijjah'
        ];
        
        // Simple approximation - will be replaced with accurate KGHT calculation
        const hijriYear = 1445; // Placeholder
        const hijriMonth = hijriMonths[today.getMonth() % 12];
        const hijriDay = today.getDate();
        
        hijriDateElement.textContent = hijriDay;
        hijriMonthYearElement.textContent = `${hijriMonth} ${hijriYear} H`;
    }
}

// Form validation function (for contact forms)
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('border-red-500');
            isValid = false;
        } else {
            field.classList.remove('border-red-500');
        }
    });
    
    return isValid;
}

// Newsletter subscription (placeholder)
function subscribeNewsletter(email) {
    if (!email || !email.includes('@')) {
        alert('Mohon masukkan alamat email yang valid');
        return;
    }
    
    // Placeholder - will be implemented with backend
    alert('Terima kasih! Anda telah berlangganan newsletter kami.');
}

// Search functionality (placeholder)
function searchSite(query) {
    if (!query.trim()) {
        alert('Mohon masukkan kata kunci pencarian');
        return;
    }
    
    // Placeholder - will be implemented with backend search
    console.log('Searching for:', query);
    alert('Fitur pencarian akan segera tersedia');
}

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is loaded
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Back to top button functionality
function addBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopBtn.className = 'fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 invisible';
    backToTopBtn.id = 'back-to-top';
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.remove('opacity-0', 'invisible');
        } else {
            backToTopBtn.classList.add('opacity-0', 'invisible');
        }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', addBackToTopButton);

