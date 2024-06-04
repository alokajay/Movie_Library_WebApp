document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
        // Navigate to index.html on successful login
        window.location.href = 'index.html';
    } else {
        // Handle errors
        alert(data.msg || 'Login failed');
    }
});
