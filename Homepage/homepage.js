// Close submenu on page load
document.addEventListener('DOMContentLoaded', function() {
    var submenu = document.getElementById('submenu');
    submenu.style.display = 'none';
});

// Toggle submenu visibility on click
document.getElementById('user-menu-toggle').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    var submenu = document.getElementById('submenu');
    var toggleIcon = document.querySelector('.toggle-icon');
    
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
        toggleIcon.textContent = '+';
    } else {
        submenu.style.display = 'block';
        toggleIcon.textContent = '-';
    }
});

// For sliding customer reviews
document.addEventListener('DOMContentLoaded', function () {
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;
    let currentIndex = 0;

    function showNextTestimonial() {
        currentIndex = (currentIndex + 2) % totalTestimonials;
        testimonialContainer.style.transform = `translateX(-${currentIndex * 50}%)`;
    }

    setInterval(showNextTestimonial, 5000);
});


// For changing active class
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.new-user-section > *');
    const navItems = document.querySelectorAll('.sidebar nav ul li a');
    const footer = document.querySelector('.footer');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let id = entry.target.id || 'home';
                if (entry.target === footer) {
                    id = 'contact';
                }
                setActiveNavItem(id);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
    observer.observe(footer);

    function setActiveNavItem(id) {
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${id}` || 
                (id === 'home' && item.getAttribute('href') === '../Homepage/homepage.html')) {
                item.classList.add('active');
            }
        });
    }
});
