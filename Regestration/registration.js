document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = "../Signin/signin.html"; // Redirect to the sign-in page
});
