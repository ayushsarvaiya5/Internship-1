document.addEventListener('DOMContentLoaded', function() {
    const submenu = document.querySelector('.submenu');
    const toggleIcon = document.querySelector('.toggle-icon');
    const userMenuToggle = document.getElementById('user-menu-toggle');

    // Ensure submenu is visible on page load
    submenu.style.display = 'block';
    toggleIcon.textContent = '-';

    // Highlight the Profile option
    const profileLink = submenu.querySelector('li:nth-child(3) a');
    profileLink.classList.add('active');

    // Set initial background color for user-menu-toggle
    userMenuToggle.style.backgroundColor = '#007bff';
    userMenuToggle.style.color = '#fff';

    // Toggle submenu visibility
    userMenuToggle.addEventListener('click', function() {
        if (submenu.style.display === 'none' || submenu.style.display === '') {
            submenu.style.display = 'block';
            toggleIcon.textContent = '-';
        } else {
            submenu.style.display = 'none';
            toggleIcon.textContent = '+';
        }
    });

    // Media input functionality
    const mediaBtn = document.getElementById('media-btn');
    const mediaInput = document.getElementById('media-input');

    mediaBtn.addEventListener('click', function(event) {
        event.preventDefault();
        mediaInput.click();
    });
});

document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = '../Signin/signin.html';
});