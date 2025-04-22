// User_profile.js
document.addEventListener('DOMContentLoaded', function() {
    const submenu = document.querySelector('.submenu');
    const toggleIcon = document.querySelector('.toggle-icon');
    const userMenuToggle = document.getElementById('user-menu-toggle');

    // Ensure submenu is visible on page load
    submenu.style.display = 'block';
    toggleIcon.textContent = '-';

    // Highlight the Profile option
    const profileLink = submenu.querySelector('li:first-child a');
    profileLink.classList.add('active');

    // Set initial background color for user-menu-toggle
    userMenuToggle.style.backgroundColor = '#007bff';
    userMenuToggle.style.color = '#fff';

    userMenuToggle.addEventListener('click', function(event) {
        event.preventDefault();
        if (submenu.style.display === 'none') {
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

    document.querySelector('.create-post .post-btn').addEventListener('click', function () {
        const textarea = document.querySelector('.create-post textarea');
        const content = textarea.value.trim();
        const file = mediaInput.files[0];

        if (content || file) {
            const posts = document.querySelector('.posts');
            const newPost = document.createElement('div');
            newPost.className = 'post';

            let mediaHtml = '';
            if (file) {
                const fileURL = URL.createObjectURL(file);
                if (file.type.startsWith('image/')) {
                    mediaHtml = `<img src="${fileURL}" alt="Post Image">`;
                } else if (file.type.startsWith('video/')) {
                    mediaHtml = `<video controls><source src="${fileURL}" type="${file.type}">Your browser does not support the video tag.</video>`;
                }
            }

            newPost.innerHTML = `
                    <div class="post-header">
                        <div class="user-image">
                            <img src="../Images/avatar_1.webp" alt="User Image">
                        </div>
                        <div class="post-info">
                            <h3>Jaydon Frankie</h3>
                            <p>${new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                    <p>${content}</p>
                    ${mediaHtml}
                    <div class="post-footer">
                        <p class="like">❤️ 0</p>
                        <p>💬 0</p>
                    </div>
                `;

            posts.insertBefore(newPost, posts.firstChild);
            textarea.value = '';
            mediaInput.value = '';
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('like')) {
            const likeElement = event.target;
            let count = parseInt(likeElement.textContent.replace('❤️', '').trim());

            if (likeElement.classList.contains('liked')) {
                count -= 1;
                likeElement.classList.remove('liked');
            } else {
                count += 1;
                likeElement.classList.add('liked');
            }

            likeElement.textContent = `❤️ ${count}`;
        }
    });

    document.getElementById('logout-btn').addEventListener('click', function() {
        window.location.href = '../Signin/signin.html';
    });
});
