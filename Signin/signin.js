document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Email:', email);
    console.log('Password:', password);
});

document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = "../Homepage/homepage.html"; // Redirect to the user profile page
});
