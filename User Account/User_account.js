document.addEventListener('DOMContentLoaded', function() {
    const submenu = document.querySelector('.submenu');
    const toggleIcon = document.querySelector('.toggle-icon');
    const userMenuToggle = document.getElementById('user-menu-toggle');

    // Ensure submenu is visible on page load
    submenu.style.display = 'block';
    toggleIcon.textContent = '-';

    // Highlight the Profile option
    const profileLink = submenu.querySelector('li:nth-child(4) a');
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

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Profile picture upload functionality
    const profilePic = document.getElementById('profile-pic');
    const uploadPlaceholder = document.querySelector('.upload-placeholder');

    uploadPlaceholder.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePic.src = e.target.result;
            };
            reader.readAsDataURL(file);
        };
        input.click();
    });
});

document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = '../Signin/signin.html';
});